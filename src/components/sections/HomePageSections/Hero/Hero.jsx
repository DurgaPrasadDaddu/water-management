// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import Button from "@/components/ui/Button";
// // // import WaterDropsAnimation from "./WaterDropsAnimation";

// // // export default function Hero() {
// // //   return (
// // //     <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      
// // //       {/* Background */}
// // //       <div className="absolute inset-0">
// // //         <Image
// // //           src="/images/hero/sewage-treatment-plant-hero-bg.webp"
// // //           alt="Industrial Water Wastewater Treatment Plant"
// // //           fill
// // //           priority
// // //           sizes="100vw"
// // //           className="object-cover"
// // //         />
// // //       </div>

// // //       {/* Overlay */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/30" />

// // //       {/* Content */}
// // //       <div className="relative z-10 max-w-7xl mx-auto px-3 py-5 lg:px-8  w-full">
// // //         <div className="grid grid-cols-12 gap-6 sm:gap-6 md:gap-10 items-center sm:pl-16 md:pl-15">

          
// // //           <div className="col-span-12 lg:col-span-8 text-white text-center md:text-left">
            
// // //             <p className="text-cyan-300 uppercase text-sm mb-4">
// // //               Pioneers in Water Treatment & Engineering Solutions
// // //             </p>

// // //             <h1 className="
// // //               text-3xl 
// // //               sm:text-4xl 
// // //               md:text-5xl 
// // //               lg:text-[5rem] 
// // //               xl:text-[4.5rem]
// // //               font-semibold 
// // //               leading-[1.5] 
// // //               mb-4 sm:mb-6
// // //             ">
// // //               Industrial
// // //               <span className="block text-cyan-300 sm:mt-3">
// // //                 Water & Wastewater Treatment
// // //               </span>
// // //               <span className="block text-gray-200 sm:mt-3 ">
// // //                 Engineering Experts
// // //               </span>
// // //             </h1>

// // //             <p className="mb-8 max-w-2xl">
// // //               Hyaline Enviro Engineers Pvt. Ltd. delivers reliable water and wastewater solutions...
// // //             </p>

// // //             <div className="flex gap-4 justify-center md:justify-start">
// // //               <Link href="/solutions">
// // //                 <Button>Explore Solutions</Button>
// // //               </Link>

// // //               <Link href="/contact">
// // //                 <Button variant="secondary">
// // //                   Request Consultation
// // //                 </Button>
// // //               </Link>
// // //             </div>
// // //           </div>

// // //           {/* WATER DROPS (animated) */}
// // //           <WaterDropsAnimation />

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import Image from "next/image";
// // import Link from "next/link";
// // import dynamic from "next/dynamic";

// // const DropStats = dynamic(() => import("./DropStats"));

// // export default function Hero() {
// //   return (
// //     <section className="relative min-h-screen flex items-center overflow-hidden">

// //       {/* ✅ FAST BACKGROUND (no LCP blocking) */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />

// //       {/* ✅ Lazy image (loads after text) */}
// //       <div className="absolute inset-0">
// //         <Image
// //           src="/images/hero/sewage-treatment-plant-hero-bg.webp"
// //           alt=""
// //           fill
// //           sizes="100vw"
// //           quality={60}
// //           loading="lazy"
// //           className="object-cover opacity-0 transition-opacity duration-700"
// //         />
// //       </div>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent" />

// //       {/* Content */}
// //       <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
// //         <div className="grid grid-cols-12 gap-10 items-center">

// //           {/* LEFT CONTENT */}
// //           <div className="col-span-12 lg:col-span-8 text-white">

// //             <p className="text-cyan-400 uppercase text-sm mb-4 tracking-widest">
// //               Pioneers in Water Treatment & Engineering Solutions
// //             </p>

// //             {/* ✅ LCP ELEMENT */}
// //             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// //               Industrial
// //               <span className="block text-cyan-400 mt-2">
// //                 Water & Wastewater Treatment
// //               </span>
// //               <span className="block text-gray-200 mt-2">
// //                 Engineering Experts
// //               </span>
// //             </h1>

// //             <p className="text-gray-300 max-w-2xl mb-8">
// //               Hyaline Enviro Engineers Pvt. Ltd. provides innovative solutions
// //               for water and wastewater treatment systems along with industrial
// //               fabrication works across India.
// //             </p>

// //             <div className="flex gap-4 flex-wrap">
// //               <Link href="/solutions">
// //                 <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold transition">
// //                   Explore Solutions
// //                 </button>
// //               </Link>

// //               <Link href="/contact">
// //                 <button className="border border-white/50 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-md transition">
// //                   Request Consultation
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>

// //           {/* RIGHT STATS (lazy loaded) */}
// //           <div className="col-span-12 lg:col-span-4">
// //             <DropStats />
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import Image from "next/image";
// import Link from "next/link";
// import HeroClient from "./HeroClient";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      
//       {/* ✅ LCP IMAGE */}
//       <Image
//         src="/images/hero/sewage-treatment-plant-hero-bg.webp"
//         alt="Water treatment plant"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-[center_35%]"
//       />

//       {/* ✅ Premium Overlay (Glass Gradient) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent" />


//       {/* CONTENT */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 py-2">
        
//         {/* LEFT */}
//         <div className="flex-1 max-w-2xl space-y-6">
          
//           {/* Eyebrow */}
//           <p className="text-cyan-400 font-bold text-xs tracking-[0.2em] uppercase">
//             Pioneers in Water Treatment & Engineering Solutions
//           </p>

//           {/* ✅ PREMIUM HEADING */}
//           <h1 className="font-extrabold leading-[1.05] tracking-tight">
//             <span className="block text-white text-3xl sm:text-4xl lg:text-6xl">
//               Industrial
//             </span>

//             <span className="block text-cyan-400 text-2xl sm:text-3xl lg:text-5xl drop-shadow-[0_0_40px_rgba(0,207,255,0.35)]">
//               Water & Wastewater Treatment
//             </span>

//             <span className="block text-white text-3xl sm:text-4xl lg:text-6xl">
//               Engineering Experts
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed max-w-xl">
//             Hyaline Enviro Engineers Pvt. Ltd. delivers reliable{" "}
//             <span className="text-slate-200 font-semibold">
//               water and wastewater solutions
//             </span>{" "}
//             for residential and commercial applications, specialising in STP,
//             ETP, RO Plants, ZLD & industrial fabrication works across India.
//           </p>

//           {/* ✅ PREMIUM CTA */}
//           <div className="flex flex-wrap gap-4 pt-2">
            
//             {/* Primary */}
//             <Link
//               href="/solutions"
//               className="relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
//             >
//               Explore Solutions
//             </Link>

//             {/* Secondary */}
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white border border-white/50 rounded-md backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
//             >
//               Request Consultation
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT → CLIENT (UNCHANGED DROP UI) */}
//         <HeroClient />
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// const HeroClient = dynamic(() => import("./HeroClient"));

// export default function Hero() {
//   return (
//     <section className="relative min-h-[75vh] flex items-center overflow-hidden">
    
//       <Image
//         src="/images/hero/sewage-treatment-plant-hero-bg.webp"
//         alt="Water treatment plant"
//         fill
//         priority
//         fetchPriority="high"
//         sizes="(max-width: 768px) 100vw, 50vw"
//         className="object-cover object-[center_35%]"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent" />

//       {/* CONTENT */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-3">
        
//         {/* ✅ PREMIUM GRID */}
//         <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-5">
          
//           {/* LEFT CONTENT */}
//           <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left md:pl-10">
            
//             <p className="text-cyan-400 font-bold text-xs tracking-[0.2em] uppercase">
//               Pioneers in Water Treatment & Engineering Solutions
//             </p>

//             <h1 className="font-extrabold leading-[1.05] tracking-tight">
//               <span className="block text-white text-3xl sm:text-4xl lg:text-6xl">
//                 Industrial
//               </span>

//               <span className="block text-cyan-400 text-2xl sm:text-3xl lg:text-5xl drop-shadow-[0_0_40px_rgba(0,207,255,0.35)]">
//                 Water & Wastewater Treatment
//               </span>

//               <span className="block text-white text-3xl sm:text-4xl lg:text-6xl">
//                 Engineering Experts
//               </span>
//             </h1>

//             <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
//               Hyaline Enviro Engineers Pvt. Ltd. delivers reliable{" "}
//               <span className="text-slate-200 font-semibold">
//                 water and wastewater solutions
//               </span>{" "}
//               for residential and commercial applications, specialising in STP,
//               ETP, RO Plants, ZLD & industrial fabrication works across India.
//             </p>

//             {/* CTA */}
//             <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              
//               <Link
//                 href="/solutions"
//                 className="relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 Explore Solutions
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white border border-white/50 rounded-md backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 Request Consultation
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT → STATS */}
//           <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
//             <HeroClient />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// ✅ Load ONLY on client + desktop
const HeroClient = dynamic(() => import("./HeroClient"));

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      
      {/* ✅ HERO IMAGE (LCP optimized) */}
      <Image
        src="/images/hero/sewage-treatment-plant-hero-bg.webp"
        alt="Water treatment plant"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-3">
        
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-5">
          
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left md:pl-10">
            
            <p className="text-cyan-400 font-bold text-xs tracking-[0.2em] uppercase">
              Pioneers in Water Treatment & Engineering Solutions
            </p>

            <h1 className="font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-white text-3xl sm:text-4xl lg:text-6xl">
                Industrial
              </span>

              <span className="block text-cyan-400 text-2xl sm:text-3xl lg:text-5xl drop-shadow-[0_0_40px_rgba(0,207,255,0.35)]">
                Water & Wastewater Treatment
              </span>

              <span className="block text-white text-3xl sm:text-4xl lg:text-6xl">
                Engineering Experts
              </span>
            </h1>

            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hyaline Enviro Engineers Pvt. Ltd. delivers reliable{" "}
              <span className="text-slate-200 font-semibold">
                water and wastewater solutions
              </span>{" "}
              for residential and commercial applications, specialising in STP,
              ETP, RO Plants, ZLD & industrial fabrication works across India.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              
              <Link
                href="/solutions"
                className="relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Solutions
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white border border-white/50 rounded-md backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>

            {/* ✅ MOBILE STATS (NO JS → BEST LCP) */}
            <div className="md:hidden mt-6">
              <div className="grid grid-cols-3 gap-4 text-center max-w-sm mx-auto">
                
                <div>
                  <p className="text-lg font-bold text-cyan-400">500+</p>
                  <p className="text-xs text-slate-300">
                    Projects <br /> Completed
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-cyan-400">13+</p>
                  <p className="text-xs text-slate-300">
                    Years <br /> Experience
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-cyan-400">50+</p>
                  <p className="text-xs text-slate-300">
                    Industrial <br /> Clients
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT → DESKTOP ONLY (CLIENT COMPONENT) */}
          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
            
            
            <div className="hidden md:block">
              <HeroClient />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}