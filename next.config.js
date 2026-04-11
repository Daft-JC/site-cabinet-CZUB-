/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // Bloquer l'indexation Google sur l'URL Vercel, autoriser uniquement le domaine officiel
    const isVercelPreview = process.env.VERCEL_URL &&
      !process.env.VERCEL_URL.includes("cabinet-czub.fr");
    if (isVercelPreview) {
      return [
        {
          source: "/(.*)",
          headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
        },
      ];
    }
    return [];
  },
  async redirects() {
    return [
      // Rediriger l'URL Vercel vers le domaine officiel
      {
        source: "/:path*",
        has: [{ type: "host", value: "site-cabinet-czub.vercel.app" }],
        destination: "https://www.cabinet-czub.fr/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
