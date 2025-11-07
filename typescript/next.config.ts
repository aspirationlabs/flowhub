import type { NextConfig } from 'next';

const buildTarget = process.env.FLOWHUB_BUILD_TARGET;
const isExtensionBuild = buildTarget === 'extension';

const nextConfig: NextConfig = {
  // Enable static export only when building the browser extension bundle.
  ...(isExtensionBuild ? { output: 'export' } : {}),
};

export default nextConfig;
