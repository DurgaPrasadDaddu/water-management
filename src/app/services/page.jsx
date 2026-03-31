import ListingPageTemplate from "@/components/templates/ListingPageTemplate";
import services from "@/data/services";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
 title: "Industrial Services | Hyaline Enviro Engineers",
  description:
    "Explore AMC, O&M, plant revamping, retrofitting, and industrial service solutions.",
  path: "/services",
});



export default function ServicesPage() {
    const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://www.hyalineenviro.com/services/${service.slug}`,
    })),
  };
  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
    <ListingPageTemplate
      title="Services"
      subtitle="End-to-end industrial services ensuring efficiency, reliability, and performance."
      data={services}
      basePath="services"
    />
    </>
  );
}