/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sitio estático: se genera en /out y se sirve desde Cloudflare Pages.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
