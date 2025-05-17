
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com', 'example.com', 'th.bing.com'],
    },
    async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3307/api/:path*', // Asegúrate que el puerto y host coincidan con tu backend
      },
    ];
  },
};

export default nextConfig;
