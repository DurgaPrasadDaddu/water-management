import { marketSegments } from "@/data/industries";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";

export default async function Page({ params }) {
  // console.log(params);
  //FIX: await params
  const { segment, slug } = await params;

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