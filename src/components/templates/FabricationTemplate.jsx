// // "use client";

// // import Image from "next/image";
// // import Container from "@/components/ui/Container";
// // import Link from "next/link";
// // import { generateFabricationSchema, generateFAQSchema } from "@/lib/schema";
// // import Breadcrumbs from "../ui/Breadcrumbs";

// // export default function FabricationTemplate({ data }) {
// //   return (
// //     <>
// //       {/* ================= SCHEMA ================= */}
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify(generateFabricationSchema(data)),
// //         }}
// //       />

// //       {data.faq?.length > 0 && (
// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify(generateFAQSchema(data.faq)),
// //           }}
// //         />
// //       )}

// //       {/* ================= HERO ================= */}
// //       <section className="relative h-[420px] min-h-[400px]">
// //         <Image
// //           src={data.image || "/images/placeholder.jpg"}
// //           alt={data.title}
// //           fill
// //           className="object-center"
// //           priority
// //         />

// //         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
// //           <Container>
// //             <div className="text-white max-w-3xl">
// //               <p className="text-[#00A3E0] uppercase tracking-wide mb-3">
// //                 Industrial Fabrication
// //               </p>

// //               <h1 className="text-4xl md:text-6xl font-bold mb-4">
// //                 {data.title}
// //               </h1>

// //               <p className="text-gray-300">
// //                 High-quality fabrication engineered for durability, precision,
// //                 and industrial performance.
// //               </p>
// //             </div>
// //           </Container>
// //         </div>
// //       </section>

// //       {/* ================= BREADCRUMB ================= */}
// //       <section className="py-4 bg-gray-50 text-sm">
// //         <Breadcrumbs
// //           items={[
// //             { label: "Home", href: "/" },
// //             { label: "Fabrication", href: "/fabrication" },
// //             { label: data.title },
// //           ]}
// //         />
// //       </section>

// //       {/* ================= STICKY BAR ================= */}
// //       <div className="sticky top-0 z-40 bg-white ">
// //         <Container className="py-4 flex flex-wrap gap-6 justify-between text-sm text-gray-700">
// //           <span>
// //             <b>Category:</b> {data.category}
// //           </span>
// //           <span>
// //             <b>Material:</b> MS / SS / Alloy
// //           </span>
// //           <span>
// //             <b>Customization:</b> Available
// //           </span>
// //           <span>
// //             <b>Delivery:</b> Pan India
// //           </span>
// //         </Container>
// //       </div>

// //       {/* ================= OVERVIEW ================= */}
// //       <section className="py-10 bg-white">
// //         <Container className="grid md:grid-cols-2 gap-12 items-center">
// //           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
// //             <Image
// //               src={data.image || "/images/placeholder.jpg"}
// //               alt={data.title}
// //               fill
// //               className="object-center"
// //             />
// //           </div>

// //           <div>
// //             <h2 className="text-3xl font-bold mb-6 text-gray-900">
// //               Product Overview
// //             </h2>

// //             <p className="text-[var(--heading-text)] mb-6">
// //               {data.description}
// //             </p>

// //             <ul className="space-y-3">
// //               {data.features?.map((item, i) => (
// //                 <li key={i} className="flex gap-3 text-gray-700">
// //                   <span className="text-[#00A3E0]">✔</span>
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </Container>
// //       </section>

// //       {/* ================= APPLICATIONS ================= */}
// //       <section className="py-10 bg-gray-50">
// //         <Container>
// //           <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
// //             Applications
// //           </h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {data.applications?.map((item, i) => (
// //               <div
// //                 key={i}
// //                 className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition text-gray-700"
// //               >
// //                 {item}
// //               </div>
// //             ))}
// //           </div>
// //         </Container>
// //       </section>

// //       {/* ================= INDUSTRIES ================= */}
// //       <section className="py-10 bg-white">
// //         <Container>
// //           <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
// //             Industries We Serve
// //           </h2>

// //           <div className="flex flex-wrap justify-center gap-4">
// //             {data.industries?.map((item, i) => (
// //               <span
// //                 key={i}
// //                 className="px-5 py-2 border rounded-full bg-gray-100 text-gray-700 text-sm"
// //               >
// //                 {item}
// //               </span>
// //             ))}
// //           </div>
// //         </Container>
// //       </section>

// //       {/* ================= FABRICATION STRENGTH ================= */}
// //       <section className="py-10 bg-gray-50">
// //         <Container>
// //           <h2 className="text-3xl font-bold mb-10 text-gray-900">
// //             Our Fabrication Expertise
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-6 text-gray-700">
// //             <div>✔ MS & SS Structural Fabrication</div>
// //             <div>✔ ZLD, MEE & ATFD Structures</div>
// //             <div>✔ Equipment Skids & Frames</div>
// //             <div>✔ Industrial Platforms & Walkways</div>
// //             <div>✔ Custom Process Equipment</div>
// //             <div>✔ Pan India Execution</div>
// //           </div>
// //         </Container>
// //       </section>

// //       {/* ================= CTA ================= */}
// //       <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50 text-center">
// //         <Container>
// //           <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
// //             {data.ctaContent.title}
// //           </h2>

// //           <p className="mb-6 text-[var(--heading-text)] max-w-2xl mx-auto leading-relaxed">
// //             {data.ctaContent.desc}
// //           </p>

// //           <Link
// //             href="/contact"
// //             className="inline-flex items-center gap-2 bg-[#00A3E0] hover:bg-[#008ac0] text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
// //           >
// //             Discuss Your Requirement →
// //           </Link>
// //         </Container>
// //       </section>
// //     </>
// //   );
// // }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/animations.css";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.27924C5.64936 2 5.96891 2.25293 6.05691 2.60921L6.97415 6.23422C7.0541 6.56452 6.89704 6.90782 6.59576 7.06846L5.38414 7.72284C6.25742 9.50762 7.61 10.8602 9.39478 11.7335L10.0492 10.5218C10.2098 10.2206 10.5531 10.0635 10.8834 10.1435L14.5084 11.0607C14.8647 11.1487 15.1176 11.4683 15.1176 11.8384V14.5C15.1176 14.7761 14.8937 15 14.6176 15H12.5C6.70101 15 2 10.299 2 4.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2L3 5.5V11C3 15.1 6.6 18.85 11 20C15.4 18.85 19 15.1 19 11V5.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 11L10 13L14 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CogIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 2V4M11 18V20M4.22 4.22L5.64 5.64M16.36 16.36L17.78 17.78M2 11H4M18 11H20M4.22 17.78L5.64 16.36M16.36 5.64L17.78 4.22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 7V11L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2L13.09 8.26H19.68L14.29 11.97L16.38 18.23L11 14.52L5.62 18.23L7.71 11.97L2.32 8.26H8.91L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2C8.24 2 6 4.24 6 7C6 11.25 11 19 11 19C11 19 16 11.25 16 7C16 4.24 13.76 2 11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="11" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 20C11 20 4 15.5 4 9.5C4 5.91 7.13 3 11 3C14.87 3 18 5.91 18 9.5C18 15.5 11 20 11 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 20V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────
function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm flex-wrap" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-white/60 hover:text-white transition-colors duration-200">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/90 font-medium">{item.label}</span>
          )}
          {i < items.length - 1 && (
            <span className="text-white/30 text-xs">›</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// ─── Default Specs ────────────────────────────────────────────────────────────
const defaultSpecs = [
  { label: "Material",           value: "MS / SS 304 / SS 316 / Alloy Steel" },
  { label: "Standard",           value: "IS 2062 / ASME / EN" },
  { label: "Surface Treatment",  value: "Shot Blast + Epoxy Coating" },
  { label: "Welding Process",    value: "MIG / TIG / SMAW" },
  { label: "NDT Testing",        value: "UT / RT / PT / MT" },
  { label: "Customization",      value: "Available — per Drawing / Spec" },
  { label: "Delivery",           value: "Pan India" },
  { label: "Quality Inspection", value: "In-Process + Final" },
];

// ─── Why Us ───────────────────────────────────────────────────────────────────
const whyUsPoints = [
  { icon: <ShieldIcon />, title: "Quality Assured",       desc: "In-process and final inspection with NDT at every stage." },
  { icon: <CogIcon />,    title: "Custom Engineering",    desc: "Built to your drawings, IS codes, or ASME specifications." },
  { icon: <ClockIcon />,  title: "On-Time Delivery",      desc: "Committed timelines with efficient production scheduling." },
  { icon: <StarIcon />,   title: "13+ Years Experience",  desc: "Deep expertise across heavy engineering and process industries." },
  { icon: <LeafIcon />,   title: "Responsible Practices", desc: "Eco-conscious fabrication with responsible material handling." },
  { icon: <MapPinIcon />, title: "Pan India Execution",   desc: "Installation and erection support across all Indian states." },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FabricationTemplate({ data, relatedProducts = [] }) {
  const [activeImage, setActiveImage] = useState(0);
  const specs = data.specs || defaultSpecs;
  const images = data.gallery?.length ? data.gallery : [data.image].filter(Boolean);

  return (
    // overflow-x-hidden prevents any horizontal scroll bleed
    <div
      className="antialiased overflow-x-hidden"
      style={{ color: "var(--color-text)", fontFamily: "var(--font-body)", background: "var(--color-white)" }}
    >

      {/* ══════════════════════════════════════════════
          1. HERO — viewport height, no overflow
      ══════════════════════════════════════════════ */}
      <section className="relative flex flex-col justify-end overflow-hidden sm:px-18 "
        style={{ height: "65svh", minHeight: "500px", maxHeight: "820px" }}
      >
        {/* Background — slowZoom from globals.css */}
        <div className="absolute inset-0">
          <Image
            src={data.image || "/images/placeholder.jpg"}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-center animate-slowZoom"
            priority
            style={{ filter: "brightness(0.88) saturate(0.75)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 container-custom w-full pb-10 pt-28 lg:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Fabrication", href: "/fabrication" },
              { label: data.title },
            ]}
          />

          <div className="mt-5 max-w-xl">
            {/* Category badge */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1"
              style={{
                background: "rgba(0,163,224,0.15)",
                color: "var(--color-primary)",
                border: "1px solid rgba(0,163,224,0.3)",
                borderRadius: "var(--radius-sm)"
              }}
            >
              {data.category}
            </span>

            <h1
              className="text-white font-semibold leading-tight mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
              }}
            >
              {data.title}
            </h1>

            <p className="text-white/70 text-base leading-relaxed mb-7 max-w-lg">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-3 pb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 transition-all duration-300 group"
                style={{ background: "var(--color-primary)", borderRadius: "var(--radius-md)" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--color-accent)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--color-primary)"}
              >
                Request a Quote
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight />
                </span>
              </Link>

              <Link
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-2.5 border border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                <PhoneIcon /> Talk to Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div
          className="relative z-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
        >
          <div className="container-custom">
            <div className="grid grid-cols-3 divide-x" style={{ divideColor: "rgba(255,255,255,0.1)" }}>
              {[
                { value: "13+",       label: "Years Experience" },
                { value: "500+",      label: "Projects Done" },
                { value: "Pan India", label: "Delivery" },
              ].map((s, i) => (
                <div key={i} className="px-4 py-3 text-center">
                  <div
                    className="text-white font-semibold text-base leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-white/45 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. STICKY META BAR
      ══════════════════════════════════════════════ */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{ background: "var(--color-dark)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 py-2.5 text-xs overflow-x-hidden">
            {[
              { label: "Category",      value: data.category },
              { label: "Material",      value: "MS / SS / Alloy" },
              { label: "Customization", value: "Available" },
              { label: "Delivery",      value: "Pan India" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 gap-1.5">
                <span className="font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {item.label}:
                </span>
                <span style={{ color: "rgba(255,255,255,0.75)" }}>{item.value}</span>
                {i < 3 && <span className="ml-1 hidden sm:inline" style={{ color: "rgba(255,255,255,0.12)" }}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          3. PRODUCT OVERVIEW
      ══════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3 min-w-0">
              <div
                className="relative overflow-hidden shadow-md w-full"
                style={{ aspectRatio: "3/2", borderRadius: "var(--radius-md)" }}
              >
                <Image
                  src={images[activeImage] || "/images/placeholder.jpg"}
                  alt={data.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-400"
                />
                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-10 h-10 pointer-events-none"
                  style={{
                    borderTop: "3px solid var(--color-primary)",
                    borderLeft: "3px solid var(--color-primary)",
                    borderTopLeftRadius: "var(--radius-md)"
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0">
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-2 inline-block"
                style={{ color: "var(--color-primary)" }}
              >
                Product Overview
              </span>

              <h2
                className="font-semibold mb-4 leading-snug"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
              >
                {data.title}
              </h2>

              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text)" }}>
                {data.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-5">
                {data.features?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base" style={{ color: "var(--color-text)" }}>
                    <span
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(0,163,224,0.1)", color: "var(--color-primary)" }}
                    >
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Highlight badges (secondary/green) */}
              {data.highlights?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid #F3F4F6" }}>
                  {data.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-base font-medium px-3 py-1.5"
                      style={{
                        background: "rgba(141,198,63,0.08)",
                        color: "#5a8a1a",
                        border: "1px solid rgba(141,198,63,0.25)",
                        borderRadius: "var(--radius-sm)"
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Industries */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(75,85,99,0.6)" }}>
                  Industries Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.industries?.map((item, i) => (
                    <span
                      key={i}
                      className="text-base font-medium px-3 py-1.5 transition-colors duration-200"
                      style={{
                        background: "var(--color-light)",
                        color: "var(--color-text)",
                        border: "1px solid #E5E7EB",
                        borderRadius: "9999px"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. APPLICATIONS
      ══════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1.5 inline-block" style={{ color: "var(--color-primary)" }}>
              Where It is Used
            </span>
            <h2 className="font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}>
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.applications?.map((item, i) => (
              <div
                key={i}
                className="group p-5 text-center cursor-default transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "var(--transition)"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,163,224,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  className="text-3xl font-bold mb-2 leading-none"
                  style={{ fontFamily: "var(--font-heading)", color: "rgba(0,163,224,0.12)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-base font-medium leading-snug" style={{ color: "var(--color-dark)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. TECHNICAL SPECIFICATIONS
      ══════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">

            {/* Sidebar — sticky */}
            <div className="lg:sticky lg:top-16">
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 inline-block" style={{ color: "var(--color-primary)" }}>
                Specifications
              </span>
              <h2
                className="font-semibold mb-3 leading-snug"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
              >
                Technical Details
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text)" }}>
                Standard specs shown. Custom specs available as per your drawings and requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                style={{ color: "var(--color-primary)" }}
              >
                Send Requirement <ArrowRight />
              </Link>
            </div>

            {/* Spec Table */}
            <div
              className="overflow-hidden min-w-0"
              style={{ borderRadius: "var(--radius-md)", border: "1px solid #E5E7EB" }}
            >
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2"
                  style={{
                    borderBottom: i < specs.length - 1 ? "1px solid #F3F4F6" : "none",
                    background: i === 0 ? "var(--color-dark)" : i % 2 === 0 ? "var(--color-white)" : "var(--color-light)",
                    transition: "var(--transition)"
                  }}
                  onMouseEnter={e => { if (i !== 0) e.currentTarget.style.background = "rgba(0,163,224,0.04)"; }}
                  onMouseLeave={e => { if (i !== 0) e.currentTarget.style.background = i % 2 === 0 ? "var(--color-white)" : "var(--color-light)"; }}
                >
                  <div
                    className="px-5 py-3 text-sm font-semibold"
                    style={{
                      color: i === 0 ? "rgba(255,255,255,0.55)" : "var(--color-text)",
                      borderRight: `1px solid ${i === 0 ? "rgba(255,255,255,0.08)" : "#F3F4F6"}`
                    }}
                  >
                    {spec.label}
                  </div>
                  <div
                    className="px-5 py-3 text-sm"
                    style={{
                      color: i === 0 ? "var(--color-white)" : "var(--color-dark)",
                      fontWeight: i === 0 ? 600 : 400
                    }}
                  >
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. WHY CHOOSE US
      ══════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1.5 inline-block" style={{ color: "var(--color-primary)" }}>
              Our Strength
            </span>
            <h2 className="font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}>
              Why Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUsPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 cursor-default"
                style={{
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #E5E7EB",
                  transition: "var(--transition)"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,163,224,0.3)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,163,224,0.07)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(0,163,224,0.08)",
                    color: "var(--color-primary)"
                  }}
                >
                  {point.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["ISO 9001:2015", "ASME Compliant", "IS Standards", "Pan India Certified"].map((cert, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-base font-semibold"
                style={{
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-white)",
                  border: "1px solid #E5E7EB",
                  color: "var(--color-dark)"
                }}
              >
                <span style={{ color: "var(--color-secondary)" }}><CheckIcon /></span>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. CTA — LEAD GENERATION
      ══════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden" style={{ background: "var(--color-dark)" }}>
        {/* Subtle dot bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
        {/* Primary left accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-primary), transparent)" }}
        />

        <div className="container-custom relative">
          <div className="max-w-2xl mx-auto text-center">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block"
              style={{ color: "var(--color-primary)" }}
            >
              Get in Touch
            </span>

            <h2
              className="font-semibold text-white mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
              }}
            >
              {data.ctaContent?.title || `Ready to Discuss Your ${data.title} Requirement?`}
            </h2>

            <p className="mb-8 leading-relaxed text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
              {data.ctaContent?.desc || "Share your specifications and our engineering team will respond within 24 hours."}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 transition-all duration-300 group"
                style={{ background: "var(--color-primary)", borderRadius: "var(--radius-md)" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--color-accent)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--color-primary)"}
              >
                Get a Quote
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight />
                </span>
              </Link>

              <Link
                href="mailto:info@company.com"
                className="inline-flex items-center gap-2 text-white text-base font-medium px-7 py-3 transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "var(--radius-md)"
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"}
              >
                Send Specifications
              </Link>
            </div>

            {/* Trust signals — secondary (green) checkmarks */}
            <div
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {["24hr Response", "Free Consultation", "Custom Fabrication", "ISO Certified"].map((point, i) => (
                <span key={i} className="flex items-center gap-1.5 text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ color: "var(--color-secondary)" }}><CheckIcon /></span>
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}