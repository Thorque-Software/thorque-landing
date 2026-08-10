/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // emit out/portfolio/<slug>/index.html instead of out/portfolio/<slug>.html,
  // so a plain static server resolves /portfolio/<slug> without rewrite rules
  trailingSlash: true,
}

module.exports = nextConfig
