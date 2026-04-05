// "use client";

// import { useEffect, useState } from "react";

// /* DATA */
// const STATS = [
//   { value: "500+", line1: "Projects", line2: "Completed" },
//   { value: "13+", line1: "Years", line2: "Experience" },
//   { value: "50+", line1: "Industrial", line2: "Clients" },
// ];

// /* SVG */
// function DropDefs() {
//   return (
//     <svg className="absolute w-0 h-0 pointer-events-none">
//       <defs>
//         <clipPath id="waterDrop" clipPathUnits="objectBoundingBox">
//           <path d="M0.5,0 C0.5,0 0.95,0.42 0.95,0.64 C0.95,0.86 0.74,1 0.5,1 C0.26,1 0.05,0.86 0.05,0.64 C0.05,0.42 0.5,0 0.5,0 Z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// /* DROP CARD (UNCHANGED) */
// // function DropCard({ stat, index, mounted }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <div
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       className={`relative w-[138px] h-[158px] flex-shrink-0 transition-all duration-700 ${
// //         mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
// //       }`}
// //       style={{ transitionDelay: `${index * 160}ms` }}
// //     >
// //       <div
// //         className="absolute inset-0 backdrop-blur-xl border"
// //         style={{
// //           clipPath: "url(#waterDrop)",
// //           background: hovered
// //             ? "linear-gradient(170deg, rgba(25,70,140,0.94), rgba(8,28,80,0.98))"
// //             : "linear-gradient(170deg, rgba(75,255,255,0.86), rgba(75,200,255,0.63)) ",
// //           borderColor: "rgba(0,200,255,0.18)",
// //         }}
// //       />

// //       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
// //         <span className="text-3xl font-bold text-green-700">
// //           {stat.value}
// //         </span>
// //         <span className="text-base font-semibold text-gray-800 hover:text-white">
// //           {stat.line1}
// //           <br />
// //           {stat.line2}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // }
// function DropCard({ stat, index }) {
//   return (
//     <div
//       className="relative w-[138px] h-[158px] flex-shrink-0 opacity-0 translate-y-7 animate-dropFade"
//       style={{ animationDelay: `${index * 160}ms` }}
//     >
//       <div
//         className="absolute inset-0 backdrop-blur-xl border transition-all duration-500 group-hover:bg-blue-900"
//         style={{
//           clipPath: "url(#waterDrop)",
//           background:
//             "linear-gradient(170deg, rgba(75,255,255,0.86), rgba(75,200,255,0.63))",
//           borderColor: "rgba(0,200,255,0.18)",
//         }}
//       />

//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
//         <span className="text-3xl font-bold text-green-700">
//           {stat.value}
//         </span>
//         <span className="text-base font-semibold text-gray-800 group-hover:text-white">
//           {stat.line1}
//           <br />
//           {stat.line2}
//         </span>
//       </div>
//     </div>
//   );
// }

// /* MAIN */
// export default function HeroClient() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const id = requestAnimationFrame(() => {
//       setTimeout(() => setMounted(true), 80);
//     });
//     return () => cancelAnimationFrame(id);
//   }, []);

//   return (
//     <>
//       <DropDefs />

//       {/* 💻 DESKTOP ONLY */}
//       <aside className="flex flex-row lg:flex-col items-center gap-5">
//         {STATS.map((stat, i) => (
//           <DropCard key={stat.line1} stat={stat} index={i} mounted={mounted} />
//         ))}
//       </aside>
//     </>
//   );
// }

/* DATA */
const STATS = [
  { value: "500+", line1: "Projects", line2: "Completed" },
  { value: "13+", line1: "Years", line2: "Experience" },
  { value: "50+", line1: "Industrial", line2: "Clients" },
];

/* SVG */
function DropDefs() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none ">
      <defs>
        <clipPath id="waterDrop" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0 C0.5,0 0.95,0.42 0.95,0.64 C0.95,0.86 0.74,1 0.5,1 C0.26,1 0.05,0.86 0.05,0.64 C0.05,0.42 0.5,0 0.5,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* DROP CARD */
function DropCard({ stat, index }) {
  return (
    <div
      className="group relative w-[138px] h-[150px] flex-shrink-0 
      opacity-0 translate-y-5 animate-dropFade"
      style={{ animationDelay: `${index * 360}ms` }}
    >
      <div
        className="absolute inset-0 backdrop-blur-xl border transition-all duration-500 
        group-hover:bg-[linear-gradient(170deg,rgba(25,70,140,0.94),rgba(8,28,80,0.98))]"
        style={{
          clipPath: "url(#waterDrop)",
          background:
            "linear-gradient(170deg, rgba(75,255,255,0.86), rgba(75,200,255,0.63))",
          borderColor: "rgba(0,200,255,0.18)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
        <span className="text-3xl font-bold text-green-700">
          {stat.value}
        </span>
        <span className="text-base font-semibold text-gray-800 group-hover:text-white">
          {stat.line1}
          <br />
          {stat.line2}
        </span>
      </div>
    </div>
  );
}

/* MAIN (SERVER COMPONENT NOW ✅) */
export default function HeroClient() {
  return (
    <>
      <DropDefs />

      <aside className="flex flex-row lg:flex-col items-center gap-5">
        {STATS.map((stat, i) => (
          <DropCard key={stat.line1} stat={stat} index={i} />
        ))}
      </aside>
    </>
  );
}