/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-exp1.licdn.com',

      }
    ]
  }
}

module.exports = nextConfig
