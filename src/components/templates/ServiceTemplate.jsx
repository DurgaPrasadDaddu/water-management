// "use client";

// import { useState } from "react";
// import FAQSection from "../ui/FAQSection";

// export default function ServiceTemplate({ service }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6">

//         {/* HERO / TITLE */}
//         <div className="max-w-4xl">
//           <p className="text-sm uppercase text-[#00A3E0] font-semibold">
//             Services
//           </p>

//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//             {service.title}
//           </h1>

//           <p className="mt-4 text-[var(--heading-text)]">
//             {service.description}
//           </p>
//         </div>

//         {/* OVERVIEW */}
//         <div className="mt-10 max-w-3xl">
//           <p className="text-gray-700 leading-relaxed">
//             {service.overview}
//           </p>
//         </div>

//         {/* FEATURES */}
//         <div className="mt-14">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Key Features
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//             {service.features.map((item, i) => (
//               <div
//                 key={i}
//                 className="border p-5 bg-gray-50 hover:shadow-sm transition"
//               >
//                 <p className="text-gray-800 font-medium">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* PROCESS */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Our Process
//           </h2>

//           <div className="mt-8 space-y-6">
//             {service.process.map((step, i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <div className="w-10 h-10 flex items-center justify-center bg-[#00A3E0] text-white font-bold">
//                   {i + 1}
//                 </div>

//                 <p className="text-gray-700 mt-2">
//                   {step}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* INDUSTRIES */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Industries Served
//           </h2>

//           <div className="flex flex-wrap gap-3 mt-6">
//             {service.industries.map((industry, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 border text-sm bg-gray-50"
//               >
//                 {industry}
//               </span>
//             ))}
//           </div>
//         </div>

//      {/* ================= FAQ ================= */}
//       {service.faq?.length > 0 && <FAQSection faqs={service.faq} />}

//         {/* CTA */}
//         <div className="mt-20 bg-[#00A3E0] text-white p-8 md:p-10">
//           <div className="max-w-3xl">
//             <h3 className="text-2xl font-semibold">
//               Need {service.shortTitle} Services?
//             </h3>

//             <p className="mt-3">
//               Get in touch with our engineering team for customized solutions
//               tailored to your industrial requirements.
//             </p>

//             <button className="mt-6 bg-white text-[#00A3E0] px-6 py-3 font-medium">
//               Request a Quote
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── ICONS (inline SVG to avoid extra deps) ───────────────────────────────────
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const AwardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.99 1.18 2 2 0 012.98 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ─── FEATURE ICON MAP ─────────────────────────────────────────────────────────
const FeatureIcon = ({ index }) => {
  const icons = [
    <svg
      key="0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    <svg
      key="1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    <svg
      key="2"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    <svg
      key="3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    <svg
      key="4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>,
    <svg
      key="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  ];
  return icons[index % icons.length];
};

// ─── INDUSTRY ICON MAP ────────────────────────────────────────────────────────
const IndustryIcon = ({ index }) => {
  const icons = [
    <svg
      key="0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
    <svg
      key="1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    <svg
      key="2"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    <svg
      key="3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    <svg
      key="4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>,
  ];
  return icons[index % icons.length];
};

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ─── PROCESS STEP COMPONENT ───────────────────────────────────────────────────
const ProcessStep = ({ step, index, total, isActive, onClick,  activeStep, onHover,onLeave,}) => {
  return (
    <button
      onClick={() => onClick(index)}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onLeave()}
      className="flex flex-col items-center group cursor-pointer focus:outline-none"
      style={{ flex: 1 }}
    >
      {/* Connector line + node row */}
      <div className="flex items-center w-full relative">
        {/* Left line */}
        <div
          className="flex-1 h-0.5 transition-all duration-700"
          style={{
            background:
              index === 0
                ? "transparent"
                : isActive || index <= activeStep
                  ? "linear-gradient(90deg, #00A3E0, #0284C7)"
                  : "#E5E7EB",
          }}
        />
        {/* Node */}
        <div
          className={`
            relative z-10 flex items-center justify-center w-12 h-12 rounded-full 
            font-bold text-sm transition-all duration-500 flex-shrink-0
            ${
              isActive
                ? "bg-[#00A3E0] text-white shadow-[0_0_0_6px_rgba(0,163,224,0.15)] scale-110"
                : "bg-white text-gray-400 border-2 border-gray-200 group-hover:border-[#00A3E0] group-hover:text-[#00A3E0]"
            }
          `}
          style={
            isActive
              ? {
                  boxShadow:
                    "0 0 0 6px rgba(0,163,224,0.15), 0 8px 24px rgba(0,163,224,0.3)",
                }
              : {}
          }
        >
          {isActive ? (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <span>{String(index + 1).padStart(2, "0")}</span>
          )}
        </div>
        {/* Right line */}
        <div
          className="flex-1 h-0.5 transition-all duration-700"
          style={{
            background: index === total - 1 ? "transparent" : "#E5E7EB",
          }}
        />
      </div>
      {/* Label */}
      <p
        className={`mt-3 text-xs font-medium text-center leading-tight transition-colors duration-300 max-w-[100px]
          ${isActive ? "text-[#00A3E0]" : "text-gray-400 group-hover:text-gray-600"}`}
      >
        {step}
      </p>
    </button>
  );
};

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────
export default function ServiceTemplate({ service }) {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Use faq or faqs
  const faqs = service?.faq || service?.faqs || [];

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance process steps
 useEffect(() => {
  const total = service?.process?.length || 0;
  if (total === 0 || isUserInteracting) return;

  const interval = setInterval(() => {
    setActiveStep((prev) => (prev + 1) % total);
  }, 5000); //10 seconds

  return () => clearInterval(interval);
}, [service?.process?.length, isUserInteracting]);
  if (!service) return null;

  const {
    title,
    description,
    overview,
    features,
    process,
    industries,
    image,
    highlights,
  } = service;

  const stats = [
    { value: 100, suffix: "+", label: "Plants Installed" },
    { value: 13, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Uptime Guaranteed" },
  ];

  const trustBadges = [
    { icon: <ShieldIcon />, text: "ISO Certified" },
    { icon: <AwardIcon />, text: "Award Winning" },
    { icon: <ClockIcon />, text: "24/7 Support" },
    { icon: <UsersIcon />, text: "Expert Team" },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F9FF] via-white to-[#F8FAFF]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A3E0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-[#00A3E0]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#8DC63F]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />

        <div className="container-custom relative z-10 py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div
              className="transition-all duration-1000"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(32px)",
              }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6">
                <Link
                  href="/services"
                  className="text-base text-gray-400 hover:text-[#00A3E0] transition-colors"
                >
                  Services
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-sm text-[#00A3E0] font-medium">
                  {service.shortTitle}
                </span>
              </div>

              {/* Label pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A3E0]/10 rounded-full mb-5">
                <span
                  className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping"
                  style={{ animationDuration: "2s" }}
                />
                <span className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
                  Engineering Excellence
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                {title.split(" ").map((word, i) => {
                  const accent = [
                    "&",
                    "Maintenance",
                    "Operation",
                    "Systems",
                    "Services",
                    "AMC",
                    "MEP",
                  ];
                  return accent.includes(word) ? (
                    <span key={i} className="text-[#00A3E0]">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  );
                })}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl sm:pl-12">
                {description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-10 sm:pl-12">
                {(highlights || []).map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm text-sm font-medium text-gray-700"
                  >
                    <span className="text-[#8DC63F]">
                      <CheckIcon />
                    </span>
                    {h}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A3E0] hover:bg-[#0284C7] text-white font-semibold rounded-xl shadow-lg shadow-[#00A3E0]/25 hover:shadow-[#00A3E0]/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Free Consultation
                  <ArrowRight />
                </Link>
                <Link
                  href="#overview"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-gray-200 hover:border-[#00A3E0] text-gray-700 hover:text-[#00A3E0] font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {trustBadges.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-600 text-base"
                  >
                    <span className="text-[#00A3E0]">{b.icon}</span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image card */}
            <div
              className="relative transition-all duration-1000 delay-300"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(32px) scale(0.97)",
              }}
            >
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/80">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  {image ? (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00A3E0"
                        strokeWidth="1"
                        className="w-24 h-24 opacity-20"
                      >
                        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                </div>

                {/* Bottom overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        Service Category
                      </p>
                      <p className="text-sm font-bold text-gray-900 mt-0.5">
                        {service.shortTitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F] animate-pulse" />
                      <span className="text-xs font-semibold text-[#8DC63F]">
                        Active Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="hidden md:block absolute -left-8 top-1/3 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/80 border border-gray-50">
                <div className="text-2xl font-bold text-[#00A3E0]">500+</div>
                <div className="text-base text-gray-400 font-medium mt-0.5">
                  Plants Maintained
                </div>
              </div>

              {/* Floating cert card */}
              <div className=" hidden md:block absolute -right-4 top-8 bg-[#00A3E0] rounded-2xl p-3.5 shadow-xl shadow-[#00A3E0]/30">
                <div className="text-white">
                  <AwardIcon />
                </div>
                <div className="text-base text-white/80 font-medium mt-1">
                  ISO Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────── */}
      <section className="bg-[#1F2937] py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {s.label}
                </div>
                <div className="mt-2 w-8 h-0.5 bg-[#00A3E0]/0 group-hover:bg-[#00A3E0] mx-auto transition-all duration-500 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section id="overview" className="py-10 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#00A3E0]" />
              <span className="text-sm font-semibold text-[#00A3E0] uppercase tracking-widest">
                Service Overview
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose Our{" "}
              <span className="text-[#00A3E0]">{service.shortTitle}</span>{" "}
              Services?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">{overview}</p>

            {/* Credentials row */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Industry Expertise",
                  body: "Over 15 years of specialized experience in water and wastewater treatment engineering.",
                  color: "blue",
                },
                {
                  title: "Technical Excellence",
                  body: "Backed by certified engineers and state-of-the-art equipment for every project.",
                  color: "green",
                },
                {
                  title: "Proven Track Record",
                  body: "500+ successful installations across pharmaceutical, chemical, and manufacturing sectors.",
                  color: "blue",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl border border-gray-100 hover:border-[#00A3E0]/30 bg-white hover:bg-[#F0F9FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00A3E0]/5 hover:-translate-y-1"
                >
                  <div
                    className={`w-10 h-1 rounded-full mb-4 ${c.color === "blue" ? "bg-[#00A3E0]" : "bg-[#8DC63F]"}`}
                  />
                  <h4 className="font-bold text-gray-900 mb-2">{c.title}</h4>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#F8FAFF]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A3E0]/10 rounded-full mb-4">
              <span className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Capabilities &amp;{" "}
              <span className="text-[#00A3E0]">Features</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              Each service is backed by technical expertise, proven
              methodologies, and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(features || []).map((feat, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00A3E0]/30 shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/8 transition-all duration-400 hover:-translate-y-2 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A3E0] to-[#8DC63F] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0]/0 to-[#00A3E0]/0 group-hover:from-[#00A3E0]/3 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="relative">
                  {/* Icon box */}
                  <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 group-hover:bg-[#00A3E0] flex items-center justify-center mb-5 transition-all duration-300 text-[#00A3E0] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#00A3E0]/30">
                    <FeatureIcon index={i} />
                  </div>

                  {/* Number */}
                  <div className="absolute top-0 right-0 text-5xl font-black text-gray-50 group-hover:text-[#00A3E0]/10 transition-colors duration-300 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 pr-8">
                    {feat}
                  </h3>
                  <p className="text-base text-gray-400">
                    Professional execution with certified engineers and quality
                    assurance protocols.
                  </p>

                  {/* Read more hint */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#00A3E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS (INTERACTIVE ANIMATED) ────────────────────────────── */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A3E0]/10 rounded-full mb-4">
              <span className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
                How We Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#00A3E0]">Proven Process</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              A structured, transparent approach ensuring quality delivery at
              every stage.
            </p>
          </div>

          {/* Step indicators */}
          <div className="hidden md:flex flex items-start mb-12 px-4 md:px-8">
            {(process || []).map((step, i) => (
              <ProcessStep
                key={i}
                step={step}
                index={i}
                total={process.length}
                isActive={i <= activeStep}
                activeStep={activeStep}
                onClick={setActiveStep}
                onHover={(i) => {
                setIsUserInteracting(true);
                setActiveStep(i); // optional (focus on hovered step)
              }}
              onLeave={() => {
              setIsUserInteracting(false);
              }}
              />
            ))}
          </div>

          {/* Active step detail card */}
          <div className="hidden md:block relative mx-auto max-w-3xl ">
            {(process || []).map((step, i) => (
              <div
                key={i}
                className="transition-all duration-700 absolute inset-0"
                style={{
                  opacity: i === activeStep ? 1 : 0,
                  transform:
                    i === activeStep
                      ? "translateY(0) scale(1)"
                      : i < activeStep
                        ? "translateY(-16px) scale(0.97)"
                        : "translateY(16px) scale(0.97)",
                  pointerEvents: i === activeStep ? "auto" : "none",
                }}
              >
                <div className="bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl border border-[#00A3E0]/15 p-8 md:p-10 shadow-xl shadow-[#00A3E0]/8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#00A3E0] text-white flex items-center justify-center shadow-lg shadow-[#00A3E0]/30">
                      <span className="text-2xl font-black">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest mb-1">
                        Step {i + 1} of {process.length}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        Our certified engineers execute this phase with
                        precision, following industry-standard protocols and
                        maintaining complete documentation for transparency and
                        compliance.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {["Quality Assured", "Documented", "Compliant"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-semibold bg-[#00A3E0]/10 text-[#00A3E0] rounded-full"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-8 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00A3E0] to-[#8DC63F] rounded-full transition-all duration-700"
                      style={{ width: `${((i + 1) / process.length) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                    <span>Progress</span>
                    <span>{Math.round(((i + 1) / process.length) * 100)}%</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Spacer to maintain height */}
            <div className="invisible">
              <div className="bg-white rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16" />
                  <div>
                    <div className="text-xs mb-1">Step X</div>
                    <h3 className="text-2xl font-bold mb-3">Placeholder</h3>
                    <p>Placeholder content for height</p>
                    <div className="mt-5 flex gap-2">
                      <span className="px-3 py-1 text-xs">Tag</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 h-1.5" />
                <div className="mt-1.5 flex justify-between text-xs">
                  <span>Progress</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex flex justify-center gap-3 mt-20">
              <div className="flex items-center gap-2">
                {(process || []).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`rounded-full transition-all duration-300 ${i === activeStep ? "w-6 h-2 bg-[#00A3E0]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"}`}
                  />
                ))}
              </div>
             
            </div>
          </div>

          {/* ================= MOBILE PROCESS ================= */}
          <div className="md:hidden space-y-4 px-2">
            {(process || []).map((step, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-xl p-4 
                  border border-gray-100 
                  shadow-sm
                "
              >
                <div className="flex items-start gap-3">
                  {/* Step number */}
                  <div
                    className="
                    w-10 h-10 rounded-lg 
                    bg-[#00A3E0] text-white 
                    flex items-center justify-center 
                    font-bold text-sm
                    shrink-0
                  "
                  >
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {step}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      Professional execution with certified engineers and
                      quality assurance.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#1F2937]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-4">
              <span className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
                Sectors We Serve
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-[#00A3E0]">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Delivering specialized engineering solutions across diverse
              industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(industries || []).map((ind, i) => (
              <div
                key={i}
                className="group relative bg-white/5 hover:bg-[#00A3E0] border border-white/10 hover:border-[#00A3E0] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00A3E0]/20 cursor-default"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300">
                  <IndustryIcon index={i} />
                </div>
                <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-snug">
                  {ind}
                </p>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#8DC63F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-gray-500 text-sm mt-10">
            Not seeing your industry?{" "}
            <Link
              href="/contact"
              className="text-[#00A3E0] hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            — we serve many more sectors.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-10 bg-[#F8FAFF]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A3E0]/10 rounded-full mb-4">
                  <span className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
                    FAQ
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Common <span className="text-[#00A3E0]">Questions</span>
                </h2>
                <p className="text-gray-400">
                  Everything you need to know about our services.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                      ${openFaq === i ? "border-[#00A3E0]/30 shadow-lg shadow-[#00A3E0]/5" : "border-gray-100 hover:border-gray-200 shadow-sm"}`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300
                          ${openFaq === i ? "bg-[#00A3E0] text-white" : "bg-gray-100 text-gray-400"}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-semibold text-base leading-snug transition-colors duration-200
                          ${openFaq === i ? "text-[#00A3E0]" : "text-gray-900"}`}
                        >
                          {item.question}
                        </span>
                      </div>
                      <span
                        className={`flex-shrink-0 transition-transform duration-300 text-gray-400 ${openFaq === i ? "rotate-180 text-[#00A3E0]" : ""}`}
                      >
                        <ChevronDown />
                      </span>
                    </button>

                    <div
                      className="transition-all duration-500 ease-in-out"
                      style={{
                        maxHeight: openFaq === i ? "300px" : "0",
                        opacity: openFaq === i ? 1 : 0,
                      }}
                    >
                      <div className="px-6 pb-6">
                        <div className="ml-12 pt-2 border-t border-gray-50">
                          <p className="text-gray-500 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-400 text-sm mb-3">
                  Still have questions?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00A3E0] font-semibold hover:gap-3 transition-all duration-200"
                >
                  Talk to our engineers <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-10 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7] via-[#00A3E0] to-[#0369A1]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8DC63F]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-widest">
                Ready to Get Started?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your <br />
              <span className="text-[#8DC63F]">Water Treatment</span> Systems
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a free site assessment and customized proposal from our team
              of certified engineers. No commitment required.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#00A3E0] font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 text-base"
              >
                <PhoneIcon />
                Book Free Consultation
              </Link>
              <Link
                href="mailto:info@hyalineenviro.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl hover:-translate-y-1 transition-all duration-300 text-base backdrop-blur-sm"
              >
                <MailIcon />
                Email Our Engineers
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
              {[
                "Free Site Assessment",
                "No Hidden Costs",
                "24-hour Response",
                "ISO Certified Team",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="text-[#8DC63F]">
                    <CheckIcon />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
