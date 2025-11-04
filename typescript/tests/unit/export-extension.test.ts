import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

describe('prepareExtensionBundle', () => {
  let tmpRoot: string | undefined;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'flowhub-export-test-'));
  });

  afterEach(() => {
    if (tmpRoot) {
      fs.rmSync(tmpRoot, { recursive: true, force: true });
      tmpRoot = undefined;
    }
  });

  it('uses the export output provided by runExport', async () => {
    const { prepareExtensionBundle, getDefaultPaths } = require(
      '../../scripts/export-extension-lib.cjs'
    );

    const repoRoot = tmpRoot;
    if (!repoRoot) {
      throw new Error('Temporary workspace was not initialised');
    }

    const paths = getDefaultPaths(repoRoot);

    // Seed the previous export directory without index.html so the test fails
    // until runExport is honored.
    fs.mkdirSync(paths.exportDir, { recursive: true });
    fs.writeFileSync(
      path.join(paths.exportDir, 'placeholder.txt'),
      'intermediate output',
      'utf8',
    );

    // Provide the manifest and icons required by the bundler.
    fs.mkdirSync(paths.assetsDir, { recursive: true });
    fs.writeFileSync(
      path.join(paths.assetsDir, 'icon-32.png'),
      'icon-bytes',
      'utf8',
    );
    fs.writeFileSync(
      paths.manifestPath,
      JSON.stringify({ manifest_version: 3, name: 'Flowhub', version: '0.1' }),
      'utf8',
    );

    // Stub runExport with the correct static export output (index.html present).
    const exportOutput = path.join(repoRoot, 'next-export');
    fs.mkdirSync(exportOutput, { recursive: true });
    const nextStaticDir = path.join(exportOutput, '_next', 'static');
    fs.mkdirSync(nextStaticDir, { recursive: true });
    fs.writeFileSync(
      path.join(nextStaticDir, 'main.js'),
      'console.log("next asset");',
      'utf8',
    );
    fs.writeFileSync(
      path.join(exportOutput, 'index.html'),
      '<html><head></head><body><script>window.__test__ = "inline";</script><script src="/_next/static/main.js"></script><script>(function(){self.__next_f=self.__next_f||[];})();</script></body></html>',
      'utf8',
    );
    fs.writeFileSync(
      path.join(exportOutput, '__next._tree.txt'),
      'reserved',
      'utf8',
    );
    fs.writeFileSync(
      path.join(exportOutput, '_not-found.html'),
      'not-found',
      'utf8',
    );

    expect(() =>
      prepareExtensionBundle({
        ...paths,
        repoRoot,
        runExport: () => ({ outputDir: exportOutput }),
      }),
    ).not.toThrow();

    const bundledIndex = path.join(paths.distDir, 'index.html');
    expect(fs.existsSync(bundledIndex)).toBe(true);

    const reservedFile = path.join(paths.distDir, '__next._tree.txt');
    expect(fs.existsSync(reservedFile)).toBe(false);

    const renamedAssetDir = path.join(paths.distDir, 'next', 'static');
    expect(fs.existsSync(renamedAssetDir)).toBe(true);
    expect(fs.existsSync(path.join(paths.distDir, '_next'))).toBe(false);
    expect(fs.existsSync(path.join(paths.distDir, '_not-found.html'))).toBe(
      false,
    );

    const inlineDir = path.join(paths.distDir, 'next', 'inline');
    const inlineScriptPath = path.join(inlineDir, 'inline-1.js');
    expect(fs.existsSync(inlineScriptPath)).toBe(true);
    const inlineScriptContents = fs.readFileSync(inlineScriptPath, 'utf8');
    expect(inlineScriptContents).toContain('window.__test__ = "inline"');
    expect(inlineScriptContents.includes('/_next/')).toBe(false);

    const indexContents = fs.readFileSync(bundledIndex, 'utf8');
    expect(indexContents.includes('/_next/')).toBe(false);
    expect(indexContents.includes('/next/static/main.js')).toBe(true);
    expect(indexContents.includes('window.__test__')).toBe(false);
    expect(indexContents).toContain('<script src="/next/inline/inline-1.js"></script>');
  });
});
