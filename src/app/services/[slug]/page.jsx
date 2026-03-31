// import { notFound } from "next/navigation";
// import services from "@/data/services";
// import ServiceTemplate from "@/components/templates/ServiceTemplate";


// // ================= STATIC PARAMS =================
// export function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }


// // ================= METADATA =================
// export async function generateMetadata({ params }) {
//   const { slug } = await params; 
//   const service = services.find((s) => s.slug === slug);

//   if (!service) return {};

//   return {
//     title: service.seo.title,
//     description: service.seo.description,

//     openGraph: {
//       title: service.seo.title,
//       description: service.seo.description,
//       images: [
//         {
//           url: service.image,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// }


// // ================= PAGE =================
// export default async function ServicePage({ params }) {
//   const { slug } = await params; //consistent with products

//   const service = services.find((s) => s.slug === slug);

//   if (!service) return notFound();

//   // ================= SCHEMAS =================

//   // 🔹 Service Schema
//   const serviceSchema = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     name: service.title,
//     description: service.description,
//     provider: {
//       "@type": "Organization",
//       name: "Hyaline Enviro Engineers Pvt. Ltd.",
//     },
//     areaServed: "India",
//   };

//   return (
//     <>
     
//       {/* ================= SERVICE SCHEMA ================= */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(serviceSchema),
//         }}
//       />

//       {/* ================= TEMPLATE ================= */}
//       <ServiceTemplate service={service} />
//     </>
//   );
// }

import { notFound } from "next/navigation";
import services from "@/data/services";
import ServiceTemplate from "@/components/templates/ServiceTemplate";

// ✅ Force static rendering (extra safety)
export const dynamic = "force-static";

// ================= STATIC PARAMS =================
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ================= METADATA =================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,

    // ✅ Open Graph (for social sharing)
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://www.hyalineenviro.com/services/${slug}`,
      siteName: "Hyaline Enviro Engineers",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    // ✅ Twitter SEO (bonus)
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [service.image],
    },
  };
}

// ================= PAGE =================
export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  // ================= SCHEMA =================

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
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
      {/* ✅ Structured Data (SEO Boost) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* ✅ Page UI */}
      <ServiceTemplate service={service} />
    </>
  );
}