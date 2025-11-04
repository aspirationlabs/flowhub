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
    fs.writeFileSync(
      path.join(exportOutput, 'index.html'),
      '<html>export output</html>',
      'utf8',
    );
    fs.writeFileSync(
      path.join(exportOutput, '__next._tree.txt'),
      'reserved',
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
  });
});
