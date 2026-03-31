import MarketSegmentTemplate from "@/components/templates/MarketSegmentTemplate";
import { marketSegments } from "@/data/industries";

export default function Page() {
  return <MarketSegmentTemplate data={marketSegments.industrial} />;
}