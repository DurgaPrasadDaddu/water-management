// // components/about/CTA.jsx

// export default function CTA() {
//   return (
//     <section className="py-20 bg-blue-600 text-white text-center">
//       <h2 className="text-3xl font-bold mb-4">
//         Looking for Reliable Engineering Solutions?
//       </h2>

//       <p className="mb-6">
//         Contact us today to discuss your project requirements.
//       </p>

//       <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
//         Get a Quote
//       </button>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="
        relative w-full 
        min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[440px]
        flex items-center justify-center text-center overflow-hidden
      "
    >
      {/* 🔥 Background Image */}
      <Image
        src="/images/marketsegments/industrial.webp"
        alt="Water Treatment Plant"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
      />

      {/* 🔥 Gradient Overlay (Premium Look) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a3a]/90 via-[#001a3a]/80 to-[#001a3a]/60"></div>

      {/* 🔥 Glow Effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #00A3E033 0%, transparent 60%)",
        }}
      />

      {/* 🔥 Content */}
      <div
        className="
          relative z-10 
          max-w-3xl 
          px-4 sm:px-6 md:px-8
        "
      >
        {/* Heading */}
        <h2
          className="
            text-white 
            text-lg sm:text-xl md:text-2xl lg:text-4xl
            font-semibold 
            leading-snug 
            mb-3 sm:mb-4
          "
        >
          13+ Years of Expertise Delivering Reliable Water Treatment Solutions
        </h2>
        {/* Description */}
        <p
          className="
            text-gray-200 
            text-xs sm:text-sm md:text-base lg:text-lg
            leading-relaxed 
            mb-5 sm:mb-6
          "
        >
          Hyaline Enviro Engineers Pvt. Ltd. provides complete water and
          wastewater treatment solutions along with industrial fabrication
          services for industries across India.
        </p>
        {/* Button */}
        
        <Link href="/contact">
          <button
            className="
              bg-[#00A3E0] 
              hover:bg-[#008ac2] 
              transition-all duration-300
              
              px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5
              
              text-white 
              text-xs sm:text-sm md:text-base 
              font-semibold 
              rounded-md 
              shadow-lg
              
              hover:scale-105 active:scale-95
              mb-3
            "
          >
            CONTACT US TODAY
          </button>
        </Link>
      </div>
    </section>
  );
}
