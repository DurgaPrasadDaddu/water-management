// import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
// import { fabricationData } from "@/data/fabrication";
// import { generateSEO } from "@/lib/seo";


// export const metadata = generateSEO({
//   title: "Industrial Fabrication Works | Hyaline Enviro Engineers",
//   description:
//     "Explore MS & SS fabrication works including tanks, structures, platforms, reactors, and industrial equipment manufacturing.",
//   path: "/fabrication",
// });

// export default function FabricationPage() {
//    const fabricationSchemaList = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: fabricationData.map((item, index) => ({
//       "@type": "ListItem",
//       position: index + 1,
//       name: item.title,
//       url: `https://www.hyalineenviro.com/fabrication/${item.slug}`,
//     })),
//   };
//   return (
//     <>
//      <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(fabricationSchemaList),
//         }}
//       />
      
//     <ListingPageTemplate
//       title="Fabrication"
//       subtitle="High-quality industrial fabrication solutions built with precision engineering and durability."
//       data={fabricationData}
//       basePath="fabrication"
//     />
//     </>
//   );
// }

import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
import { fabricationData } from "@/data/fabrication";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Industrial Fabrication Works | Hyaline Enviro Engineers",
  description:
    "Explore MS & SS fabrication works including tanks, structures, platforms, reactors, and industrial equipment manufacturing.",
  path: "/fabrication",
});

export default function FabricationPage() {
  const fabricationSchemaList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: fabricationData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://www.hyalineenviro.com/fabrication/${item.slug}`,
    })),
  };

  return (
    <>
      {/* ✅ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fabricationSchemaList),
        }}
      />

      {/* ✅ Listing */}
      <ListingPageTemplate
        title="Fabrication"
        subtitle="We specialize in precision-engineered fabrication including MS & SS structures, process tanks, equipment skids, and industrial components. Every solution is customized to meet your operational requirements, ensuring durability, safety, and long-term reliability."
        data={fabricationData}
        basePath="fabrication"
      />
    </>
  );
}