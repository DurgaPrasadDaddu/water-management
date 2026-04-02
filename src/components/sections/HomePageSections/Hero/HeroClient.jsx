// "use client";

// import { useEffect, useState } from "react";

// /* ─── Data ───────────────────────────────────────────────────────────────── */
// const STATS = [
//   { value: "100+", line1: "Projects", line2: "Completed" },
//   { value: "13+", line1: "Years", line2: "Experience" },
//   { value: "50+", line1: "Industrial", line2: "Clients" },
// ];

// /* ─── Water-drop clip path ─────────────────────────────── */
// function DropDefs() {
//   return (
//     <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
//       <defs>
//         <clipPath id="waterDrop" clipPathUnits="objectBoundingBox">
//           <path d="M0.5,0 C0.5,0 0.95,0.42 0.95,0.64 C0.95,0.86 0.74,1 0.5,1 C0.26,1 0.05,0.86 0.05,0.64 C0.05,0.42 0.5,0 0.5,0 Z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// /* ─── Drop stat card ───────────────────────────────────── */
// function DropCard({ stat, index, mounted }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         width: 148,
//         height: 178,
//         flexShrink: 0,
//         opacity: mounted ? 1 : 0,
//         transform: mounted ? "translateY(0) scale(1)" : "translateY(28px) scale(0.88)",
//         transition: `opacity 0.6s ease ${index * 160}ms, transform 0.6s cubic-bezier(.22,.68,0,1.2) ${index * 160}ms`,
//         cursor: "default",
//       }}
//       role="figure"
//       aria-label={`${stat.value} ${stat.line1} ${stat.line2}`}
//     >
//       {/* Drop background */}
//       <div style={{
//         position: "absolute",
//         inset: 0,
//         clipPath: "url(#waterDrop)",
//         background: hovered
//           ? "linear-gradient(170deg, rgba(25,70,140,0.94) 0%, rgba(8,28,80,0.98) 100%)"
//           : "linear-gradient(170deg, rgba(15,50,115,0.86) 0%, rgba(5,20,65,0.93) 100%)",
//         backdropFilter: "blur(16px)",
//         WebkitBackdropFilter: "blur(16px)",
//         border: "1px solid rgba(0,200,255,0.18)",
//         transition: "background 0.3s ease",
//       }} />

//       {/* Gloss */}
//       <div style={{
//         position: "absolute",
//         top: "4%",
//         left: "22%",
//         width: "56%",
//         height: "38%",
//         clipPath: "url(#waterDrop)",
//         background: "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, transparent 100%)",
//       }} />

//       {/* Glow */}
//       <div style={{
//         position: "absolute",
//         inset: -1,
//         clipPath: "url(#waterDrop)",
//         boxShadow: hovered
//           ? "inset 0 0 22px rgba(0,200,255,0.22)"
//           : "inset 0 0 0 transparent",
//         transition: "box-shadow 0.3s ease",
//       }} />

//       {/* Text */}
//       <div style={{
//         position: "absolute",
//         top: "42%",
//         left: 0,
//         right: 0,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         padding: "0 14px",
//       }}>
//         <span style={{
//           fontWeight: 800,
//           fontSize: "2rem",
//           color: "#00CFFF",
//         }}>
//           {stat.value}
//         </span>
//         <span style={{ fontSize: "0.76rem", color: "#d7ebff" }}>
//           {stat.line1}<br />{stat.line2}
//         </span>
//       </div>
//     </div>
//   );
// }

// /* ─── CLIENT COMPONENT ───────────────────────────────── */
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

//       <aside
//         className="hero-drops"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//       >
//         {STATS.map((stat, i) => (
//           <DropCard key={stat.line1} stat={stat} index={i} mounted={mounted} />
//         ))}
//       </aside>
//     </>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// /* ─── Data ───────────────────────────────────────── */
// const STATS = [
//   { value: "100+", line1: "Projects", line2: "Completed" },
//   { value: "13+", line1: "Years", line2: "Experience" },
//   { value: "50+", line1: "Industrial", line2: "Clients" },
// ];

// /* ─── SVG Drop Shape ───────────────────────── */
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

// /* ─── Drop Card ───────────────────────── */
// function DropCard({ stat, index, mounted }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       role="figure"
//       aria-label={`${stat.value} ${stat.line1} ${stat.line2}`}
//       className={`relative w-[138px] h-[158px] flex-shrink-0 cursor-default
//         transition-all duration-700
//         ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-7 scale-90"}
//       `}
//       style={{
//         transitionDelay: `${index * 160}ms`,
//       }}
//     >
//       {/* Drop Background */}
//       <div
//         className="absolute inset-0 border backdrop-blur-xl transition-all duration-300"
//         style={{
//           clipPath: "url(#waterDrop)",
//           background: hovered
//             ? "linear-gradient(170deg, rgba(25,70,140,0.94), rgba(8,28,80,0.98))"
//             : "linear-gradient(170deg, rgba(15,50,115,0.86), rgba(5,20,65,0.93))",
//           borderColor: "rgba(0,200,255,0.18)",
//         }}
//       />

//       {/* Gloss */}
//       <div
//         className="absolute top-[4%] left-[22%] w-[56%] h-[38%]"
//         style={{
//           clipPath: "url(#waterDrop)",
//           background:
//             "linear-gradient(180deg, rgba(255,255,255,0.09), transparent)",
//         }}
//       />

//       {/* Glow */}
//       <div
//         className="absolute inset-[-1px] transition-all duration-300"
//         style={{
//           clipPath: "url(#waterDrop)",
//           boxShadow: hovered
//             ? "inset 0 0 22px rgba(0,200,255,0.25)"
//             : "none",
//         }}
//       />

//       {/* Text */}
//       <div className="absolute top-[42%] left-0 right-0 flex flex-col items-center text-center px-3">
//         <span className="text-2xl font-extrabold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(0,207,255,0.6)]">
//           {stat.value}
//         </span>

//         <span className="text-[0.75rem] text-slate-200/90 leading-snug tracking-wide">
//           {stat.line1}
//           <br />
//           {stat.line2}
//         </span>
//       </div>
//     </div>
//   );
// }

// /* ─── CLIENT COMPONENT ───────────────────────── */
// // export default function HeroClient() {
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     const id = requestAnimationFrame(() => {
// //       setTimeout(() => setMounted(true), 80);
// //     });
// //     return () => cancelAnimationFrame(id);
// //   }, []);

// //   return (
// //     <>
// //       <DropDefs />

// //       <aside className="flex flex-col items-center gap-4 lg:gap-5">
// //         {STATS.map((stat, i) => (
// //           <DropCard key={stat.line1} stat={stat} index={i} mounted={mounted} />
// //         ))}
// //       </aside>
// //     </>
// //   );
// // }
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

//       <aside
//         className="
//           flex
//           flex-col md:flex-row lg:flex-col
//           items-center
//           justify-center lg:justify-end
//           gap-3 sm:gap-4 lg:gap-5
//           w-full lg:w-auto
//           overflow-x-auto lg:overflow-visible
//           px-2 lg:px-0
//         "
//       >
//         {STATS.map((stat, i) => (
//           <DropCard key={stat.line1} stat={stat} index={i} mounted={mounted} />
//         ))}
//       </aside>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";

/* DATA */
const STATS = [
  { value: "500+", line1: "Projects", line2: "Completed" },
  { value: "13+", line1: "Years", line2: "Experience" },
  { value: "50+", line1: "Industrial", line2: "Clients" },
];

/* SVG */
function DropDefs() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none">
      <defs>
        <clipPath id="waterDrop" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0 C0.5,0 0.95,0.42 0.95,0.64 C0.95,0.86 0.74,1 0.5,1 C0.26,1 0.05,0.86 0.05,0.64 C0.05,0.42 0.5,0 0.5,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* DROP CARD (UNCHANGED) */
function DropCard({ stat, index, mounted }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative w-[138px] h-[158px] flex-shrink-0 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
      style={{ transitionDelay: `${index * 160}ms` }}
    >
      <div
        className="absolute inset-0 backdrop-blur-xl border"
        style={{
          clipPath: "url(#waterDrop)",
          background: hovered
            ? "linear-gradient(170deg, rgba(25,70,140,0.94), rgba(8,28,80,0.98))"
            : "linear-gradient(170deg, rgba(75,255,255,0.86), rgba(75,200,255,0.63)) ",
          borderColor: "rgba(0,200,255,0.18)",
        }}
      />
      {/* <div
        className="absolute inset-0 backdrop-blur-xl border"
        style={{
          clipPath: "url(#waterDrop)",
          background: hovered
            ? "linear-gradient(160deg, rgba(255,255,255,0.8), rgba(255,120,255,0.15))"
            : "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(0,200,255,0.18))",
          borderColor: "rgba(255,255,255,0.2)",
        }}
      /> */}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
        <span className="text-3xl font-bold text-green-700">{stat.value}</span>
        <span className="text-base font-semibold text-gray-800 hover:text-white">
          {stat.line1}
          <br />
          {stat.line2}
        </span>
      </div>
    </div>
  );
}

/* 🔥 MOBILE CARD (NEW PREMIUM) */
function MobileStatsCard({ mounted }) {
  return (
    <div
      className={`w-full max-w-sm mx-auto rounded-2xl p-5
        backdrop-blur-xl bg-white/5 border border-white/10
        shadow-xl shadow-black/30
        transition-all duration-700
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="grid grid-cols-3 gap-4 text-center">
        {STATS.map((stat, i) => (
          <div key={i} className="space-y-1">
            <p className="text-lg font-extrabold text-cyan-400">{stat.value}</p>
            <p className="text-[10px] text-slate-300 leading-tight">
              {stat.line1}
              <br />
              {stat.line2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* MAIN */
export default function HeroClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setTimeout(() => setMounted(true), 80);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <DropDefs />

      {/* 🔥 MOBILE */}
      <div className="md:hidden w-full px-2">
        <MobileStatsCard mounted={mounted} />
      </div>

      {/* 💻 DESKTOP (WATER DROPS) */}
      <aside className="hidden md:flex flex-row lg:flex-col items-center gap-5">
        {STATS.map((stat, i) => (
          <DropCard key={stat.line1} stat={stat} index={i} mounted={mounted} />
        ))}
      </aside>
    </>
  );
}
