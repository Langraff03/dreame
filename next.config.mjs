/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images.seeklogo.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "www.profissionaldeecommerce.com.br" },
      { protocol: "https", hostname: "blog.mundolipedema.com.br" },
    ],
  },
}

export default nextConfig
