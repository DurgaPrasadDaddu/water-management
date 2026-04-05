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
    value: 500,
    suffix: "+",
    label: "Projects Executed",
  },
  {
    icon: Users,
    value: 400,
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