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
      subtitle="We deliver end-to-end engineering and O&M solutions — from design and fabrication to optimization and compliance — ensuring sustainability and long-term reliability for industrial and municipal systems."
      data={services}
      basePath="services"
    />
    </>
  );
}