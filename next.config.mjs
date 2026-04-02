/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp","images/jpg", "images/png"],
  },
  images: {
  qualities: [60]
},
experimental: {
  optimizePackageImports: true,
},
experimental: {
  optimizeCss: true,
}
};

export default nextConfig;