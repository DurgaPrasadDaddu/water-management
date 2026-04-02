// // components/about/Stats.jsx

// export default function Stats() {
//   return (
//     <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
//       <div>
//         <h3 className="text-3xl font-bold">13+</h3>
//         <p>Years Experience</p>
//       </div>
//       <div>
//         <h3 className="text-3xl font-bold">100+</h3>
//         <p>Projects</p>
//       </div>
//       <div>
//         <h3 className="text-3xl font-bold">50+</h3>
//         <p>Clients</p>
//       </div>
//       <div>
//         <h3 className="text-3xl font-bold">Pan India</h3>
//         <p>Presence</p>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Flag,
//   Globe,
//   Settings,
//   Droplets,
//   Lightbulb,
//   Cloud,
// } from "lucide-react";

// const stats = [
//   {
//     icon: Flag,
//     value: 13,
//     label: "Years of Experience\nin this Field",
//   },
//   {
//     icon: Settings,
//     value: 540,
//     label: "installations",
//   },
//   {
//     icon: Droplets,
//     value: 918211,
//     label: "m3/year water\nsaving",
//   },
//   {
//     icon: Lightbulb,
//     value: 4.475,
//     label: "million KW/year\nenergy saving",
//   },
//   {
//     icon: Cloud,
//     value: 2830.3,
//     label: "Tons / year CO2\nemission reduction",
//   },
// ];

// export default function StatsSection() {
//   const ref = useRef(null);
//   const [start, setStart] = useState(false);

//   // Scroll trigger
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStart(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="bg-[#111111] py-14 md:py-20"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Desktop: 4 top + 2 bottom layout */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-10">
//           {stats.map((item, i) => (
//             <StatItem key={i} item={item} start={start} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function StatItem({ item, start }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let current = 0;
//     const duration = 1500;
//     const step = item.value / (duration / 16);

//     const timer = setInterval(() => {
//       current += step;

//       if (current >= item.value) {
//         setCount(item.value);
//         clearInterval(timer);
//       } else {
//         setCount(parseFloat(current.toFixed(2)));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [start, item.value]);

//   const Icon = item.icon;

//   return (
//     <div className="flex items-start gap-4">
//       {/* Icon */}
//       <Icon className="text-gray-300 w-8 h-8 mt-1 opacity-80" />

//       <div>
//         {/* Number */}
//         <h2 className="text-[#D6D34F] text-3xl md:text-4xl font-bold leading-none">
//           {count.toLocaleString()}
//         </h2>

//         {/* Label */}
//         <p className="text-gray-300 text-sm mt-2 whitespace-pre-line leading-snug">
//           {item.label}
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Folder, Users, MapPin } from "lucide-react";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";

const stats = [
  {
    icon: Briefcase,
    value: 13,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: Folder,
    value: 100,
    suffix: "+",
    label: "Projects Executed",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: MapPin,
    value: "Pan India",
    suffix: "",
    label: "Service Presence",
  },
];

export default function ImpactStatsSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  //Scroll trigger (fixed)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // more reliable
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 🔥 Heading */}
          <SectionHeading
            variant="product"
            tag="Our Impact"
            title="Delivering Reliable Water & Engineering Solutions Across India"
            titleClassName="text-xl sm:text-2xl md:text-3xl leading-snug max-w-2xl mx-auto"
            description="With over a decade of expertise, Hyaline Enviro Engineers delivers high-quality water treatment and industrial engineering solutions, ensuring efficiency, compliance, and sustainability across industries."
          />

          {/* 📊 Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {stats.map((item, i) => (
              <StatCard key={i} item={item} start={start} delay={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

function StatCard({ item, start, delay }) {
  const [count, setCount] = useState(0);
  const Icon = item.icon;

  //Count animation
  useEffect(() => {
    if (!start || typeof item.value !== "number") return;

    let current = 0;
    const duration = 1200;
    const step = item.value / (duration / 16);

    const timer = setInterval(() => {
      current += step;

      if (current >= item.value) {
        setCount(item.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, item.value]);

  return (
    <div
      className={`flex flex-col items-center text-center space-y-3 transform transition-all duration-700 ${
        start
          ? "opacity-100 translate-y-0"
          : "opacity-100 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {/* Icon */}
      <div className="bg-[#00A3E0]/10 p-3 sm:p-4 rounded-full">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00A3E0]" />
      </div>

      {/* Number */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        {typeof item.value === "number"
          ? `${count}${item.suffix}`
          : item.value}
      </h3>

      {/* Label */}
      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-snug">
        {item.label}
      </p>
    </div>
  );
}