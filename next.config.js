/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "images2.minutemediacdn.com",
      //   port: "",
      //   pathname: "/image/upload/*",
      // },
    ],
  },
};

module.exports = nextConfig;
