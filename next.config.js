/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
