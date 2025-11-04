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

function removeReservedEntries(directory) {
  const reservedPrefixes = ['__next.'];
  const entries = fs.existsSync(directory) ? fs.readdirSync(directory) : [];

  entries.forEach((entry) => {
    if (reservedPrefixes.some((prefix) => entry.startsWith(prefix))) {
      fs.rmSync(path.join(directory, entry), { recursive: true, force: true });
    }
  });
}

function getDefaultPaths(repoRoot) {
  return {
    exportDir: path.join(repoRoot, 'typescript', '.next'),
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
    removeReservedEntries(distDir);
  } finally {
    if (typeof cleanup === 'function') {
      cleanup();
    }
  }
}

module.exports = {
  ensureExists,
  copyRecursive,
  removeReservedEntries,
  getDefaultPaths,
  resolveExportSource,
  prepareExtensionBundle,
};
