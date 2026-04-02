// export default function AboutSection() {
//   return (
//     <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-green-600 font-semibold uppercase tracking-wide mb-3">
//             About Hyaline Enviro Engineers
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
//             Engineering Sustainable Water & Wastewater Solutions for Industries
//           </h2>

//           <p className="text-[var(--heading-text)] leading-relaxed mb-6">
//             Hyaline Enviro Engineers Pvt. Ltd. is a professionally managed company delivering advanced water and wastewater treatment solutions along with industrial fabrication services. From design and engineering to manufacturing, installation, and commissioning — we provide complete turnkey solutions tailored to industry needs.
//           </p>

//           <p className="text-[var(--heading-text)] leading-relaxed mb-6">
//             With over a decade of experience, our team of engineers and fabricators ensures precision, quality, and long-term performance across projects in pharmaceuticals, chemicals, infrastructure, and manufacturing sectors.
//           </p>

//           {/* HIGHLIGHTS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             {[
//               "End-to-End Engineering Solutions",
//               "Advanced Water Treatment Technologies",
//               "Industrial Fabrication Expertise",
//               "Pan India Project Execution",
//             ].map((item, i) => (
//               <div key={i} className="flex items-start gap-3">
//                 <div className="w-5 h-5 bg-green-600 rounded-full mt-1"></div>
//                 <p className="text-gray-700 text-sm">{item}</p>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
//             Learn More →
//           </button>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           <img
//             src="/images/about-industrial.jpg"
//             alt="Industrial Water Treatment"
//             className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
//           />

//           {/* Decorative Overlay Card (Premium Feel) */}
//           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs">
//             <p className="text-sm text-gray-800 font-semibold">
//               Delivering Reliable & Sustainable Engineering Solutions Across India
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { Droplets, Factory, Settings, Globe, ArrowRight } from "lucide-react";
// import SectionWrapper from "../ui/SectionWrapper";
// import SectionHeading from "../ui/SectionHeading";

// export default function AboutSection() {
//   const features = [
//     {
//       icon: <Droplets className="w-6 h-6 text-blue-500" />,
//       title: "Water Treatment Experts",
//       desc: "Advanced WTP, STP, ETP, RO & ZLD systems",
//     },
//     {
//       icon: <Factory className="w-6 h-6 text-green-500" />,
//       title: "Industrial Fabrication",
//       desc: "MS, SS structures & custom equipment",
//     },
//     {
//       icon: <Settings className="w-6 h-6 text-gray-900" />,
//       title: "End-to-End Solutions",
//       desc: "Design to commissioning services",
//     },
//     {
//       icon: <Globe className="w-6 h-6 text-cyan-500" />,
//       title: "Pan India Presence",
//       desc: "Serving industries across India",
//     },
//   ];

//   return (
//     <SectionWrapper>
//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* Heading */}
//         <SectionHeading
//           preTitle="Welcome to"
//           highlight="HYALINE ENVIRO ENGINEERS"
//           title={
//             <>
//               Engineering Sustainable Water <br />& Wastewater Solutions
//             </>
//           }
//           description={`Hyaline Enviro Engineers Pvt. Ltd. delivers advanced water and
//           wastewater treatment solutions along with industrial fabrication
//           services. We provide complete end-to-end engineering solutions
//           from design to commissioning.`}
//         />

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative">
//             <div className="rounded-3xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/images/about/hyaline-home-about.webp"
//                 alt="Water Treatment"
//                 width={600}
//                 height={500}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             {/* Floating Experience Card */}
//             <div className="absolute -top-6 -left-3 lg:-left-5 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/50">
//               <h4 className="text-xl font-bold text-blue-600">13+</h4>
//               <p className="text-md text-[var(--heading-text)]">Industrial Sectors </p>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div>
//             <h3 className="text-2xl font-bold text-[var(--heading-title)] mb-6">
//               Delivering Innovative Engineering & Environmental Solutions
//             </h3>

//             <p className="text-[var(--heading-text)] mb-8 leading-relaxed">
//               Our expertise spans across WTP, STP, ETP, RO, ZLD, MEE, and ATFD
//               systems. With a skilled team of engineers and fabricators, we
//               ensure precision, quality, and long-term reliability.
//             </p>

//             {/* FEATURES */}
//             <div className="grid sm:grid-cols-2 gap-5 mb-10">
//               {features.map((item, index) => (
//                 <div
//                   key={index}
//                   className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-lg hover:shadow-xl transition duration-300"
//                 >
//                   <div className="flex items-center gap-3 mb-2">
//                     {item.icon}
//                     <h4 className="font-semibold text-gray-800">
//                       {item.title}
//                     </h4>
//                   </div>
//                   <p className="text-sm text-[var(--heading-text)]">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA BUTTONS */}

//             <div className="flex flex-wrap gap-4">
//               {/* Primary CTA */}
//               <a
//                 href="/about"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
//               >
//                 Discover More
//                 <ArrowRight className="w-4 h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }

import Image from "next/image";
import { Droplets, Factory, Settings, Globe, ArrowRight } from "lucide-react";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionHeading from "../../../components/ui/SectionHeading";

export default function AboutSection() {
  const features = [
    {
      icon: <Droplets className="w-6 h-6 text-[color:var(--color-primary)]" />,
      title: "Water Treatment Experts",
      desc: "Advanced WTP, STP, ETP, RO & ZLD systems",
    },
    {
      icon: <Factory className="w-6 h-6 text-[color:var(--color-secondary)]" />,
      title: "Industrial Fabrication",
      desc: "MS, SS structures & custom equipment",
    },
    {
      icon: <Settings className="w-6 h-6 text-[color:var(--color-dark)]" />,
      title: "End-to-End Solutions",
      desc: "Design to commissioning services",
    },
    {
      icon: <Globe className="w-6 h-6 text-[color:var(--color-primary)]" />,
      title: "Pan India Presence",
      desc: "Serving industries across India",
    },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <SectionHeading
          preTitle="Welcome to"
          highlight="HYALINE ENVIRO ENGINEERS"
          title={
            <>
              Engineering Sustainable Water <br />& Wastewater Solutions
            </>
          }
          description={`Hyaline Enviro Engineers Pvt. Ltd. delivers advanced water and 
          wastewater treatment solutions along with industrial fabrication 
          services. We provide complete end-to-end engineering solutions 
          from design to commissioning.`}
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/hyaline-home-about.webp"
                alt="Water Treatment Plant"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -top-6 -left-3 lg:-left-5 bg-white/80 backdrop-blur-lg p-4 lg:p-6 rounded-2xl shadow-xl border border-white/50">
              <p className="text-xl text-center font-bold text-[color:var(--color-primary)]">
                15+
              </p>
              <p className="text-sm text-[color:var(--color-text)]">
                Industrial Sectors
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-2xl font-bold text-[color:var(--color-dark)] mb-6">
              Delivering Innovative Engineering & Environmental Solutions
            </h3>

            <p className="text-[color:var(--color-dark)] text-base sm:text-lg mb-8 leading-relaxed">
              Our expertise spans across WTP, STP, ETP, RO, ZLD, MEE, and ATFD
              systems. With a skilled team of engineers and fabricators, we
              ensure precision, quality, and long-term reliability.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    p-5 rounded-2xl
                    bg-white/80 backdrop-blur-md
                    border border-gray-100
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h4 className="font-semibold text-[color:var(--color-dark)]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-base text-[color:var(--color-text)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/about"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-xl
                  bg-[color:var(--color-primary)]
                  text-white/90 font-medium
                  shadow-lg
                  hover:bg-[color:var(--color-accent)]
                  hover:shadow-xl
                  transition duration-300
                "
              >
                Discover More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
