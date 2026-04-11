/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp","images/jpg", "images/png"],
    domains: ["img.youtube.com"],
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