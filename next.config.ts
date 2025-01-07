import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["my-site", "*.my-site"] // to avoid csrf attacks
    }
  }
};

export default nextConfig;
