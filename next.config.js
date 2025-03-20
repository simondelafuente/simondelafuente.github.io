/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // Evita errores con imágenes en GitHub Pages
  },
  basePath: "/simondelafuente.github.io", // Necesario para GitHub Pages
  assetPrefix: "/simondelafuente.github.io/",
};

module.exports = nextConfig;
