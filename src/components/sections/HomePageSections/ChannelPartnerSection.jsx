"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import MobileCTA from "@/components/ui/MobileCTA";

const partnerTypes = [
  {
    title: "Distributors",
    description:
      "Sell membranes, pumps, chemicals, and industrial products in your region with strong margins and supply support.",
    icon: "📦",
  },
  {
    title: "Project Partners",
    description:
      "Collaborate on ETP, STP, RO & ZLD projects with full engineering and execution support.",
    icon: "🏗️",
  },
  {
    title: "Fabricators",
    description:
      "Partner with us for consistent fabrication orders including tanks, vessels, and process equipment.",
    icon: "⚙️",
  },
  {
    title: "Sales Associates",
    description:
      "Generate leads and earn commissions by representing Hyaline Enviro in your industrial network.",
    icon: "🤝",
  },
];

export default function ChannelPartnerSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          variant="product"
          tag="Hyaline Enviro Partner Network"
          title={
            <>
              Grow Your Business <br />
              With Hyaline Enviro Channel Partnerships
            </>
          }
          description={`Join our nationwide partner network and unlock new revenue
          streams in water treatment, industrial fabrication, and turnkey
          project execution. Designed for serious businesses ready to scale.`}
        />

        {/* ================= GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
          {partnerTypes.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
            >
              {/* ICON */}
              <div className="text-3xl mb-4">{item.icon}</div>

              {/* CONTENT */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--heading-title)]">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--heading-text)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href="/channel-partners"
                  className="inline-flex items-center gap-2 text-[#00A3E0] font-medium"
                >
                  Learn More
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link> 
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="text-center">
          <Link
            href="/channel-partners"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00A3E0] text-white font-semibold shadow hover:shadow-lg transition"
          >
            Become a Channel Partner
          </Link>
        </div>

        <MobileCTA href="/channel-partners" label="Become a Partner" />
      </Container>
    </SectionWrapper>
  );
}