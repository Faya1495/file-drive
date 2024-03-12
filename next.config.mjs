/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "optimistic-magpie-400.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
