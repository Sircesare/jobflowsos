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
    ];
  },
};

export default nextConfig;