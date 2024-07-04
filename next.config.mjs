/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3030',
                pathname: '/static/images/**',
            },
        ],
    },
};

export default nextConfig;
