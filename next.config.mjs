/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Importante: asegúrate de que basePath esté vacío para GitHub Pages
  basePath: '',
};

export default nextConfig;