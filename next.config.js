/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Fast Refresh for automatic reloading
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
