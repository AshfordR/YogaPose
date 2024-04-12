/** @type {import('next').NextConfig} */
const nextConfig = {
    NEXT_PUBLIC_HOSTNAME: "http://localhost:3000/api/",
        MONGODB_URI: "mongodb://localhost:27017/YogaDatabase",
        NEXTAUTH_SECRET: "qwerty1234",
        NEXTAUTH_URL: "http://localhost:3000",
        SECRET: "qwerty1234",
};

export default nextConfig;
