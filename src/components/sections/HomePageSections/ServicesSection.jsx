// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import services from "@/data/services";
// import { ArrowUpRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Image from "next/image";
// import SectionWrapper from "../ui/SectionWrapper";
// import SectionHeading from "../ui/SectionHeading";
// import Container from "../ui/Container";

// export default function ServicesSection() {
//   const [active, setActive] = useState(services[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const translateY = useRef(0);

//   const itemRefs = useRef([]);
//   const containerRef = useRef(null);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const el = itemRefs.current[activeIndex];
//     const container = containerRef.current;
//     const card = cardRef.current;

//     if (el && container && card) {
//       const itemTop = el.offsetTop;
//       const containerHeight = container.offsetHeight;
//       const cardHeight = card.offsetHeight;

//       const maxTranslate = containerHeight - cardHeight;

//       const safeTop = Math.min(itemTop, maxTranslate);

//       translateY.current = safeTop < 0 ? 0 : safeTop;

//       // 👇 DIRECT DOM UPDATE (no re-render)
//       if (card) {
//         card.style.transform = `translateY(${translateY.current}px)`;
//       }
//     }
//   }, [activeIndex]);

//   return (
//     <SectionWrapper>
//       <Container>
//         <SectionHeading
//           variant="product"
//           tag="Hyaline Enviro Service Capabilities"
//           title={
//             <>
//               End-to-End Engineering Services <br />
//               for Water & Industrial Systems
//             </>
//           }
//           description={`Hyaline Enviro Engineers delivers comprehensive engineering services
//           including operation & maintenance, plant revamping, refabrication,
//           and infrastructure solutions. Our expertise ensures reliable
//           performance, regulatory compliance, and long-term operational
//           efficiency across industrial environments.`}
//         />
//         {/* MAIN */}
//         <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start relative mb-15">
//           {/* LEFT SIDE */}
//           <div className="relative space-y-6">
//             {services.map((service, index) => {
//               const isActive = active.slug === service.slug;

//               return (
//                 <div
//                   key={service.slug}
//                   ref={(el) => (itemRefs.current[index] = el)}
//                   onClick={() => {
//                     setActive(service);
//                     setActiveIndex(index);
//                   }}
//                   className="relative cursor-pointer group"
//                 >
//                   {/* BACKGROUND */}
//                   <div
//                     className={`
//                       absolute inset-0 rounded-l-xl rounded-r-none
//                       transition-all duration-500
//                       ${
//                         isActive
//                           ? "bg-gradient-to-r from-[#00A3E0] to-blue-500 shadow-2xl scale-[1.02]"
//                           : "bg-white border border-gray-200 group-hover:bg-gray-50"
//                       }
//                     `}
//                   />

//                   {/* CONTENT */}
//                   <div className="relative flex items-start gap-4 px-6 py-6">
//                     {/* Number */}
//                     <span
//                       className={`text-lg font-semibold ${
//                         isActive ? "text-white" : "text-gray-400"
//                       }`}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     {/* Text */}
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3">
//                         <h3
//                           className={`text-lg font-semibold ${
//                             isActive
//                               ? "text-white"
//                               : "text-gray-800 group-hover:text-black"
//                           }`}
//                         >
//                           {service.shortTitle}
//                         </h3>

//                         <span
//                           className={`transition-all ${
//                             isActive
//                               ? "translate-x-1 text-white"
//                               : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-gray-400"
//                           }`}
//                         >
//                           →
//                         </span>
//                       </div>

//                       <p
//                         className={`text-sm mt-1 max-w-md ${
//                           isActive ? "text-white/80" : "text-gray-500"
//                         }`}
//                       >
//                         {service.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* 🔥 FULL HEIGHT ARROW */}
//                   <div
//                     className={`
//                       absolute top-0 right-[-32px] h-full
//                       transition-all duration-500
//                       ${
//                         isActive
//                           ? "opacity-100 translate-x-0"
//                           : "opacity-0 -translate-x-2"
//                       }
//                     `}
//                   >
//                     <div
//                       className="h-full w-[26px] bg-blue-500"
//                       style={{
//                         clipPath: "polygon(0 0, 100% 50%, 0 100%)",
//                       }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* RIGHT SIDE */}
//           <div ref={containerRef} className="relative w-full h-full mt-10">
//             {/* MOVING CARD */}
//             <div
//               ref={cardRef}
//               className="absolute w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
//               // style={{
//               //   transform: `translateY(${position.top}px)`,
//               // }}
//             >
//               <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-white">
//                 <Image
//                   src={active.image}
//                   alt={active.title}
//                   fill
//                   className="object-center"
//                   placeholder="blur"
//                   blurDataURL="/images/placeholder.jpg"
//                 />

//                 {/* LIGHT OVERLAY (important change) */}
//                 <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

//                 {/* CONTENT */}
//                 <div className="relative z-10 h-full flex flex-col justify-between items-center text-center p-8">
//                   {/* TOP CONTENT */}
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-100 leading-snug">
//                       {active.title}
//                     </h3>

//                     <p className="mt-3 text-md font-semibold md:text-base text-gray-200 max-w-md mx-auto">
//                       {active.overview}
//                     </p>
//                   </div>

//                   {/* CTA (BOTTOM CENTER) */}
//                   <Link
//                     href={`/services/${active.slug}`}
//                     className="inline-flex items-center gap-2 bg-[#00A3E0] text-white px-6 py-3 text-sm font-medium rounded-md hover:bg-[#0092c7] transition-all"
//                   >
//                     Explore Service
//                     <ArrowUpRight size={16} />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ================= MOBILE / TABLET CAROUSEL ================= */}
//         <div className="lg:hidden mt-10">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={20}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true, //hover pause
//             }}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1, // mobile
//               },
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2, // tablet
//               },
//             }}
//           >
//             {services.map((service) => (
//               <SwiperSlide key={service.slug}>
//                 <div className="relative h-[380px] rounded-xl overflow-hidden shadow-lg bg-white">
//                   {/* IMAGE */}
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover"
//                   />

//                   {/* OVERLAY */}
//                   <div className="absolute inset-0 bg-black/50" />

//                   {/* CONTENT */}
//                   <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
//                     <h3 className="text-lg font-semibold">
//                       {service.shortTitle}
//                     </h3>

//                     <p className="text-sm text-white/80 mt-2 line-clamp-3">
//                       {service.description}
//                     </p>

//                     <Link
//                       href={`/services/${service.slug}`}
//                       className="mt-4 inline-block text-sm font-medium text-[#00A3E0] bg-white px-4 py-2 w-fit"
//                     >
//                       Explore →
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import services from "@/data/services";
// import SectionWrapper from "../ui/SectionWrapper";
// import SectionHeading from "../ui/SectionHeading";
// import Container from "../ui/Container";

// export default function ServicesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const active = services[activeIndex];

//   return (
//     <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white">
//       {/* Background effects */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-[-100px] right-[-150px] w-[450px] h-[450px] bg-[#00A3E0]/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-[-100px] left-[-120px] w-[400px] h-[400px] bg-[#8DC63F]/10 rounded-full blur-3xl" />
//       </div>

//       <Container className="relative z-10">
//         <SectionHeading
//           variant="product"
//           tag="Our Capabilities"
//           title={
//             <>
//               Premium Water & Wastewater <br />
//               Engineering Services
//             </>
//           }
//           description="We deliver end‑to‑end engineering and O&M solutions — from design and fabrication to optimization and compliance — ensuring sustainability and long‑term reliability for industrial and municipal systems."
//         />

//         {/* Desktop Layout */}
//         <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center relative mt-16">
//           {/* Left Panel (Service List) */}
//           <div className="space-y-5">
//             {services.map((service, index) => {
//               const isActive = index === activeIndex;
//               return (
//                 <div
//                   key={service.slug}
//                   onClick={() => setActiveIndex(index)}
//                   className={`
//                     group relative rounded-xl border cursor-pointer overflow-hidden transition-all
//                     duration-500 p-6
//                     ${isActive
//                       ? "bg-gradient-to-r from-[#00A3E0] via-[#0096C8] to-[#8DC63F] text-white shadow-xl"
//                       : "bg-white hover:bg-[#F3F4F6] border-gray-200"}
//                   `}
//                 >
//                   <div className="flex items-start gap-4">
//                     <span
//                       className={`text-lg font-semibold ${
//                         isActive ? "text-white/90" : "text-gray-400"
//                       }`}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <div className="flex-1">
//                       <h3
//                         className={`text-lg font-semibold ${
//                           isActive ? "text-white" : "text-gray-800"
//                         }`}
//                       >
//                         {service.shortTitle}
//                       </h3>
//                       <p
//                         className={`text-sm mt-2 ${
//                           isActive ? "text-white/80" : "text-gray-600"
//                         }`}
//                       >
//                         {service.description}
//                       </p>
//                     </div>

//                     <span
//                       className={`transition-transform ${
//                         isActive
//                           ? "translate-x-2 opacity-80"
//                           : "opacity-0 group-hover:opacity-100 group-hover:translate-x-2 text-gray-400"
//                       }`}
//                     >
//                       →
//                     </span>
//                   </div>

//                   {/* glowing underline effect */}
//                   {isActive && (
//                     <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#8DC63F] to-[#00A3E0] animate-[pulse_2s_ease-in-out_infinite]" />
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Panel (Preview Card) */}
//           <div className="relative h-[460px] w-full group">
//             <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
//               <Image
//                 src={active.image}
//                 alt={active.title}
//                 fill
//                 className="object-cover transform transition-transform duration-[500ms] group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
//             </div>

//             {/* Content Overlay */}
//             <div className="absolute inset-0 flex flex-col justify-end p-10 z-10 text-white">
//               <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
//               <p className="text-sm text-white/80 leading-relaxed max-w-lg">
//                 {active.overview}
//               </p>

//               <Link
//                 href={`/services/${active.slug}`}
//                 className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-[#00A3E0] transition-all"
//               >
//                 Explore Service <ArrowUpRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Carousel */}
//         <div className="lg:hidden mt-12">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={20}
//             autoplay={{
//               delay: 3500,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               768: { slidesPerView: 1.5 },
//             }}
//           >
//             {services.map((service) => (
//               <SwiperSlide key={service.slug}>
//                 <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg group">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
//                   <div className="absolute bottom-0 z-10 p-6 text-white">
//                     <h3 className="text-lg font-semibold">
//                       {service.shortTitle}
//                     </h3>
//                     <p className="text-sm text-white/80 mt-2 line-clamp-3">
//                       {service.description}
//                     </p>
//                     <Link
//                       href={`/services/${service.slug}`}
//                       className="mt-4 inline-flex items-center gap-2 text-[#00A3E0] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md text-sm hover:bg-white transition"
//                     >
//                       Explore <ArrowUpRight size={15} />
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import services from "@/data/services";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";
import Container from "../../ui/Container";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  // 🔥 Laptop movement logic
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const translateY = useRef(0);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    const container = containerRef.current;
    const card = cardRef.current;

    // 👉 Apply ONLY on lg screens
    if (
      typeof window !== "undefined" &&
      window.innerWidth >= 1024 &&
      el &&
      container &&
      card
    ) {
      const itemTop = el.offsetTop;
      const containerHeight = container.offsetHeight;
      const cardHeight = card.offsetHeight;

      const maxTranslate = containerHeight - cardHeight;
      const safeTop = Math.min(itemTop, maxTranslate);

      translateY.current = safeTop < 0 ? 0 : safeTop;

      card.style.transform = `translateY(${translateY.current}px)`;
    }
  }, [activeIndex]);

  return (
    <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white ">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] right-[-150px] w-[450px] h-[450px] bg-[#00A3E0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-120px] w-[400px] h-[400px] bg-[#8DC63F]/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          variant="product"
          tag="Our Capabilities"
          title={
            <>
              Premium Water & Wastewater <br />
              Engineering Services
            </>
          }
          description="We deliver end-to-end engineering and O&M solutions — from design and fabrication to optimization and compliance — ensuring sustainability and long-term reliability for industrial and municipal systems."
        />

        {/* ================= DESKTOP / LAPTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start relative mt-16">
          {/* LEFT PANEL */}
          <div className="space-y-5">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.slug}
                  ref={(el) => (itemRefs.current[index] = el)} // 👈 IMPORTANT
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group relative rounded-xl border cursor-pointer overflow-hidden transition-all
                    duration-500 p-6
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#00A3E0] via-[#0096C8] to-[#8DC63F] text-white shadow-xl"
                        : "bg-white hover:bg-[#F3F4F6] border-gray-200"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-lg font-semibold ${
                        isActive ? "text-white/90" : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {service.shortTitle}
                      </h3>
                      <p
                        className={`text-sm mt-2 ${
                          isActive ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    <span
                      className={`transition-transform ${
                        isActive
                          ? "translate-x-2 opacity-80"
                          : "opacity-0 group-hover:opacity-100 group-hover:translate-x-2 text-gray-400"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#8DC63F] to-[#00A3E0] animate-[pulse_2s_ease-in-out_infinite]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT PANEL (MOVING CARD) */}
          <div ref={containerRef} className="relative h-full w-full">
            <div
              ref={cardRef}
              className="absolute w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            >
              <div className="relative h-[460px] w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10 text-white">
                  <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-lg line-clamp-2">
                    {active.overview}
                  </p>

                  <Link
                    href={`/services/${active.slug}`}
                    className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-[#00A3E0] transition-all"
                  >
                    Explore Service <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.slug}>
                <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bluek/80  via-black/40 to-transparent" />
                  <div className="absolute bottom-0 z-10 p-6 text-white">
                    <h3 className="text-lg font-semibold">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-white/80 mt-2 line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-[#00A3E0] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md text-sm hover:bg-white transition"
                    >
                      Explore <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </SectionWrapper>
  );
}
