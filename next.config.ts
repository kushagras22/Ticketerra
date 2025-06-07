import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "valiant-bat-44.convex.cloud",
      protocol: "https"
    }]
  }
};

export default nextConfig;
