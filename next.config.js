/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // importante si usas imágenes
  },
  basePath: '/simondelafuente.github.io', // reemplaza con el nombre exacto de tu repositorio
  assetPrefix: '/simondelafuente.github.io/', // igual que arriba

};

module.exports = nextConfig;
