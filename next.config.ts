import type { NextConfig } from "next";

const backendOrigin =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    forceSwcTransforms: false,
  },
  async rewrites() {
    return [
      {
        source: '/backend-api/:path*',
        destination: `${backendOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
