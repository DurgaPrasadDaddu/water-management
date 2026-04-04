// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../ui/Banner";

// export default function IndustryDetailTemplate({ segment, industry }) {
//   return (
//     <>
//       {/* Banner */}
//       <Banner
//         title={industry.name}
//         description={`Advanced water and wastewater treatment systems tailored for ${industry.name.toLowerCase()} industry requirements.`}
//         image={industry.image}
//       />

//       {/* Overview Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="relative">
//             <Image
//               src={industry.image}
//               alt={industry.name}
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-lg"
//             />

//             {/* subtle border */}
//             <div className="absolute inset-0 border border-[#00A3E0]/20 rounded-2xl"></div>
//           </div>

//           {/* Content */}
//           <div>
//             <h2 className="text-3xl font-bold text-[var(--heading-title)]">Overview</h2>

//             <p className="mt-6 text-gray-700 leading-relaxed">
//               {industry.description}
//             </p>

//             <div className="mt-8 flex gap-4 flex-wrap">
//               <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
//                 Industry Expertise
//               </span>
//               <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
//                 Customized Solutions
//               </span>
//               <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
//                 End-to-End Engineering
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Challenges vs Solutions */}

//       <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-title)]">
//               Industry Challenges & Our Solutions
//             </h2>

//             <p className="text-[var(--heading-text)] mt-4 max-w-2xl mx-auto">
//               We identify critical operational challenges and deliver engineered
//               solutions that ensure compliance, efficiency, and sustainability.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Problems */}
//             <div className="bg-white p-8 rounded-2xl shadow-sm">
//               <h3 className="text-xl font-semibold text-red-600 mb-4">
//                 Key Challenges
//               </h3>

//               <ul className="space-y-3 text-gray-700">
//                 {industry.problems?.map((item, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <span className="text-red-500 mt-1">●</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Solutions */}
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#00A3E0]/20">
//               <h3 className="text-xl font-semibold text-[#00A3E0] mb-4">
//                 Our Engineering Solutions
//               </h3>

//               <ul className="space-y-3 text-gray-700">
//                 {industry.solutions?.map((item, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <span className="text-[#00A3E0] mt-1">✔</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integrated Approach */}

//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-[var(--heading-title)]">
//             Complete Engineering Approach
//           </h2>

//           <p className="mt-6 text-[var(--heading-text)] leading-relaxed">
//             At Hyaline Enviro Engineers, we provide complete end-to-end
//             solutions — from design and engineering to manufacturing,
//             installation, and commissioning. Our integrated approach ensures
//             reliability, performance, and long-term sustainability for every
//             project.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}

//       <section className="bg-[#00A3E0] text-white py-16 text-center">
//         <h2 className="text-2xl md:text-3xl font-semibold">
//           Need a Customized Solution for {industry.name} Industry?
//         </h2>

//         <p className="mt-4 text-white/90">
//           Our experts will design a solution tailored to your operational needs.
//         </p>

//         <div className="mt-6 flex justify-center gap-4 flex-wrap">
//           <Link
//             href="/contact"
//             className="bg-white text-[#00A3E0] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//           >
//             Contact Us
//           </Link>

//           <Link
//             href="/services"
//             className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00A3E0] transition"
//           >
//             Explore Services
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   ICON PRIMITIVES
───────────────────────────────────────────────────────────────────────────── */

const Svg = ({ children, size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const IconChevronRight = (p) => (
  <Svg {...p}>
    <path d="M9 18l6-6-6-6" />
  </Svg>
);
const IconArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
);
const IconAlert = (p) => (
  <Svg {...p}>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Svg>
);
const IconCheck = (p) => (
  <Svg {...p}>
    <path d="M20 6L9 17l-5-5" />
  </Svg>
);
const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Svg>
);
const IconDollar = (p) => (
  <Svg {...p}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </Svg>
);
const IconLeaf = (p) => (
  <Svg {...p}>
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5 21l2-1c2.54-.5 9-3 11.5-7.5C21 9 19 7 17 8z" />
  </Svg>
);
const IconDroplets = (p) => (
  <Svg {...p}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0014 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 01-11.91 4.97" />
  </Svg>
);
const IconSearch = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="22" y2="22" />
  </Svg>
);
const IconCog = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </Svg>
);
const IconZap = (p) => (
  <Svg {...p}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </Svg>
);
const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.87a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </Svg>
);
const IconMail = (p) => (
  <Svg {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
   SEGMENT CONFIG
───────────────────────────────────────────────────────────────────────────── */

const SEGMENT = {
  industrial: {
    badge: "Industrial Sector",
    dot: "bg-orange-500",
    pill: "bg-orange-50 text-orange-700 border-orange-200",
  },
  commercial: {
    badge: "Commercial Sector",
    dot: "bg-[#8DC63F]",
    pill: "bg-green-50  text-green-700  border-green-200",
  },
  government: {
    badge: "Government Sector",
    dot: "bg-violet-600",
    pill: "bg-violet-50 text-violet-700 border-violet-200",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   APPROACH STEPS
───────────────────────────────────────────────────────────────────────────── */

const STEPS = [
  {
    no: "01",
    title: "Analysis",
    Icon: IconSearch,
    iconBg: "bg-[#00A3E0]",
    cardBorder: "border-blue-100",
    cardHover: "hover:border-[#00A3E0]/40",
    text: "text-[#00A3E0]",
    barBg: "bg-[#00A3E0]",
    desc: "Deep-dive audit of your infrastructure, effluent characteristics, and regulatory landscape.",
  },
  {
    no: "02",
    title: "Design",
    Icon: IconCog,
    iconBg: "bg-violet-500",
    cardBorder: "border-violet-100",
    cardHover: "hover:border-violet-400/40",
    text: "text-violet-600",
    barBg: "bg-violet-500",
    desc: "Bespoke system architecture — sizing equipment, selecting chemistry, and modelling flow.",
  },
  {
    no: "03",
    title: "Implementation",
    Icon: IconZap,
    iconBg: "bg-amber-500",
    cardBorder: "border-amber-100",
    cardHover: "hover:border-amber-400/40",
    text: "text-amber-600",
    barBg: "bg-amber-500",
    desc: "On-site commissioning by certified project engineers with zero compromise on quality.",
  },
  {
    no: "04",
    title: "Optimization",
    Icon: IconShield,
    iconBg: "bg-[#8DC63F]",
    cardBorder: "border-green-100",
    cardHover: "hover:border-[#8DC63F]/40",
    text: "text-[#5a8a1a]",
    barBg: "bg-[#8DC63F]",
    desc: "Post-commissioning monitoring, SCADA integration, and continuous process tuning.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   BENEFITS
───────────────────────────────────────────────────────────────────────────── */

const BENEFITS = [
  {
    Icon: IconShield,
    title: "Regulatory Compliance",
    desc: "Meet CPCB, SPCB & international discharge standards confidently.",
    iconBg: "bg-blue-50",
    iconColor: "text-[#00A3E0]",
    border: "border-blue-100",
  },
  {
    Icon: IconDollar,
    title: "Cost Reduction",
    desc: "Lower OPEX through energy-efficient design and intelligent automation.",
    iconBg: "bg-green-50",
    iconColor: "text-[#5a8a1a]",
    border: "border-green-100",
  },
  {
    Icon: IconDroplets,
    title: "Water Reuse",
    desc: "Recover and recycle treated water for secondary industrial processes.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    border: "border-sky-100",
  },
  {
    Icon: IconLeaf,
    title: "Sustainability Goals",
    desc: "Align ESG commitments with ZLD mandates and greener operational footprints.",
    iconBg: "bg-lime-50",
    iconColor: "text-[#8DC63F]",
    border: "border-lime-100",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED: SECTION LABEL
───────────────────────────────────────────────────────────────────────────── */

const SectionLabel = ({ text }) => (
  <div className="flex items-center justify-center gap-2 mb-4">
    <span className="block w-8 h-0.5 bg-[#00A3E0]" />
    <span
      style={{ fontFamily: "var(--font-poppins)", letterSpacing: "0.22em" }}
      className="text-[#00A3E0] text-xs font-bold uppercase"
    >
      {text}
    </span>
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function IndustryDetailsTemplate({
  segment = "industrial",
  industry,
}) {
  const [tab, setTab] = useState("problems");
  const seg = SEGMENT[segment] || SEGMENT.industrial;

  if (!industry) return null;
  const {
    name = "Industry",
    image,
    shortDescription = "",
    description = "",
    problems = [],
    solutions = [],
    relatedSolutions = [],
    relatedServices = [],
  } = industry;

  const str = (v) => (typeof v === "string" ? v : v?.title || v?.text || "");

  return (
    <div
      style={{
        fontFamily: "var(--font-inter)",
        color: "var(--color-text)",
        background: "var(--color-white)",
      }}
      className="antialiased overflow-x-hidden"
    >
      {/* 
          1. HERO
       */}
      <section className="relative min-h-[60vh] lg:min-h-[78vh flex items-end overflow-hidden lg:pl-[80px]">
        {/* BG image */}
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
            style={{ filter: "brightness(0.40) saturate(1.1)" }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#00A3E0]/70" />
        )}

        {/* Dark gradient — bottom sweep */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b26] via-[#0d1b26]/25 to-transparent" />

        {/* Brand blue left-edge accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#00A3E0] to-transparent opacity-80" />

       
        <div className="relative z-10 w-full container-custom pb-16 lg:pb-24 pt-16 md:pl-18">
          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap gap-1.5 text-sm text-white/50 mb-7 mt-5">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <IconChevronRight size={13} />
            <Link
              href="/market-segments/industrial"
              className="hover:text-white transition-colors duration-200"
            >
              Industries
            </Link>
            <IconChevronRight size={13} />
            <span className="text-white/80">{name}</span>
          </nav>

          {/* Sector badge */}
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border mb-6 ${seg.pill}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${seg.dot}`} />
            {seg.badge}
          </span>

          {/* Heading */}
          <h1
            style={{ fontFamily: "var(--font-poppins)" }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-5 max-w-4xl"
          >
            {name}
            <span className="block text-[#00A3E0] mt-2">
              Treatment Solutions
            </span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-[1.75] mb-10">
            {shortDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#00A3E0] hover:bg-[#0284C7] text-white font-semibold px-7 py-3.5 rounded-[10px] text-sm transition-all duration-300 shadow-lg shadow-[#00A3E0]/30 hover:-translate-y-0.5"
            >
              Get a Free Consultation
              <IconArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 border border-white/25 hover:border-white/55 text-white/80 hover:text-white font-semibold px-7 py-3.5 rounded-[10px] text-sm transition-all duration-300 backdrop-blur-sm"
            >
              Explore Challenges
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mt-5 p-5 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-4">
            {[
              { v: "500+", l: "Projects Delivered" },
              { v: "18+", l: "States Covered" },
              { v: "100%", l: "Compliance Rate" },
              { v: "13+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  style={{ fontFamily: "var(--font-poppins)" }}
                  className="text-[#00A3E0] text-2xl font-bold"
                >
                  {s.v}
                </div>
                <div className="text-white/45 text-xs uppercase tracking-widest mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
          2. OVERVIEW
       */}
      <section className="section py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="relative group order-2 lg:order-1">
              {/* Offset decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[16px] border-2 border-[#00A3E0]/20 z-0 pointer-events-none" />
              <div className="relative z-10 rounded-[16px] overflow-hidden aspect-[3/2] bg-gray-100 shadow-xl">
                {image && (
                  <Image
                    src={image}
                    alt={`${name} overview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                {/* Floating trust pill */}
                <div className="absolute bottom-5 left-5">
                  <div className="inline-flex items-center gap-2 bg-white/96 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl px-4 py-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse" />
                    <span
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="text-sm text-[#1F2937] font-semibold"
                    >
                      ISO-Certified Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="order-1 lg:order-2">
              <SectionLabel text="Overview" />
              <h2
                style={{ fontFamily: "var(--font-poppins)" }}
                className="text-4xl lg:text-[2.6rem] font-bold text-[#1F2937] leading-tight mb-6"
              >
                Engineered for the
                <br />
                <span className="text-[#00A3E0]">{name}</span> Sector
              </h2>
              <p className="text-[#4B5563] leading-[1.75] mb-8">
                {description || shortDescription}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { e: "🏭", l: "Industry Expertise" },
                  { e: "✅", l: "Compliance Ready" },
                  { e: "⚙️", l: "Customized Solutions" },
                  { e: "🔄", l: "End-to-End Delivery" },
                ].map((c) => (
                  <span
                    key={c.l}
                    className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-gray-200 hover:border-[#00A3E0]/50 hover:bg-blue-50/60 text-[#4B5563] text-sm font-medium px-4 py-2 rounded-[6px] transition-all duration-200 cursor-default"
                  >
                    {c.e} {c.l}
                  </span>
                ))}
              </div>

              <div className="h-px bg-gray-100 mb-7" />

              <div className="flex items-center gap-8">
                <Link
                  href="#approach"
                  className="group inline-flex items-center gap-2 text-[#00A3E0] hover:text-[#0284C7] font-semibold text-sm transition-colors duration-200"
                >
                  Our Approach{" "}
                  <IconArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-[#4B5563] hover:text-[#1F2937] font-semibold text-sm transition-colors duration-200"
                >
                  All Services{" "}
                  <IconArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
          3. CHALLENGES VS SOLUTIONS
       */}
      {(problems.length > 0 || solutions.length > 0) && (
        <section id="challenges" className="section py-24 bg-[#F9FAFB]">
          <div className="container-custom">
            <div className="text-center mb-14">
              <SectionLabel text="Problem → Solution" />
              <h2
                style={{ fontFamily: "var(--font-poppins)" }}
                className="text-4xl lg:text-[2.6rem] font-bold text-[#1F2937] mb-5"
              >
                Challenges We <span className="text-red-500">Identify</span>
                {" & "}
                <span className="text-[#00A3E0]">Solve</span>
              </h2>
              <p className="text-[#4B5563] max-w-2xl mx-auto text-lg leading-relaxed">
                Every industry faces unique environmental and process
                challenges. Our engineers translate those pain points into
                compliant, bankable outcomes.
              </p>
            </div>

            {/* Mobile tab toggle */}
            <div className="flex lg:hidden gap-3 mb-8">
              {["problems", "solutions"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-3 rounded-[10px] text-sm font-bold uppercase tracking-wide border transition-all duration-200 ${
                    tab === t
                      ? t === "problems"
                        ? "bg-red-50 border-red-200 text-red-600"
                        : "bg-blue-50 border-[#00A3E0]/30 text-[#00A3E0]"
                      : "bg-white border-gray-200 text-[#4B5563]"
                  }`}
                >
                  {t === "problems" ? "⚠️ Challenges" : "✅ Solutions"}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* PROBLEMS */}
              <div className={tab === "solutions" ? "hidden lg:block" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-red-50 border border-red-100 rounded-[10px]">
                    <IconAlert size={18} className="text-red-500" />
                  </div>
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="font-bold text-[#1F2937] text-lg"
                    >
                      Industry Challenges
                    </h3>
                    <p className="text-gray-400 text-xs">
                      What your sector faces
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {problems.map((p, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50/30 rounded-[10px] px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-red-50 border border-red-100 group-hover:bg-red-100 rounded-lg flex items-center justify-center mt-0.5 transition-colors duration-200">
                        <IconAlert size={13} className="text-red-500" />
                      </div>
                      <p className="text-[#4B5563] text-sm leading-[1.7]">
                        {str(p)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOLUTIONS */}
              <div className={tab === "problems" ? "hidden lg:block" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-green-50 border border-green-100 rounded-[10px]">
                    <IconCheck size={18} className="text-[#8DC63F]" />
                  </div>
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="font-bold text-[#1F2937] text-lg"
                    >
                      Our Engineering Solutions
                    </h3>
                    <p className="text-gray-400 text-xs">
                      How Hyaline delivers results
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {solutions.map((s, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50/30 rounded-[10px] px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-50 border border-green-100 group-hover:bg-green-100 rounded-lg flex items-center justify-center mt-0.5 transition-colors duration-200">
                        <IconCheck size={13} className="text-[#8DC63F]" />
                      </div>
                      <p className="text-[#4B5563] text-sm leading-[1.7]">
                        {str(s)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transformation banner */}
            <div className="mt-12 relative overflow-hidden rounded-[16px] bg-gradient-to-r from-[#00A3E0] to-[#0284C7] p-8 shadow-xl shadow-[#00A3E0]/20">
              <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h4
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="text-xl font-bold text-white mb-1"
                  >
                    From Compliance Risk → Engineering Excellence
                  </h4>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Every challenge you face has an engineered answer. Let us
                    show you how.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#00A3E0] hover:bg-[#F9FAFB] font-bold px-6 py-3 rounded-[10px] text-sm transition-all duration-200 shadow-md whitespace-nowrap"
                >
                  Request Assessment <IconArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 
          4. ENGINEERING APPROACH
       */}
      <section id="approach" className="section py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text="Methodology" />
            <h2
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-4xl lg:text-[2.6rem] font-bold text-[#1F2937] mb-5"
            >
              Our Engineering Approach
            </h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto text-lg">
              A structured four-phase methodology guaranteeing technical
              precision and regulatory compliance at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => {
              const StepIcon = s.Icon;
              return (
                <div
                  key={s.no}
                  className={`group relative bg-white border ${s.cardBorder} ${s.cardHover} rounded-[16px] p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Oversized step no */}
                  <span
                    aria-hidden="true"
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="absolute top-4 right-4 text-7xl font-black text-gray-100 leading-none select-none group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {s.no}
                  </span>
                  {/* Icon */}
                  <div
                    className={`relative z-10 inline-flex p-3.5 ${s.iconBg} rounded-[10px] mb-6 shadow-md`}
                  >
                    <StepIcon size={20} className="text-white" />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className={`text-lg font-bold mb-3 ${s.text}`}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-[1.7]">
                    {s.desc}
                  </p>
                  {/* Bottom accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full ${s.barBg} transition-all duration-500`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
          6. INDUSTRY BENEFITS
       */}
      <section className="section py-24 bg-[#F9FAFB]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <SectionLabel text="Value Delivered" />
            <h2
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-4xl lg:text-[2.6rem] font-bold text-[#1F2937] mb-5"
            >
              Key Benefits for the{" "}
              <span className="text-[#00A3E0]">{name}</span> Industry
            </h2>
            <p className="text-[#4B5563] max-w-xl mx-auto text-lg">
              Measurable outcomes impacting your bottom line, compliance
              posture, and sustainability targets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => {
              const BIcon = b.Icon;
              return (
                <div
                  key={i}
                  className={`group bg-white border ${b.border} rounded-[16px] p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
                >
                  <div
                    className={`inline-flex p-4 ${b.iconBg} rounded-[10px] mb-5 border ${b.border} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <BIcon size={22} className={b.iconColor} />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="text-base font-bold text-[#1F2937] mb-3"
                  >
                    {b.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-[1.7]">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
          7. CTA
       */}
      <section id="contact" className="section py-20 bg-white">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-br from-[#1F2937] via-[#0f2d42] to-[#1F2937] px-10 py-16 lg:px-20 lg:py-20 text-center shadow-2xl">
            {/* Concentric rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] border border-[#00A3E0]/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-[#00A3E0]/10 rounded-full pointer-events-none" />

            {/* Glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-[#00A3E0]/10 border border-[#00A3E0]/20 text-[#00A3E0] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                Free Consultation Available
              </div>

              <h2
                style={{ fontFamily: "var(--font-poppins)" }}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              >
                Need a Customized Solution
                <br />
                <span className="text-[#00A3E0]">for the {name} Industry?</span>
              </h2>

              <p className="text-white/65 text-lg max-w-2xl mx-auto mb-10 leading-[1.75]">
                Our engineers specialise in compliance-ready, cost-effective
                treatment systems tailored precisely to your operational
                requirements. Let is design yours.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00A3E0] hover:bg-[#0284C7] text-white font-bold px-10 py-4 rounded-[10px] text-base transition-all duration-300 shadow-xl shadow-[#00A3E0]/25 hover:-translate-y-0.5"
                >
                  Get a Quote
                  <IconArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="tel:+917981123366"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/18 border border-white/20 hover:border-white/40 text-white font-bold px-10 py-4 rounded-[10px] text-base transition-all duration-300 backdrop-blur-sm"
                >
                  <IconPhone size={17} className="text-[#8DC63F]" />
                  Talk to an Expert
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-white/10">
                {[
                  "✅ No commitment required",
                  "⚡ Response within 24 hrs",
                  "🔒 Confidential assessment",
                  "🏆 ISO-certified engineers",
                ].map((t) => (
                  <span key={t} className="text-white/45 text-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* Contact row */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <a
                  href="tel:+919553753337"
                  className="inline-flex items-center gap-2 text-white/45 hover:text-[#00A3E0] text-sm transition-colors duration-200"
                >
                  <IconPhone size={13} /> +91 9553753337
                </a>
                <span className="text-white/15">|</span>
                <a
                  href="mailto:info@hyalineenviro.com"
                  className="inline-flex items-center gap-2 text-white/45 hover:text-[#00A3E0] text-sm transition-colors duration-200"
                >
                  <IconMail size={13} /> info@hyalineenviro.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
          UTILITY STYLES
       */}
      <style jsx global>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
