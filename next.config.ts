import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

// Use module.exports to ensure everything is included
module.exports = nextConfig;

export default nextConfig;
