import { marketSegments } from "@/data/industries";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";

// ✅ STATIC PATHS
export async function generateStaticParams() {
  const paths = [];

  for (const segment in marketSegments) {
    const industries = marketSegments[segment].industries;

    industries.forEach((item) => {
      paths.push({
        segment,
        slug: item.slug,
      });
    });
  }

  return paths;
}

export default async function Page({ params }) {
  const { segment, slug } = await params; // ✅ REQUIRED in Next 16

  const segmentData = marketSegments[segment];
  if (!segmentData) return notFound();

  const industry = segmentData.industries.find(
    (item) => item.slug === slug
  );

  if (!industry) return notFound();

  return (
    <IndustryDetailTemplate
      segment={segmentData}
      industry={industry}
    />
  );
}