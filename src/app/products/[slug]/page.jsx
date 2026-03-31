// import { notFound } from "next/navigation";
// import { products } from "@/data/products";
// import ProductTemplate from "@/components/templates/ProductTemplate";

// export const dynamicParams = false; //IMPORTANT

// // ================= STATIC PARAMS =================
// export function generateStaticParams() {
//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }

// // ================= METADATA =================
// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const product = products.find((p) => p.slug === slug);

//   if (!product) return {};

//   const baseUrl = "https://hyalineenviro.com";

//   return {
//     title: product.seo?.title || product.name,
//     description: product.seo?.description || "",

//     openGraph: {
//       title: product.seo?.title || product.name,
//       description: product.seo?.description || "",
//       images: [
//         {
//           url: `${baseUrl}${product.image}`,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// }

// // ================= PAGE =================
// export default async function ProductPage({ params }) {
//   const { slug } = await params;

//   const product = products.find((p) => p.slug === slug);

//   if (!product) return notFound();

//   return <ProductTemplate product={product} />;
// }

import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductTemplate from "@/components/templates/ProductTemplate";

// ✅ Force static rendering
export const dynamic = "force-static";

// ✅ Optional (still good)
export const dynamicParams = false;

// ================= STATIC PARAMS =================
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// ================= METADATA =================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return {};

  const baseUrl = "https://www.hyalineenviro.com";

  return {
    title: product.seo?.title || product.name,
    description: product.seo?.description || "",

    // ✅ Open Graph
    openGraph: {
      title: product.seo?.title || product.name,
      description: product.seo?.description || "",
      url: `${baseUrl}/products/${slug}`,
      siteName: "Hyaline Enviro Engineers",
      images: [
        {
          url: `${baseUrl}${product.image}`,
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
      title: product.seo?.title || product.name,
      description: product.seo?.description || "",
      images: [`${baseUrl}${product.image}`],
    },
  };
}

// ================= PAGE =================
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  // ✅ Product Schema (BIG SEO BOOST)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`https://www.hyalineenviro.com${product.image}`],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Hyaline Enviro Engineers",
    },
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* ✅ UI */}
      <ProductTemplate product={product} />
    </>
  );
}