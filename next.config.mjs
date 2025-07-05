/** @type {import('next').NextConfig} */
const nextConfig = {
  // ここからが追記部分です
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  // ここまで
};

export default nextConfig;