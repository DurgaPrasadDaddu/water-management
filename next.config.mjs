/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp","images/jpg", "images/png"],
  },
  swcMinify: true,
  images: {
  qualities: [60, 75]
}
};

export default nextConfig;