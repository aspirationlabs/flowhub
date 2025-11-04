import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: path.join('typescript', '.next'),
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
