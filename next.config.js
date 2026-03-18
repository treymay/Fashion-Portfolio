/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/styling/digitizing-design-ideas", destination: "/styling", permanent: true },
      { source: "/archive/digitizing-design-ideas", destination: "/styling", permanent: true },
      { source: "/archive", destination: "/styling", permanent: true },
      { source: "/archive/:path*", destination: "/styling/:path*", permanent: true },
      { source: "/collections", destination: "/design", permanent: true },
      { source: "/accessories", destination: "/design", permanent: true },
      { source: "/projects", destination: "/design", permanent: true },
      { source: "/projects/flo-state-film", destination: "/styling/flo-state", permanent: true },
      { source: "/projects/:path*", destination: "/styling", permanent: true },
      { source: "/clo3d", destination: "/design", permanent: true },
      { source: "/clo3d/:path*", destination: "/design", permanent: true },
      { source: "/photography", destination: "/styling", permanent: true },
      { source: "/photography/:path*", destination: "/styling", permanent: true },
      { source: "/lookbooks", destination: "/styling", permanent: true },
      { source: "/lookbooks/:path*", destination: "/styling", permanent: true },
      { source: "/gallery", destination: "/styling", permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
