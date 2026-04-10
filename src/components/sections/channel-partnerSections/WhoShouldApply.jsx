"use client";

import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Building2,
  Users,
  Factory,
  Package,
  User,
} from "lucide-react";

const profiles = [
  {
    icon: <Building2 size={22} strokeWidth={1.6} />,
    title: "EPC Contractors",
    description:
      "Execute industrial and infrastructure projects requiring water treatment and process systems.",
  },
  {
    icon: <Users size={22} strokeWidth={1.6} />,
    title: "Industrial Consultants",
    description:
      "Specify water treatment systems and partner with reliable engineering and execution teams.",
  },
  {
    icon: <Factory size={22} strokeWidth={1.6} />,
    title: "Fabricators",
    description:
      "Expand into process equipment manufacturing and secure consistent project-based orders.",
  },
  {
    icon: <Package size={22} strokeWidth={1.6} />,
    title: "Equipment Suppliers",
    description:
      "Enhance your portfolio with water treatment systems and industrial fabrication solutions.",
  },
  {
    icon: <User size={22} strokeWidth={1.6} />,
    title: "Entrepreneurs",
    description:
      "Build a scalable industrial business by leveraging your network and market knowledge.",
  },
];

export default function WhoShouldApply() {
  return (
    <SectionWrapper className="bg-white border-y border-[var(--border)]">

      {/* px-15 only for laptop (lg) */}
      <Container className="lg:px-[15px]">

        {/* SECTION HEADING */}
        <SectionHeading
        variant="product"
          tag="Ideal Candidates"
          title={
            <>
              Who Should Apply?
            </>
          }
          description="We partner with organisations and individuals who bring domain expertise, strong market access, and a commitment to delivering quality engineering solutions."
        />

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">

          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="group flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-light)] transition hover:bg-white hover:border-[var(--color-primary)] hover:shadow-md"
            >
              
              {/* ICON */}
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] shrink-0">
                {profile.icon}
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                  {profile.title}
                </h3>

                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </SectionWrapper>
  );
}