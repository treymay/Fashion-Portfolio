/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/collections", permanent: true },
      { source: "/projects/flo-state-film", destination: "/archive/flo-state", permanent: true },
      { source: "/projects/:path*", destination: "/archive", permanent: true },
      { source: "/clo3d", destination: "/accessories", permanent: true },
      { source: "/clo3d/:path*", destination: "/accessories", permanent: true },
      { source: "/photography", destination: "/archive", permanent: true },
      { source: "/photography/:path*", destination: "/archive", permanent: true },
      { source: "/lookbooks", destination: "/archive", permanent: true },
      { source: "/lookbooks/:path*", destination: "/archive", permanent: true },
      { source: "/gallery", destination: "/archive", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
