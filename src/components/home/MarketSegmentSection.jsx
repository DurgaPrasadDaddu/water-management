"use client";

import Link from "next/link";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";
import Image from "next/image";

const segments = [
  {
    name: "Industrial Sector",
    slug: "/market-segments/industrial",
    image: "/images/marketsegments/industrial.jpg",
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
              className="group relative rounded-2xl overflow-hidden h-[380px] shadow-md hover:shadow-2xl transition duration-500"
            >
        
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-xl font-semibold tracking-wide group-hover:text-[#00A3E0] transition">
                  {item.name}
                </h3>

                <div className="mt-3 w-10 h-[2px] bg-[#00A3E0] group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#00A3E0]/40 rounded-2xl transition"></div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
