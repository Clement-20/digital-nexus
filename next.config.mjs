/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  // Optimize experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'next-themes'],
  },
  // Enable optimizations for edge deployment
  poweredByHeader: false,
}

export default nextConfig
