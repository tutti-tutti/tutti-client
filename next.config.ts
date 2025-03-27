import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ae-pic-a1.aliexpress-media.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'shopping-phinf.pstatic.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
