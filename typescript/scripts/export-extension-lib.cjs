const fs = require('node:fs');
const path = require('node:path');

function ensureExists(targetPath, description) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`${description} not found at ${targetPath}`);
  }
}

function copyRecursive(source, destination) {
  fs.cpSync(source, destination, { recursive: true, force: true });
}

function walkFiles(directory, visitor) {
  if (!fs.existsSync(directory)) {
    return;
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });

  entries.forEach((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      visitor(entryPath, true);
      walkFiles(entryPath, visitor);
    } else {
      visitor(entryPath, false);
    }
  });
}

function sanitizeDist(directory) {
  const reservedFilePrefixes = ['__next.'];
  const textExtensions = new Set(['.html', '.txt', '.js', '.json']);

  const nextDir = path.join(directory, '_next');
  if (fs.existsSync(nextDir)) {
    const targetDir = path.join(directory, 'next');
    if (fs.existsSync(targetDir)) {
      fs.rmSync(targetDir, { recursive: true, force: true });
    }
    fs.renameSync(nextDir, targetDir);
  }

  const inlineDir = path.join(directory, 'next', 'inline');
  if (!fs.existsSync(inlineDir)) {
    fs.mkdirSync(inlineDir, { recursive: true });
  }

  const pathReplacements = [
    { pattern: /\/_next\//g, value: '/next/' },
    { pattern: /"_next\//g, value: '"next/' },
    { pattern: /'_next\//g, value: "'next/" },
    { pattern: /(\.\/)__?next\//gi, value: '$1next/' },
    { pattern: /\/_next\./g, value: '/next.' },
  ];

  function applyReplacements(content) {
    return pathReplacements.reduce(
      (acc, { pattern, value }) => acc.replace(pattern, value),
      content,
    );
  }

  let inlineScriptCounter = 0;

  function externalizeInlineScripts(htmlContent) {
    return htmlContent.replace(
      /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
      (match, rawAttrs = '', scriptBody = '') => {
        if (/\ssrc\s*=/.test(rawAttrs)) {
          return match;
        }

        // Skip non-JavaScript script types (e.g., application/json)
        if (/type\s*=\s*["'](?!text\/javascript|module|$)/.test(rawAttrs)) {
          return match;
        }

        // Skip Next.js data blocks
        if (/id\s*=\s*["']__NEXT_DATA__["']/.test(rawAttrs)) {
          return match;
        }

        const code = scriptBody.trim();
        if (!code) {
          return match;
        }

        inlineScriptCounter += 1;
        const fileName = `inline-${inlineScriptCounter}.js`;
        const filePath = path.join(inlineDir, fileName);
        const processedCode = applyReplacements(code);
        fs.writeFileSync(filePath, processedCode, 'utf8');

        const normalizedAttrs = rawAttrs.replace(/\s+/g, ' ').trim();
        const attrString = normalizedAttrs ? ` ${normalizedAttrs}` : '';
        return `<script${attrString} src="/next/inline/${fileName}"></script>`;
      },
    );
  }

  walkFiles(directory, (entryPath, isDirectory) => {
    const entryName = path.basename(entryPath);

    if (isDirectory) {
      return;
    }

    if (reservedFilePrefixes.some((prefix) => entryName.startsWith(prefix))) {
      fs.rmSync(entryPath, { force: true });
      return;
    }

    const ext = path.extname(entryName);
    if (textExtensions.has(ext)) {
      let content = fs.readFileSync(entryPath, 'utf8');
      content = applyReplacements(content);

      if (ext === '.html') {
        content = externalizeInlineScripts(content);
      }

      fs.writeFileSync(entryPath, content, 'utf8');
    }
  });

  const rootEntries = fs.existsSync(directory) ? fs.readdirSync(directory) : [];
  rootEntries.forEach((entry) => {
    if (entry.startsWith('_')) {
      fs.rmSync(path.join(directory, entry), { recursive: true, force: true });
    }
  });
}

function getDefaultPaths(repoRoot) {
  return {
    exportDir: path.join(repoRoot, 'out'),
    distDir: path.join(repoRoot, 'dist'),
    assetsDir: path.join(repoRoot, 'typescript', 'assets', 'icons'),
    manifestPath: path.join(repoRoot, 'typescript', 'manifest.json'),
  };
}

function resolveExportSource({ repoRoot, exportDir, runExport }) {
  if (!runExport) {
    return { outputDir: exportDir };
  }

  const result = runExport({
    repoRoot,
    defaultExportDir: exportDir,
  });

  if (typeof result === 'string') {
    return { outputDir: result };
  }

  if (
    result &&
    typeof result === 'object' &&
    typeof result.outputDir === 'string'
  ) {
    return {
      outputDir: result.outputDir,
      cleanup: result.cleanup,
    };
  }

  throw new Error(
    'runExport must return a path string or an object with an outputDir property',
  );
}

function prepareExtensionBundle({
  repoRoot,
  exportDir,
  distDir,
  assetsDir,
  manifestPath,
  runExport,
}) {
  const { outputDir, cleanup } = resolveExportSource({
    repoRoot,
    exportDir,
    runExport,
  });

  ensureExists(outputDir, 'Next.js static export');
  ensureExists(manifestPath, 'Extension manifest');
  ensureExists(assetsDir, 'Generated icon assets');

  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  try {
    copyRecursive(outputDir, distDir);

    const distIconsDir = path.join(distDir, 'icons');
    fs.mkdirSync(distIconsDir, { recursive: true });
    copyRecursive(assetsDir, distIconsDir);

    fs.copyFileSync(manifestPath, path.join(distDir, 'manifest.json'));
    sanitizeDist(distDir);
  } finally {
    if (typeof cleanup === 'function') {
      cleanup();
    }
  }
}

module.exports = {
  ensureExists,
  copyRecursive,
  sanitizeDist,
  getDefaultPaths,
  resolveExportSource,
  prepareExtensionBundle,
};
