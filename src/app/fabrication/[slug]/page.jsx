// import { fabricationData } from "@/data/fabrication";
// import FabricationTemplate from "@/components/templates/FabricationTemplate";
// import { notFound } from "next/navigation";

// export const dynamicParams = false; //IMPORTANT

// // Static paths
// export function generateStaticParams() {
//   return fabricationData.map((item) => ({
//     slug: item.slug,
//   }));
// }

// // SEO
// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const data = fabricationData.find((item) => item.slug === slug);

//   if (!data) return {};

//   return {
//     title: data.seo?.title || data.title,
//     description: data.seo?.description || data.description,
//     keywords: data.seo?.keywords || [],
//   };
// }

// // Page
// export default async function Page({ params }) {
//   const { slug } = await params;

//   const data = fabricationData.find((item) => item.slug === slug);

//   if (!data) return notFound();

//   return <FabricationTemplate data={data} />;
// }

import { fabricationData } from "@/data/fabrication";
import FabricationTemplate from "@/components/templates/FabricationTemplate";
import { notFound } from "next/navigation";

// ✅ Force static rendering
export const dynamic = "force-static";

// ✅ Optional
export const dynamicParams = false;

// ================= STATIC PARAMS =================
export function generateStaticParams() {
  return fabricationData.map((item) => ({
    slug: item.slug,
  }));
}

// ================= METADATA =================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = fabricationData.find((item) => item.slug === slug);

  if (!data) return {};

  const baseUrl = "https://www.hyalineenviro.com";

  return {
    title: data.seo?.title || data.title,
    description: data.seo?.description || data.description,
    keywords: data.seo?.keywords || [],

    // ✅ OpenGraph
    openGraph: {
      title: data.seo?.title || data.title,
      description: data.seo?.description || data.description,
      url: `${baseUrl}/fabrication/${slug}`,
      siteName: "Hyaline Enviro Engineers",
      images: [
        {
          url: `${baseUrl}${data.image}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    // ✅ Twitter
    twitter: {
      card: "summary_large_image",
      title: data.seo?.title || data.title,
      description: data.seo?.description || data.description,
      images: [`${baseUrl}${data.image}`],
    },
  };
}

// ================= PAGE =================
export default async function Page({ params }) {
  const { slug } = await params;

  const data = fabricationData.find((item) => item.slug === slug);

  if (!data) return notFound();

  // ✅ Schema (Industrial Fabrication Service/Product)
  const fabricationSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.title,
    description: data.description,
    image: [`https://www.hyalineenviro.com${data.image}`],
    brand: {
      "@type": "Brand",
      name: "Hyaline Enviro Engineers",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Hyaline Enviro Engineers Pvt. Ltd.",
    },
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fabricationSchema),
        }}
      />

      {/* ✅ UI */}
      <FabricationTemplate data={data} />
    </>
  );
}