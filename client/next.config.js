/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:"http://localhost:4000/:path*"
      }
    ]
  }
};

module.exports = nextConfig
