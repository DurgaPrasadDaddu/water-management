// import { solutions } from "@/data/solutions";
// import SolutionTemplate from "@/components/templates/SolutionTemplate";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return solutions.map((item) => ({
//     slug: item.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params; 
//   const data = solutions.find(
//     (item) => item.slug === slug
//   );

//   if (!data) return {};

//   return {
//     title: data.seo.title,
//     description: data.seo.description,
//     keywords: data.seo.keywords,
//   };
// }

// export default async function Page({ params }) {
//   const { slug } = await params; 
//   const data = solutions.find(
//     (item) => item.slug === slug
//   );

//   if (!data) return notFound();

//   return <SolutionTemplate data={data} />;
// }

import { solutions } from "@/data/solutions";
import SolutionTemplate from "@/components/templates/SolutionTemplate";
import { notFound } from "next/navigation";

// ✅ Force static rendering
export const dynamic = "force-static";

// ================= STATIC PARAMS =================
export function generateStaticParams() {
  return solutions.map((item) => ({
    slug: item.slug,
  }));
}

// ================= METADATA =================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = solutions.find((item) => item.slug === slug);

  if (!data) return {};

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,

    // ✅ Open Graph
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `https://www.hyalineenviro.com/solutions/${slug}`,
      siteName: "Hyaline Enviro Engineers",
      images: [
        {
          url: data.image,
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
      title: data.seo.title,
      description: data.seo.description,
      images: [data.image],
    },
  };
}

// ================= PAGE =================
export default async function Page({ params }) {
  const { slug } = await params;

  const data = solutions.find((item) => item.slug === slug);

  if (!data) return notFound();

  // ================= SCHEMA =================

  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title || data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: "Hyaline Enviro Engineers Pvt. Ltd.",
      url: "https://www.hyalineenviro.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionSchema),
        }}
      />

      {/* ✅ UI */}
      <SolutionTemplate data={data} />
    </>
  );
}