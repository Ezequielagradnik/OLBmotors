/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Add this for better Vercel deployment
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Add trailing slashes configuration
  trailingSlash: true,
  // Add proper handling for dynamic routes
  async rewrites() {
    return {
      beforeFiles: [
        // Add any specific rewrites if needed
      ],
      afterFiles: [
        {
          source: '/vehicles/:path*',
          destination: '/vehicles/:path*',
        },
        {
          source: '/brands/:path*',
          destination: '/brands/:path*',
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;