import Link from "next/link";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";
import Container from "../../ui/Container";
import Image from "next/image";

const segments = [
  {
    name: "Industrial Sector",
    slug: "/market-segments/industrial",
    image: "/images/marketsegments/industrial.webp",
  },
  {
    name: "Commercial & Institutional",
    slug: "/market-segments/commercial",
    image: "/images/marketsegments/commercial.webp",
  },
  {
    name: "Government & Municipal",
    slug: "/market-segments/government",
    image: "/images/marketsegments/government.webp",
  },
];

export default function MarketSegmentSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          variant="product"
          tag="Our Expertise in Market Segments"
          title={
            <>
              Delivering Solutions Across <br />
              Diverse Industry Sectors
            </>
          }
          description={`Hyaline Enviro Engineers Pvt. Ltd. provides specialized water and
          wastewater treatment solutions across industrial, commercial, and
          municipal sectors with precision engineering and sustainability at
          its core.`}
        />
        {/* ===== Cards Section ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((item, index) => (
            <Link
              key={index}
              href={item.slug}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-2xl overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="w-10 h-[2px] bg-blue-400 mt-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
