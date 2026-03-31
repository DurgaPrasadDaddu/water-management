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
"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full h-[300px] md:h-[360px] lg:h-[420px] flex items-center justify-center text-center overflow-hidden">
      
      {/* 🔥 Background Image */}
      <Image
        src="/images/marketsegments/industrial.jpg" 
        alt="Water Treatment Plant"
        fill
        className="object-cover"
        priority
      />

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-[#001a3a]/80"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-3xl px-6">
        
        {/* Heading */}
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
          13+ Years of Expertise Delivering Reliable Water Treatment Solutions
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          Hyaline Enviro Engineers Pvt. Ltd. provides complete water and wastewater 
          treatment solutions along with industrial fabrication services for industries across India.
        </p>

        {/* Button */}
        <button className="bg-[#00A3E0] hover:bg-[#008ac2] transition px-6 py-3 text-white font-semibold text-sm md:text-base rounded-md shadow-lg">
          CONTACT US TODAY
        </button>
      </div>
    </section>
  );
}