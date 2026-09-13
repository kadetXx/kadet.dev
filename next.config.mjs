/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.prismic.io" }],
  },
};

export default nextConfig;
