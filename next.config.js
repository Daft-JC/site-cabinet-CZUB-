/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
