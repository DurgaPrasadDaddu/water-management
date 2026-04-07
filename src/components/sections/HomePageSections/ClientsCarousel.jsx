// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Image from "next/image";
// // import SectionWrapper from "../../ui/SectionWrapper";
// // import SectionHeading from "../../ui/SectionHeading";
// // import Container from "../../ui/Container";

// // export default function ClientsCarousel() {
// //   const clients = [
// //     { name: "Pharmaceutical Plants", image: "/clients/pharma.jpg" },
// //     { name: "Chemical Manufacturing Units", image: "/clients/chemical.jpg" },
// //     { name: "Food & Beverage Industries", image: "/clients/food.jpg" },
// //     { name: "Textile Processing Units", image: "/clients/textile.jpg" },
// //     { name: "Power Generation Plants", image: "/clients/power.jpg" },
// //     { name: "Electronics & Semiconductor", image: "/clients/electronics.jpg" },
// //     { name: "Automobile Industries", image: "/clients/automobile.jpg" },
// //     { name: "Steel & Metal Industries", image: "/clients/steel.jpg" },
// //   ];

// //   const duplicated = [...clients, ...clients];

// //   const trackRef = useRef(null);
// //   const [offset, setOffset] = useState(0);
// //   const [isPaused, setIsPaused] = useState(false);

// //   useEffect(() => {
// //     if (isPaused) return;

// //     let animationFrame;

// //     const move = () => {
// //       setOffset((prev) => {
// //         const trackWidth = trackRef.current.scrollWidth / 2;
// //         return prev >= trackWidth ? 0 : prev + 1.6;
// //       });

// //       animationFrame = requestAnimationFrame(move);
// //     };

// //     animationFrame = requestAnimationFrame(move);
// //     return () => cancelAnimationFrame(animationFrame);
// //   }, [isPaused]);

// //   return (
// //     <SectionWrapper className="bg-white relative overflow-hidden">
// //       <Container>
// //         {/* 🔥 Heading (SEO + Marketing optimized) */}
// //         <SectionHeading
// //           tag="Our Clients & Projects"
// //           title={
// //             <>
// //               Trusted by Leading <br />
// //               <span className="text-[#00A3E0]">Industrial Clients</span>
// //             </>
// //           }
// //           description={`Hyaline Enviro Engineers has successfully delivered water treatment and environmental engineering solutions across diverse industries including pharmaceuticals, chemicals, power plants, and manufacturing sectors. Our proven expertise ensures reliability, compliance, and long-term performance.`}
// //         />

// //         {/* 🔥 Carousel */}
// //         <div
// //           className="mt-14 overflow-hidden"
// //           onMouseEnter={() => setIsPaused(true)}
// //           onMouseLeave={() => setIsPaused(false)}
// //         >
// //           <div
// //             ref={trackRef}
// //             className="flex items-center gap-14"
// //             style={{
// //               transform: `translateX(-${offset}px)`,
// //               willChange: "transform",
// //             }}
// //           >
// //             {duplicated.map((client, index) => (
// //               <div
// //                 key={index}
// //                 className="shrink-0 flex flex-col items-center group"
// //               >
// //                 {/* Logo / Image */}
// //                 <div className="w-[140px] h-[80px] flex items-center justify-center bg-white border border-gray-100 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
// //                   <Image
// //                     src={client.image}
// //                     alt={client.name}
// //                     width={120}
// //                     height={60}
// //                     className="object-cover opacity-80 group-hover:opacity-100 transition duration-300"
// //                   />
// //                 </div>

// //                 {/* Label */}
// //                 <p className="text-xs text-gray-500 mt-3 text-center max-w-[140px]">
// //                   {client.name}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* 🔥 Bottom Trust Line */}
// //         <div className="text-center mt-12">
// //           <p className="text-gray-400 text-sm">
// //             Successfully serving <span className="text-[#00A3E0] font-semibold">400+ industrial clients</span> across India with reliable and scalable water treatment solutions.
// //           </p>
// //         </div>
// //       </Container>
// //     </SectionWrapper>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import SectionWrapper from "../../ui/SectionWrapper";
// import SectionHeading from "../../ui/SectionHeading";
// import Container from "../../ui/Container";

// export default function ClientsCarousel() {
//   // ✅ Real client logos (based on your image)
//   const clients = [

//     { name: "Reliance", image: "/clients/reliance.jpg" },
//     { name: "NVIDIA", image: "/clients/nvidia.jpg" },
//     { name: "DRDO", image: "/clients/drdo.jpg" },
//     { name: "KIA Motors", image: "/clients/kia.jpg" },
//     { name: "Dr Reddy's", image: "/clients/dr-reddys.jpg" },
//     { name: "Vivimed", image: "/clients/vivimed.jpg" },
//     { name: "Bharat Biotech", image: "/clients/bharat.jpg" },
//     { name: "LT", image: "/clients/lt.jpg" },
//     { name: "GeneSys", image: "/clients/genesys.jpg" },
//     { name: "SOS Children's Villages", image: "/clients/sos.jpg" },
//     { name: "Vimta", image: "/clients/vimta.jpg" },
//     { name: "MEIL", image: "/clients/meil.jpg" },
//     { name: "CB Group", image: "/clients/cb.jpg" },
//     { name: "IBPIL", image: "/clients/ibpil.jpg" },
//     { name: "Emami", image: "/clients/emami.jpg" },
//     { name: "BBM", image: "/clients/bbm.jpg" },
//     { name: "BSK", image: "/clients/bsk.webp" },
//     { name: "Enmax", image: "/clients/enmax.webp" },
//     { name: "My Home", image: "/clients/myhome.webp" },
//     { name: "Praneeth", image: "/clients/praneeth.webp" },
//     { name: "Ramoji Film City", image: "/clients/ramoji-filim-city.webp" },
//     { name: "Siddartha", image: "/clients/siddartha.webp" },
//     { name: "Vidur", image: "/clients/vidur.webp" },
//     { name: "Azad", image: "/clients/azad.webp" },
//     { name: "Fuzen Group", image: "/clients/fuzen-group.webp" },
//     { name: "Gruner", image: "/clients/gruner.webp" },
//     { name: "MTAR Tech", image: "/clients/mtar-tech.webp" },
//     { name: "MTAR", image: "/clients/mtar.webp" },
    
//   ];

//   const duplicated = [...clients, ...clients];

//   const trackRef = useRef(null);
//   const [offset, setOffset] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     let animationFrame;

//     const move = () => {
//       setOffset((prev) => {
//         const trackWidth = trackRef.current.scrollWidth / 2;
//         return prev >= trackWidth ? 0 : prev + 0.6; // slower & smoother
//       });

//       animationFrame = requestAnimationFrame(move);
//     };

//     animationFrame = requestAnimationFrame(move);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [isPaused]);

//   return (
//     <SectionWrapper className="bg-white relative overflow-hidden">
//       <Container>
//         {/* Heading */}
//         <SectionHeading
//           tag="Our Clients"
//           title={
//             <>
//               Trusted by Leading <br />
//               <span className="text-[#00A3E0]">Industrial Clients</span>
//             </>
//           }
//           description={`Hyaline Enviro Engineers has successfully delivered water treatment and environmental engineering solutions across diverse industries including pharmaceuticals, chemicals, power plants, and manufacturing sectors. Our proven expertise ensures reliability, compliance, and long-term performance.`}
//         />

//         {/* Carousel */}
//         <div  
//           className="mt-14 overflow-hidden"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={trackRef}
//             className="flex items-center gap-16"
//             style={{
//               transform: `translateX(-${offset}px)`,
//               willChange: "transform",
//             }}
//           >
//             {duplicated.map((client, index) => (
//               <div
//                 key={index}
//                 className="shrink-0 flex items-center justify-center group"
//               >
//                 {/* Logo Card */}
//                 <div className="w-[160px] h-[90px] flex items-center justify-center bg-white 
//                                 rounded-xl border border-gray-100 shadow-sm 
//                                 hover:shadow-md transition-all duration-300">
//                   <Image
//                     src={client.image}
//                     alt={client.name}
//                     width={140}
//                     height={70}
//                     className="object-contain opacity-80 group-hover:opacity-100 transition duration-300"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Text */}
//         <div className="text-center mt-12">
//           <p className="text-gray-400 text-sm">
//             Successfully serving{" "}
//             <span className="text-[#00A3E0] font-semibold">
//               400+ clients
//             </span>{" "}
//             across multiple industries with trusted solutions.
//           </p>
//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }

"use client";

import Image from "next/image";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";
import Container from "../../ui/Container";
import "../../../styles/animations.css"

export default function ClientsSection() {
  const clients = [
    { name: "Reliance", image: "/clients/reliance.jpg" },
    { name: "NVIDIA", image: "/clients/nvidia.jpg" },
    { name: "DRDO", image: "/clients/drdo.jpg" },
    { name: "KIA Motors", image: "/clients/kia.jpg" },
    { name: "Dr Reddy's", image: "/clients/dr-reddys.jpg" },
    { name: "Vivimed", image: "/clients/vivimed.jpg" },
    { name: "Bharat Biotech", image: "/clients/bharat.jpg" },
    { name: "LT", image: "/clients/lt.jpg" },
    { name: "GeneSys", image: "/clients/genesys.jpg" },
    { name: "SOS Children's Villages", image: "/clients/sos.jpg" },
    { name: "Vimta", image: "/clients/vimta.jpg" },
    { name: "MEIL", image: "/clients/meil.jpg" },
    { name: "CB Group", image: "/clients/cb.jpg" },
    { name: "IBPIL", image: "/clients/ibpil.jpg" },
    { name: "Emami", image: "/clients/emami.jpg" },
    { name: "BBM", image: "/clients/bbm.jpg" },
    { name: "BSK", image: "/clients/bsk.webp" },
    { name: "Enmax", image: "/clients/enmax.webp" },
    { name: "My Home", image: "/clients/myhome.webp" },
    { name: "Praneeth", image: "/clients/praneeth.webp" },
    { name: "Ramoji Film City", image: "/clients/ramoji-filim-city.webp" },
    { name: "Siddartha", image: "/clients/siddartha.webp" },
    { name: "Vidur", image: "/clients/vidur.webp" },
    { name: "Azad", image: "/clients/azad.webp" },
    { name: "Fuzen Group", image: "/clients/fuzen-group.webp" },
    { name: "Gruner", image: "/clients/gruner.webp" },
    { name: "MTAR Tech", image: "/clients/mtar-tech.webp" },
    { name: "MTAR", image: "/clients/mtar.webp" },
  ];

  // 🔥 Split for hierarchy
  const featured = clients.slice(0, 6);
  const row1 = clients.slice(6, 18);
  const row2 = clients.slice(18);

  return (
    <SectionWrapper className="bg-white overflow-hidden">
      <Container>
        <SectionHeading
          tag="Our Clients"
          title={
            <>
              Trusted by Leading <br />
              <span className="text-[#00A3E0]">Industry Leaders</span>
            </>
          }
          description="We proudly collaborate with top organizations across industries, delivering reliable and scalable solutions."
        />

        {/* 🔥 Featured Clients (Static Premium Row) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center mt-14">
          {featured.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center  transition duration-500"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* 🔥 Marquee Section */}
        <div className="relative mt-16">
          {/* Row 1 (Left → Right) */}
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-marquee">
              {[...row1, ...row1].map((client, i) => (
                <div key={i} className="shrink-0">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain  transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Right → Left) */}
          <div className="overflow-hidden mt-10">
            <div className="flex gap-16 animate-marquee-reverse">
              {[...row2, ...row2].map((client, i) => (
                <div key={i} className="shrink-0">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain  transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Trust Line */}
        <div className="text-center mt-14">
          <p className="text-gray-700 text-base">
            Serving{" "}
            <span className="text-[#00A3E0] font-semibold">
              400+ clients
            </span>{" "}
            across industries with proven excellence.
          </p>
        </div>
      </Container>

      
    </SectionWrapper>
  );
}