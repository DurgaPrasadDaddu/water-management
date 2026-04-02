// "use client";

// import Image from "next/image";
// import Button from "../../components/ui/Button";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const dropVariant = {
//     hidden: { y: -80, opacity: 0, scale: 0.8 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 10,
//       },
//     },
//   };
//   const textContainer = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2, // controls sequence
//       },
//     },
//   };

//   const textItem = {
//     hidden: {
//       y: 30,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };
//   return (
//     <section className="relative min-h-[80vh] flex items-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/hero/sewage-treatment-plant-hero-bg.webp"
//           alt="Industrial Water Wastewater Treatment Plant"
//           fill
//           priority
//           className="object-cover scale-105"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/30"></div>

//       {/* Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
//         <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             variants={textContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="col-span-12 lg:col-span-8 text-white text-center md:text-left"
//           >
//             <motion.p
//               variants={textItem}
//               className="text-cyan-300 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs font-semibold sm:text-sm mb-4 sm:mb-5"
//             >
//               Pionners in Water Treatment & Engineering Solutions
//             </motion.p>

//             <motion.h1
//               variants={textItem}
//               className="text-3xl sm:text-4xl md:text-4xl lg:text-[3.5rem] font-semibold leading-tight mb-5 sm:mb-6"
//             >
//               Industrial
//               <span className="block text-cyan-300 mt-1 sm:mt-2">
//                 Water & Wastewater Treatment
//               </span>
//               <span className="block text-gray-200 mt-1 sm:mt-2 text-[0.9em]">
//                 Engineering Experts
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={textItem}
//               className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-3xl"
//             >
//               Hyaline Enviro Engineers Pvt. Ltd. delivers reliable water and
//               wastewater treatment solutions for industries across India...
//             </motion.p>

//             <motion.div
//               variants={textItem}
//               className="flex flex-wrap gap-4 sm:gap-5"
//             >
//               <Button variant="primary">Explore Solutions</Button>
//               <Button variant="secondary">Request Consultation</Button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT STATS */}
//           {/* <div className="col-span-12 lg:col-span-4 flex lg:flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-0">

//             <WaterDrop number="100+" label="Projects Completed" />
//             <WaterDrop number="13+" label="Years Experience" />
//             <WaterDrop number="50+" label="Industrial Clients" />

//           </div> */}

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: {},
//               visible: {
//                 transition: {
//                   staggerChildren: 0.8,
//                 },
//               },
//             }}
//             className="col-span-12 lg:col-span-4 flex lg:flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-0"
//           >
//             <motion.div variants={dropVariant}>
//               <WaterDrop number="100+" label="Projects Completed" />
//             </motion.div>

//             <motion.div variants={dropVariant}>
//               <WaterDrop number="13+" label="Years Experience" />
//             </motion.div>

//             <motion.div variants={dropVariant}>
//               <WaterDrop number="50+" label="Industrial Clients" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WaterDrop({ number, label }) {
//   return (
//     <div className="relative w-[120px] h-[150px] flex items-center justify-center shrink-0">
//       {/* Water Drop Shape */}
//       <div
//         className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/20 shadow-2xl"
//         style={{
//           clipPath:
//             "path('M60 0 C95 45 120 80 120 110 C120 140 90 150 60 150 C30 150 0 140 0 110 C0 80 25 45 60 0 Z')",
//         }}
//       />

//       {/* Text */}
//       <div className="relative text-center text-white px-3">
//         <p className="text-xl lg:text-2xl font-bold text-cyan-300">{number}</p>

//         <p className="text-md lg:text-sm text-white font-semibold mt-2 leading-tight">
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const dropVariant = {
    hidden: { y: -80, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };
  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // controls sequence
      },
    },
  };

  const textItem = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    // <section className="relative min-h-[80vh] flex items-center overflow-hidden">
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/sewage-treatment-plant-hero-bg.webp"
          alt="Industrial Water Wastewater Treatment Plant"
          fill
          priority
          className="object-cover scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/30"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 py-3 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-5 sm:gap-6 md:gap-10 items-center md:pl-18">
          {/* LEFT CONTENT */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              col-span-12 lg:col-span-8 
              text-white 
              text-center md:text-left 
              px-1 sm:px-4 md:px-0
              "
          >
            <motion.p
              variants={textItem}
              className="text-cyan-300 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs font-semibold sm:text-sm mb-4 sm:mb-5"
            >
              Pionners in Water Treatment & Engineering Solutions
            </motion.p>

            <motion.h1
              variants={textItem}
              className="
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-[3.5rem] 
              font-semibold 
              leading-tight 
              mb-4 sm:mb-6
              "
            >
              Industrial
              <span className="block text-cyan-300 mt-1 sm:mt-2">
                Water & Wastewater Treatment
              </span>
              <span className="block text-gray-200 mt-1 sm:mt-2 text-[0.9em]">
                Engineering Experts
              </span>
            </motion.h1>

            <motion.p
              variants={textItem}
              className="
              text-sm 
              sm:text-base 
              md:text-lg 
              leading-relaxed 
              mb-6 sm:mb-10 
              max-w-3xl 
              mx-auto md:mx-0
              "
            >
              Hyaline Enviro Engineers Pvt. Ltd. delivers reliable water and
              wastewater treatment solutions for industries across India...
            </motion.p>

            <motion.div
              variants={textItem}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start"
            >
              <Link href="/solutions">
                <Button variant="primary" className="cursor-pointer">Explore Solutions</Button>
              </Link>

              <Link href="/contact">
                <Button variant="secondary" className="cursor-pointer">Request Consultation</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.8,
                },
              },
            }}
            className="
            col-span-12 lg:col-span-4 
            flex flex-wrap lg:flex-col 
            justify-center items-center 
            gap-4 sm:gap-6 lg:gap-10 
            mt-8 sm:mt-10 lg:mt-0
            "
          >
            <motion.div variants={dropVariant}>
              <WaterDrop number="500+" label="Projects Completed" />
            </motion.div>

            <motion.div variants={dropVariant}>
              <WaterDrop number="13+" label="Years Experience" />
            </motion.div>

            <motion.div variants={dropVariant}>
              <WaterDrop number="50+" label="Industrial Clients" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WaterDrop({ number, label }) {
  return (
    <div className="relative w-[85px] h-[110px] sm:w-[100px] sm:h-[130px] md:w-[120px] md:h-[150px] flex items-center justify-center shrink-0 mb-3">
      
      {/* MOBILE SHAPE (simple & stable) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/20 shadow-xl rounded-[40%] sm:hidden" />

      {/* DESKTOP SHAPE (original clip-path) */}
      <div
        className="hidden sm:block absolute inset-0 bg-white/40 backdrop-blur-md border border-white/20 shadow-2xl"
        style={{
          clipPath:
            "path('M60 0 C95 45 120 80 120 110 C120 140 90 150 60 150 C30 150 0 140 0 110 C0 80 25 45 60 0 Z')",
        }}
      />

      {/* Text */}
      <div className="relative text-center text-white px-2 sm:px-3">
        <p className="text-sm sm:text-lg md:text-xl font-bold text-cyan-300">
          {number}
        </p>

        <p className="text-[10px] sm:text-xs md:text-sm text-white font-semibold mt-1 leading-tight">
          {label}
        </p>
      </div>
    </div>
  );
}