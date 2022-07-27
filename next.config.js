/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'https://cdn.jsdelivr.net'],
  },
}

module.exports = nextConfig
