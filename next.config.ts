import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/demo",
        destination: "/demo/index.html",
      },
      {
        source: "/calculator",
        destination: "/calculator/index.html",
      },
    ];
  },
};

export default nextConfig;