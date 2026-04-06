import { fabricationData } from "@/data/fabrication";
import { marketSegments } from "@/data/industries";
import { products } from "@/data/products";
import services from "@/data/services";
import { solutions } from "@/data/solutions";

const baseUrl = "https://www.hyalineenviro.com";

export default function sitemap() {
  // Static Pages
  const staticRoutes = ["", "/about", "/careers", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Solutions
  const solutionRoutes = solutions.map((item) => ({
    url: `${baseUrl}/solutions/${item.slug}`,
    lastModified: new Date(),
  }));

  // Fabrication
  const fabricationRoutes = fabricationData.map((item) => ({
    url: `${baseUrl}/fabrication/${item.slug}`,
    lastModified: new Date(),
  }));

  // Products
  const productRoutes = products.map((item) => ({
    url: `${baseUrl}/products/${item.slug}`,
    lastModified: new Date(),
  }));

  // Services
  const serviceRoutes = services.map((item) => ({
    url: `${baseUrl}/services/${item.slug}`,
    lastModified: new Date(),
  }));

  // Market Segments (Nested)
  const marketRoutes = [
    ...marketSegments.industrial.industries.map((item) => ({
      url: `${baseUrl}/market-segments/industrial/${item.slug}`,
      lastModified: new Date(),
    })),
    ...marketSegments.commercial.industries.map((item) => ({
      url: `${baseUrl}/market-segments/commercial/${item.slug}`,
      lastModified: new Date(),
    })),
    ...marketSegments.government.industries.map((item) => ({
      url: `${baseUrl}/market-segments/government/${item.slug}`,
      lastModified: new Date(),
    })),
  ];

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...fabricationRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...marketRoutes,
  ];
}
