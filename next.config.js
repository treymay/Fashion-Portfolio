/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/gallery', destination: '/lookbooks', permanent: true }];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
