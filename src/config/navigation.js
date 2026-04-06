import { fabricationData } from "@/data/fabrication";
import { marketSegments } from "@/data/industries";
import { products } from "@/data/products";
import services from "@/data/services";
import { solutions } from "@/data/solutions";

export const navigation = [
  { name: "Home", href: "/" },

  { name: "About", href: "/about" },

  {
    name: "Solutions",
    children: solutions.map((item) => ({
      name: item.name,
      href: `/solutions/${item.slug}`,
    })),
  },
  {
    name: "Fabrication",
    children: fabricationData.map((item) => ({
      name: item.title,
      href: `/fabrication/${item.slug}`,
    })),
  },
  {
    name: "Products",
    children: products.map((item) => ({
      name: item.name,
      href: `/products/${item.slug}`,
    })),
  },

  {
    name: "Services",
    children: services.map((item) => ({
      name: item.title,
      href: `/services/${item.slug}`,
    })),
  },

  {
    name: "Market Segments",
    children: [
      {
        name: "Industrial Sector",
        href: "/market-segments/industrial",
        children: marketSegments.industrial.industries.map((item) => ({
          name: item.name,
          href: `/market-segments/industrial/${item.slug}`,
        })),
      },
      {
        name: "Commercial & Institutional",
        href: "/market-segments/commercial",
        children: marketSegments.commercial.industries.map((item) => ({
          name: item.name,
          href: `/market-segments/commercial/${item.slug}`,
        })),
      },
      {
        name: "Government & Municipal",
        href: "/market-segments/government",
        children: marketSegments.government.industries.map((item) => ({
          name: item.name,
          href: `/market-segments/government/${item.slug}`,
        })),
      },
    ],
  },

  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];
