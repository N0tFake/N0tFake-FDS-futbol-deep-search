/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e.imguol.com',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
