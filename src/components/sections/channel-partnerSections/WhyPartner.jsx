// "use client";

// import Link from "next/link";

// const reasons = [
//   {
//     icon: (
//       <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
//         <path d="M10 2L12.09 7.26L18 8.27L14 12.14L15.18 18.02L10 15.27L4.82 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     heading: "13+ Years of Proven Delivery",
//     body: "Successfully delivered water treatment & fabrication projects across multiple industries.",
//   },
//   {
//     icon: (
//       <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
//         <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     heading: "PAN India Presence",
//     body: "Strong supply chain and service network across major industrial hubs.",
//   },
//   {
//     icon: (
//       <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
//         <path d="M9 3H5a2 2 0 00-2 2v10" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     heading: "Technical Support",
//     body: "Full pre-sales, engineering design, and execution support.",
//   },
//   {
//     icon: (
//       <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
//         <path d="M3 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     heading: "High-Demand Industry",
//     body: "Compliance-driven sector with consistent long-term demand.",
//   },
//   {
//     icon: (
//       <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
//         <rect x="2" y="7" width="16" height="10" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     heading: "In-House Capability",
//     body: "Design, fabrication, and execution handled internally.",
//   },
//   {
//     icon: (
//       <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
//         <path d="M16 8A6 6 0 116 8" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     heading: "Strong Margins",
//     body: "Transparent and profitable partner pricing models.",
//   },
// ];

// export default function WhyPartner() {
//   return (
//     <section className="py-20 md:py-28 bg-[#0d1526] text-white">
//       <div className="container-custom">

//         <div className="grid lg:grid-cols-[320px_1fr] gap-12">

//           {/* LEFT SIDE (STICKY) */}
//           <div className="lg:sticky top-24 h-fit">

//             <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
//               Partner Advantage
//             </p>

//             <h2 className="text-2xl md:text-4xl font-semibold mb-4">
//               Why Partner With Hyaline?
//             </h2>

//             <p className="text-white/70 leading-relaxed mb-6">
//               More than products — we provide a long-term engineering partnership
//               designed for growth and scalability.
//             </p>

//             <Link
//               href="#apply"
//               className="inline-block px-6 py-3 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition font-medium"
//             >
//               Apply Now
//             </Link>
//           </div>

//           {/* RIGHT SIDE GRID */}
//           <div className="grid sm:grid-cols-2 gap-4">

//             {reasons.map((item) => (
//               <div
//                 key={item.heading}
//                 className="group flex gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition"
//               >

//                 {/* ICON */}
//                 <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[rgba(232,176,72,0.15)] text-[var(--color-accent)] shrink-0">
//                   {item.icon}
//                 </div>

//                 {/* TEXT */}
//                 <div>
//                   <h3 className="text-sm font-semibold mb-1">
//                     {item.heading}
//                   </h3>
//                   <p className="text-xs text-white/60 leading-relaxed">
//                     {item.body}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import {
  Star,
  Globe,
  Wrench,
  TrendingUp,
  Settings,
  IndianRupee,
} from "lucide-react";

const reasons = [
  {
    icon: <Star size={18} strokeWidth={1.8} />,
    heading: "13+ Years of Proven Delivery",
    body: "Successfully delivered water treatment and fabrication projects across pharma, chemical, and industrial sectors.",
  },
  {
    icon: <Globe size={18} strokeWidth={1.8} />,
    heading: "PAN India Presence",
    body: "Established supply chain and service network across major industrial regions in India.",
  },
  {
    icon: <Wrench size={18} strokeWidth={1.8} />,
    heading: "Dedicated Technical Support",
    body: "Full pre-sales engineering, design assistance, and execution support for every project.",
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.8} />,
    heading: "High-Growth Industrial Segment",
    body: "Water treatment and compliance-driven industries ensure consistent long-term demand.",
  },
  {
    icon: <Settings size={18} strokeWidth={1.8} />,
    heading: "In-House Engineering Capability",
    body: "Complete control over design, fabrication, and commissioning ensures quality and reliability.",
  },
  {
    icon: <IndianRupee size={18} strokeWidth={1.8} />,
    heading: "Profitable Partner Margins",
    body: "Transparent pricing and structured margins designed for sustainable business growth.",
  },
];

export default function WhyPartner() {
  return (
    <section className="py-10 md:py-18 bg-[#0d1526] text-white md:px-15">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12">
          {/* LEFT SIDE */}
          <div className="lg:sticky top-24 h-fit">
            <p className="text-base uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
              Partner Advantage
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Why Partner With Hyaline?
            </h2>

            <p className="text-white/70 leading-relaxed text-base mb-6">
              More than products — we provide a complete engineering partnership
              that helps you win projects, expand your offerings, and scale your
              business in high-demand industrial sectors.
            </p>

            <Link
              href="#apply"
              className="inline-block px-6 py-3 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition font-medium shadow"
            >
              Apply Now
            </Link>
          </div>

          {/* RIGHT GRID */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item) => (
              <div
                key={item.heading}
                className="group flex gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition"
              >
                {/* ICON */}
                <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[rgba(232,176,72,0.15)] text-[var(--color-accent)] shrink-0">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-sm font-semibold mb-1">{item.heading}</h3>
                  <p className="text-base text-white/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
