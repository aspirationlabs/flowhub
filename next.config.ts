import type { NextConfig } from 'next';
import path from 'path';

const buildTarget = process.env.FLOWHUB_BUILD_TARGET;
const isExtensionBuild = buildTarget === 'extension';

const nextConfig: NextConfig = {
  // Enable static export only when building the browser extension bundle.
  ...(isExtensionBuild ? { output: 'export' } : {}),
  distDir: path.join('typescript', '.next'),
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
