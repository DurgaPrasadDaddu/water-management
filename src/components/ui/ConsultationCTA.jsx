// import Image from "next/image";
// import Link from "next/link";

// export default function ConsultationCTA() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-5xl mx-auto px-6">
        
//         <div className="bg-white rounded-2xl shadow-md px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

//           {/* LEFT CONTENT */}
//           <div className="flex-1">
//             <h2 className="text-3xl font-semibold text-gray-900">
//               For Free Consultation
//             </h2>

//             <p className="mt-3 text-[#00A3E0] font-semibold text-lg">
//               Call: +91-XXXXXXXXXX / +91-XXXXXXXXXX
//             </p>

//             <p className="text-sm text-gray-700 font-medium">
//               (9:00 AM to 6:00 PM) INDIA IST
//             </p>

//             <p className="mt-2 text-[#00A3E0] font-semibold text-lg">
//               Email: info@hyalineenviro.com
//             </p>

//             <p className="mt-4 text-gray-600 max-w-md">
//               Let our experts help you solve your water and environmental
//               management challenges.
//             </p>
//           </div>

//           {/* RIGHT BUTTON */}
//           <div className="flex-shrink-0">
//             <Link
//               href="/contact"
//               className="flex items-center gap-3 bg-[#0ea5d9] hover:bg-[#0284c7] text-white px-6 py-4 rounded-lg font-semibold transition shadow-sm"
//             >
//               {/* LOGO */}
//               {/* <Image
//                 src="/images/logo.png" // 👉 replace with your logo path
//                 alt="Hyaline Enviro"
//                 width={24}
//                 height={24}
//                 className="object-cover"
//               /> */}

//               <span>Get In Touch</span>

//               {/* ARROW */}
//               <span className="text-lg">→</span>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">

<div className="bg-white rounded-2xl px-10 py-8 flex items-center justify-between shadow-[0_0_25px_rgba(11,132,250,0.25)]">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[28px] font-semibold text-[#1a1a1a] mb-3">
              For Free Consultation
            </h2>

            <p className="text-[#0b84c6] font-semibold text-[18px] leading-tight">
              Call: +91-22-6231-2000 / +91-22-6231-2042
            </p>

            <p className="text-black font-semibold text-[14px] mt-1">
              (9:00 AM to 6:00 PM) INDIA IST
            </p>

            <p className="text-[#0b84c6] font-semibold text-[18px] mt-2">
              Email: info@hyalineenviro.com
            </p>

            <p className="text-[#4b5563] text-[15px] mt-4 max-w-xl leading-relaxed">
              Let our experts help you solve your water and environment
              management challenges.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div>
            <Link
              href="/contact"
              className="bg-[#0b84c6] hover:bg-[#096aa3] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              Get In Touch
              <span className="text-lg">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}