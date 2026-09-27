/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cosmos-3d-orbit-gallery-templ',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig