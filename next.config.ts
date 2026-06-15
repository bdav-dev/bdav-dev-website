import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        qualities: [20, 95],
        remotePatterns: [new URL('https://res.cloudinary.com/bdav-dev/**')]
    }
};

export default nextConfig;
