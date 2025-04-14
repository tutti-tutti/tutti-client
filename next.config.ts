import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
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
      {
        protocol: 'https',
        hostname: 'thumbnail10.coupangcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'content.foodspring.co.kr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sui.ssgcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.efoodzone.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.homeplus.kr',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
