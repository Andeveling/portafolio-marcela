/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "https://rickandmortyapi.com/",
      },
    ],
  },
}

module.exports = nextConfig
