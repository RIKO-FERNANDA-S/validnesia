import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ['192.168.1.47', '*.local-origin.dev'],
}

export default nextConfig;
