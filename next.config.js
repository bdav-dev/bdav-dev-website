/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [20, 95],
        remotePatterns: [new URL('https://res.cloudinary.com/bdav-dev/**')]
    }
}

module.exports = nextConfig
