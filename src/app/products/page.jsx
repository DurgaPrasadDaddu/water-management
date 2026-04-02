// import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
// import { products } from "@/data/products";
// import { generateSEO } from "@/lib/seo";

// export const metadata = generateSEO({
//   title: "Water Treatment Products | Hyaline Enviro Engineers",
//   description:
//     "Explore RO membranes, pressure vessels, UF systems, pumps, and industrial water treatment products.",
//   path: "/products",
// });


// export default function ProductsPage() {
//   const productsSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: products.map((item, index) => ({
//       "@type": "ListItem",
//       position: index + 1,
//       name: item.name,
//       url: `https://www.hyalineenviro.com/products/${item.slug}`,
//     })),
//   };
//   return (
//     <>
//     <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(productsSchema),
//         }}
//       />
//     <ListingPageTemplate
//       title="Products"
//       subtitle="High-performance water treatment products for industrial and commercial applications."
//       data={products}
//       basePath="trading"
//     />
//     </>
//   );
// }

import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
import { products } from "@/data/products";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Water Treatment Products | Hyaline Enviro Engineers",
  description:
    "Explore RO membranes, pressure vessels, UF systems, pumps, and industrial water treatment products.",
  path: "/products",
});

export default function ProductsPage() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `https://www.hyalineenviro.com/products/${item.slug}`,
    })),
  };

  return (
    <>
      {/* ✅ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema),
        }}
      />

      {/* ✅ Listing */}
      <ListingPageTemplate
        title="Products"
        subtitle="Explore a comprehensive range of industrial products including membranes, resins, pressure systems, and testing instruments designed for water treatment and engineering applications. Hyaline Enviro Engineers Pvt. Ltd. supplies reliable, high-performance components tailored for industrial and commercial requirements across India."
        data={products}
        basePath="products" // ✅ FIXED
      />
    </>
  );
}