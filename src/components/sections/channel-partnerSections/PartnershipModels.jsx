// "use client";

// import Link from "next/link";

// const models = [
//   {
//     title: "Product Distributor",
//     tagline: "Move products. Build margins.",
//     description:
//       "Sell membranes, pumps, and industrial products with strong supply support.",
//     suitedFor: "Dealers, trading companies",
//     benefits: [
//       "Exclusive territory",
//       "Better pricing",
//       "Marketing support",
//       "Logistics support",
//     ],
//     highlight: false,
//   },
//   {
//     title: "Project Partner",
//     tagline: "Win tenders. Deliver turnkey.",
//     description:
//       "Execute ETP, STP & RO projects with full engineering and technical support.",
//     suitedFor: "EPC contractors, consultants",
//     benefits: [
//       "Design support",
//       "Partner pricing",
//       "Joint bidding",
//       "Execution support",
//     ],
//     highlight: true,
//   },
//   {
//     title: "Fabrication Partner",
//     tagline: "Expand capacity. Deliver quality.",
//     description:
//       "Handle fabrication overflow and regional delivery for industrial equipment.",
//     suitedFor: "Fabricators, contractors",
//     benefits: [
//       "Steady orders",
//       "Technical drawings",
//       "Inspection support",
//       "Reliable terms",
//     ],
//     highlight: false,
//   },
//   {
//     title: "Sales Partner",
//     tagline: "Generate leads. Earn commissions.",
//     description:
//       "Earn by connecting clients with Hyaline solutions in your network.",
//     suitedFor: "Consultants, entrepreneurs",
//     benefits: [
//       "Commission model",
//       "Training provided",
//       "No inventory",
//       "Flexible engagement",
//     ],
//     highlight: false,
//   },
// ];

// export default function PartnershipModels() {
//   return (
//     <section className="py-20 md:py-28 bg-[var(--bg-light)]">
//       <div className="container-custom">

//         {/* HEADER */}
//         <div className="max-w-2xl mx-auto text-center mb-14">
//           <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">
//             Engagement Types
//           </p>

//           <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
//             Choose Your Partnership Model
//           </h2>

//           <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
//             Four structured models designed for different business types and growth paths.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

//           {models.map((model) => (
//             <div
//               key={model.title}
//               className={`relative flex flex-col p-6 rounded-2xl border transition duration-300
//                 ${
//                   model.highlight
//                     ? "bg-white border-[var(--color-primary)] shadow-xl scale-[1.03]"
//                     : "bg-white border-[var(--border)] hover:shadow-lg"
//                 }`}
//             >

//               {/* BADGE */}
//               {model.highlight && (
//                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-xs px-3 py-1 rounded-full font-medium">
//                   Most Popular
//                 </div>
//               )}

//               {/* TITLE */}
//               <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
//                 {model.title}
//               </h3>

//               <p className="text-sm text-[var(--color-primary)] font-medium mb-3">
//                 {model.tagline}
//               </p>

//               {/* DESC */}
//               <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
//                 {model.description}
//               </p>

//               {/* SUITED FOR */}
//               <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-light)] p-3 rounded-md mb-4">
//                 <span className="font-semibold text-[var(--text-primary)]">
//                   Suited for:
//                 </span>{" "}
//                 {model.suitedFor}
//               </div>

//               {/* BENEFITS */}
//               <ul className="space-y-2 mb-6 flex-1">
//                 {model.benefits.map((b) => (
//                   <li key={b} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
//                     <span className="text-green-600 text-xs">✓</span>
//                     {b}
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA */}
//               <Link
//                 href="#apply"
//                 className={`mt-auto text-center px-4 py-2 rounded-lg font-medium transition
//                   ${
//                     model.highlight
//                       ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]"
//                       : "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
//                   }`}
//               >
//                 Choose This Model
//               </Link>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const models = [
  {
    title: "Product Distributor",
    tagline: "Move products. Build margins.",
    description:
      "Sell membranes, pumps, and industrial products with strong supply support and consistent demand.",
    suitedFor: "Dealers, trading companies",
    benefits: [
      "Exclusive territory",
      "Better pricing",
      "Marketing support",
      "Logistics support",
    ],
    highlight: false,
  },
  {
    title: "Project Partner",
    tagline: "Win tenders. Deliver turnkey.",
    description:
      "Execute ETP, STP, RO, and ZLD projects with full engineering, design, and technical support.",
    suitedFor: "EPC contractors, consultants",
    benefits: [
      "Design support",
      "Partner pricing",
      "Joint bidding",
      "Execution support",
    ],
    highlight: true,
  },
  {
    title: "Fabrication Partner",
    tagline: "Expand capacity. Deliver quality.",
    description:
      "Handle fabrication overflow and regional delivery for tanks, vessels, and industrial structures.",
    suitedFor: "Fabricators, contractors",
    benefits: [
      "Steady orders",
      "Technical drawings",
      "Inspection support",
      "Reliable terms",
    ],
    highlight: false,
  },
  {
    title: "Sales Partner",
    tagline: "Generate leads. Earn commissions.",
    description:
      "Leverage your network to generate leads and earn commissions without inventory or operational overhead.",
    suitedFor: "Consultants, entrepreneurs",
    benefits: [
      "Commission model",
      "Training provided",
      "No inventory",
      "Flexible engagement",
    ],
    highlight: false,
  },
];

export default function PartnershipModels() {
  return (
    <SectionWrapper className="bg-[var(--bg-light)]">
      {/* px-15 only for laptop */}
      <Container className="lg:px-[15px]">
        {/* HEADER */}
        <SectionHeading
          variant="product"
          tag="Engagement Types"
          title={
            <>
              Choose Your <br /> Partnership Model
            </>
          }
          description="Four structured partnership models designed to help distributors, contractors, and entrepreneurs enter and scale in high-demand industrial segments."
        />

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {models.map((model) => (
            <div
              key={model.title}
              className={`relative flex flex-col p-6 rounded-2xl border transition duration-300
              ${
                model.highlight
                  ? "bg-white border-[var(--color-primary)] shadow-xl scale-[1.03]"
                  : "bg-white border-[var(--border)] hover:shadow-lg"
              }`}
            >
              {/* BADGE */}
              {model.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-xs px-3 py-1 rounded-full font-medium shadow">
                  Most Popular
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                {model.title}
              </h3>

              <p className="text-sm text-[var(--color-primary)] font-medium mb-3">
                {model.tagline}
              </p>

              {/* DESC */}
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                {model.description}
              </p>

              {/* SUITED */}
              <div className="text-base  bg-[var(--bg-light)] p-3 rounded-md mb-4">
                <span className="font-semibold text-[var(--text-primary)]">
                  Suited for:
                </span>{" "}
                {model.suitedFor}
              </div>

              {/* BENEFITS */}
              <ul className="space-y-2 mb-6 flex-1">
                {model.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-base text-[var(--text-primary)]"
                  >
                    <span className="text-green-600 text-base">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
