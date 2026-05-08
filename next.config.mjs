/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "aspire-intern-server.thenexgenix.com",
      },
      {
        protocol: "https",
        hostname: "aspireinternship.thenexgenix.com",
      },
    ],
  },
};

export default nextConfig;
