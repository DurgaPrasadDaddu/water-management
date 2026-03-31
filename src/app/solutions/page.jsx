// import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
// import { solutions } from "@/data/solutions";
// import { generateSEO } from "@/lib/seo";

// export const metadata = generateSEO({
//   title: "Water Treatment Solutions | Hyaline Enviro Engineers",
//   description:
//     "Explore advanced water and wastewater treatment solutions including MEE, ZLD, STP, and ETP systems.",
//   path: "/solutions",
// });

// export default function SolutionsPage() {
//   const solutionsSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: solutions.map((item, index) => ({
//       "@type": "ListItem",
//       position: index + 1,
//       name: item.name,
//       url: `https://www.hyalineenviro.com/solutions/${item.slug}`,
//     })),
//   };
//   return (
//     <>
//      <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(solutionsSchema),
//         }}
//       />
//     <ListingPageTemplate
//       title="Solutions"
//       subtitle="Advanced water and wastewater treatment solutions engineered for industrial excellence."
//       data={solutions}
//       basePath="solutions"
//     />
//     </>
//   );
// }

import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
import { solutions } from "@/data/solutions";
import { generateSEO } from "@/lib/seo";

// ✅ Static SEO
export const metadata = generateSEO({
  title: "Water Treatment Solutions | Hyaline Enviro Engineers",
  description:
    "Explore advanced water and wastewater treatment solutions including MEE, ZLD, STP, and ETP systems.",
  path: "/solutions",
});

export default function SolutionsPage() {
  // ✅ Structured Data (SEO Boost)
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: solutions.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `https://www.hyalineenviro.com/solutions/${item.slug}`,
    })),
  };

  return (
    <>
      {/* ✅ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsSchema),
        }}
      />

      {/* ✅ Listing Template */}
      <ListingPageTemplate
        title="Solutions"
        subtitle="Advanced water and wastewater treatment solutions engineered for industrial excellence."
        data={solutions}
        basePath="solutions"
      />
    </>
  );
}