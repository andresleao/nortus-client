import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   output: 'export',
   basePath: '/nortus-client',
   images: {
      unoptimized: true,
   },
};

export default nextConfig;