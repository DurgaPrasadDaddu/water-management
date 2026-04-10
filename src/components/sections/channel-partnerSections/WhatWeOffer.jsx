// "use client";

// const offerings = [
//   {
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <path d="M4 20h20M4 20V10a2 2 0 012-2h4l2-4h4l2 4h4a2 2 0 012 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         <circle cx="14" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     title: "Water Treatment Systems",
//     description:
//       "Full range of industrial water and wastewater treatment solutions — ETP, STP, RO, ZLD, MEE, and ATFD systems engineered for industrial-scale operations.",
//     tags: ["ETP", "STP", "RO", "ZLD", "MEE", "ATFD"],
//   },
//   {
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <rect x="3" y="14" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
//         <rect x="11" y="9" width="6" height="15" rx="1" stroke="currentColor" strokeWidth="1.5"/>
//         <rect x="19" y="4" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M3 8l5-4 6 4 5-4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     title: "Fabrication Solutions",
//     description:
//       "Custom industrial fabrication including pressure vessels, storage tanks, structural steel, skid assemblies, and process equipment built to IS/ASME standards.",
//     tags: ["Tanks", "Vessels", "Structures", "Skids"],
//   },
//   {
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <path d="M7 4h14a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M10 9h8M10 13h8M10 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: "Trading Products",
//     description:
//       "Authorised distribution of membranes, dosing pumps, test kits, chemicals, filtration media, and accessories.",
//     tags: ["Membranes", "Pumps", "Test Kits", "Chemicals"],
//   },
// ];

// export default function WhatWeOffer() {
//   return (
//     <section id="what-we-offer" className="py-16 md:py-24 bg-[var(--bg-light)]">
//       <div className="container-custom">

//         {/* HEADER */}
//         <div className="max-w-2xl mx-auto text-center mb-12">
//           <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">
//             Our Portfolio
//           </p>

//           <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
//             What We Offer Our Partners
//           </h2>

//           <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
//             Three high-demand product and solution verticals you can represent
//             and sell across your region.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {offerings.map((item) => (
//             <div
//               key={item.title}
//               className="group bg-white border border-[var(--border)] rounded-2xl p-6 flex flex-col transition duration-300 hover:shadow-xl hover:border-[var(--color-primary)]"
//             >
              
//               {/* ICON */}
//               <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] mb-4">
//                 {item.icon}
//               </div>

//               {/* TITLE */}
//               <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
//                 {item.title}
//               </h3>

//               {/* DESC */}
//               <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
//                 {item.description}
//               </p>

//               {/* TAGS */}
//               <div className="flex flex-wrap gap-2 mt-auto">
//                 {item.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="text-xs px-2 py-1 rounded bg-[var(--color-primary-light)] text-[var(--color-primary)] border border-blue-100"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Droplets, Factory, ShoppingCart } from "lucide-react";

const offerings = [
  {
    icon: <Droplets size={28} strokeWidth={1.5} />,
    title: "Water & Wastewater Treatment Systems",
    description:
      "Deliver high-performance water and wastewater treatment solutions including MEE, ETP, STP, ZLD, UF + RO, RO-2 + EDI Systems, Packaged Drinking Water Plant and Fire Fighting systems. Designed for industrial compliance, water recovery, and long-term operational efficiency across pharma, chemical, and manufacturing sectors.",
    tags: ["MEE", "ETP", "STP", "ZLD", "UF+RO","RO-2 + EDI"],
  },
  {
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "Industrial Fabrication & Engineering",
    description:
      "Provide precision-engineered fabrication solutions including MS & SS structures, process tanks, pressure vessels, equipment skids, pipe supports, and custom industrial components. Built for durability, safety, and seamless integration into industrial systems.",
    tags: ["MS Fabrication", "SS Tanks", "Pressure Vessels", "Structures"],
  },
  {
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    title: "Industrial Trading Products",
    description:
      "Access a wide portfolio of high-demand industrial products including RO membranes, pumps, resins, filtration systems, test kits, pressure vessels, and instrumentation from trusted manufacturers for water treatment and process industries.",
    tags: ["Membranes", "Pumps", "Resin", "Test Kits", "PHE", "EDI"],
  },
];
export default function WhatWeOffer() {
  return (
    <SectionWrapper>
      <Container>

        {/* HEADER (Reusable Component) */}
        <SectionHeading
        variant="product"
          tag="Our Portfolio"
          title={
            <>
              What We Offer 
            </>
          }
          description="Choose from three high-demand verticals designed to help distributors and partners expand their offerings, win more projects, and build a scalable industrial business."
        />

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="group bg-white border border-[var(--border)] rounded-2xl p-6 flex flex-col transition duration-300 hover:shadow-xl hover:border-[var(--color-primary)]"
            >
              
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {item.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-base px-2 py-1 rounded bg-[var(--color-primary-light)] text-[var(--color-primary)] border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </Container>
    </SectionWrapper>
  );
}