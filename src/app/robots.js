export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://www.hyalineenviro.com/sitemap.xml",
  };
}