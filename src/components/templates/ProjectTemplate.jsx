// "use client";

// import Image from "next/image";

// export default function ProjectTemplate({ project }) {
//   // ✅ Schema
//   const projectSchema = {
//     "@context": "https://schema.org",
//     "@type": "CreativeWork",
//     name: project.title,
//     description: project.description,
//     image: project.image,
//     author: {
//       "@type": "Organization",
//       name: "Hyaline Enviro Engineers Pvt. Ltd.",
//     },
//   };

//   return (
//     <div className="bg-white">
//       {/* ✅ Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(projectSchema),
//         }}
//       />

//       {/* Hero */}
//       <div className="relative h-[400px]">
//         <div className="relative w-full h-[250px]">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/50 flex items-center">
//           <div className="max-w-5xl mx-auto px-6 text-white">
//             <h1 className="text-3xl md:text-4xl font-bold">
//               {project.title}
//             </h1>
//             <p className="mt-2">
//               {project.industry} • {project.location}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* Client */}
//         <div className="flex items-center gap-4 mb-8">
//           <Image
//             src={project.client.logo}
//             alt={project.client.name}
//             width={48}
//             height={48}
//             className="object-contain"
//           />
//           <div>
//             <p className="font-semibold">{project.client.name}</p>
//             <p className="text-sm text-gray-500">Client</p>
//           </div>
//         </div>

//         {/* Info */}
//         <div className="grid md:grid-cols-2 gap-6 mb-10 bg-gray-50 p-6 rounded-xl">
//           <p><strong>Industry:</strong> {project.industry}</p>
//           <p><strong>Location:</strong> {project.location}</p>
//           <p><strong>Capacity:</strong> {project.capacity}</p>
//           <p><strong>Technology:</strong> {project.technology.join(", ")}</p>
//         </div>

//         {/* Description */}
//         <div className="mb-10">
//           <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
//           <p className="text-gray-700 leading-relaxed">
//             {project.description}
//           </p>
//         </div>

//         {/* Results */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Key Results</h2>

//           <ul className="grid md:grid-cols-2 gap-4">
//             {project.results.map((item, i) => (
//               <li
//                 key={i}
//                 className="bg-green-50 border border-green-200 p-4 rounded-lg"
//               >
//                 ✔ {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Gauge,
  Factory,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Layers,
  Award,
  Zap,
  FlaskConical,
  Droplets,
  Building2,
} from "lucide-react";

// ─── Scroll-triggered animation hook ────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Category → accent color map ────────────────────────────────────────────
const categoryColors = {
  WTP: "bg-cyan-50 text-cyan-700 border-cyan-200",
  STP: "bg-teal-50 text-teal-700 border-teal-200",
  ETP: "bg-emerald-50 text-emerald-700 border-emerald-200",
  RO: "bg-blue-50 text-blue-700 border-blue-200",
  ZLD: "bg-indigo-50 text-indigo-700 border-indigo-200",
  MEE: "bg-violet-50 text-violet-700 border-violet-200",
  Fabrication: "bg-slate-100 text-slate-700 border-slate-200",
};

const categoryDefault = "bg-blue-50 text-blue-700 border-blue-200";

// ─── Dummy related projects ──────────────────────────────────────────────────
const relatedProjects = [
  {
    title: "Zero Liquid Discharge — Pharma Unit",
    category: "ZLD",
    location: "Hyderabad, TS",
    image: null,
  },
  {
    title: "STP — 2 MLD Municipal Plant",
    category: "STP",
    location: "Pune, MH",
    image: null,
  },
  {
    title: "SS Structural Fabrication — Power Plant",
    category: "Fabrication",
    location: "Nagpur, MH",
    image: null,
  },
];

// ─── Stat derived from capacity string (purely visual) ──────────────────────
function CapacityVisual({ capacity }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-base font-semibold text-slate-800">{capacity}</span>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
export default function ProjectTemplate({ project }) {
  const {
    title = "Project Title",
    description = "",
    industry = "Industrial",
    location = "India",
    capacity = "—",
    technology = [],
    image,
    client = {},
    results = [],
    shortResult = "",
    category = "WTP",
  } = project || {};

  const catColor = categoryColors[category] || categoryDefault;

  // ── Highlight cards data ─────────────────────────────────────────────────
  const highlights = [
    { icon: Factory, label: "Industry", value: industry, accent: "text-blue-600", bg: "bg-blue-50" },
    { icon: MapPin, label: "Location", value: location, accent: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Gauge, label: "Capacity", value: capacity, accent: "text-amber-600", bg: "bg-amber-50" },
    { icon: Layers, label: "Technology", value: technology.slice(0, 2).join(", ") + (technology.length > 2 ? ` +${technology.length - 2}` : ""), accent: "text-violet-600", bg: "bg-violet-50" },
  ];

  return (
    <article className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[70vh] min-h-[480px] max-h-[720px] overflow-hidden">
        {/* Background image */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
            {/* Geometric pattern fallback */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>
        )}

        {/* Multi-layer overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs text-white/60 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={13} className="text-white/30" />
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <ChevronRight size={13} className="text-white/30" />
              <span className="text-white/90 truncate max-w-[200px]">{title}</span>
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12 w-full">

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {/* Category badge */}
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${catColor} backdrop-blur-sm`}>
                <Droplets size={11} />
                {category}
              </span>
              {/* Short result chip */}
              {shortResult && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                  <Zap size={11} />
                  {shortResult}
                </span>
              )}
            </div>

            <h1
              className="text-white font-bold leading-tight mb-4"
              style={{
                fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
                fontFamily: "var(--font-heading)",
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              }}
            >
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Factory size={14} className="text-white/50" />
                {industry}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-white/50" />
                {location}
              </span>
              {capacity && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="flex items-center gap-1.5">
                    <Gauge size={14} className="text-white/50" />
                    {capacity}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FLOATING HIGHLIGHTS STRIP
          (overlaps hero bottom + page)
      ══════════════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="-mt-10 relative z-20 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map(({ icon: Icon, label, value, accent, bg }, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${bg} group-hover:scale-105 transition-transform`}>
                  <Icon size={18} className={accent} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-slate-800 truncate">{value || "—"}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MAIN CONTENT AREA
      ══════════════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Left column: main content ─────────────────────────────── */}
          <div className="lg:col-span-2 space-y-16">

            {/* PROJECT OVERVIEW ───────────────────────────────────────── */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                    Project Overview
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-[1.05rem]" style={{ maxWidth: "68ch" }}>
                  {description || "No description provided for this project."}
                </p>
              </div>
            </Reveal>

            {/* DIVIDER */}
            <div className="border-t border-slate-100" />

            {/* KEY RESULTS ────────────────────────────────────────────── */}
            {results.length > 0 && (
              <Reveal>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-green-400" />
                    <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                      Key Results &amp; Outcomes
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {results.map((result, i) => (
                      <Reveal key={i} delay={i * 60}>
                        <div className="group flex items-start gap-4 p-5 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                            <CheckCircle2 size={17} className="text-emerald-600" />
                          </div>
                          <p className="text-sm font-medium text-slate-700 leading-relaxed">{result}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* DIVIDER */}
            {results.length > 0 && <div className="border-t border-slate-100" />}

            {/* TECHNOLOGIES ───────────────────────────────────────────── */}
            {technology.length > 0 && (
              <Reveal>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-blue-400" />
                    <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                      Technology &amp; Systems
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {technology.map((tech, i) => (
                      <Reveal key={i} delay={i * 40}>
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium text-slate-700 bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-200 cursor-default">
                          <Cpu size={13} className="text-slate-400" />
                          {tech}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

          </div>

          {/* ── Right column: sidebar ─────────────────────────────────── */}
          <div className="space-y-6">

            {/* CLIENT TRUST BLOCK ─────────────────────────────────────── */}
            {(client.name || client.logo) && (
              <Reveal delay={100}>
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  {/* Header strip */}
                  <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center gap-2">
                    <Award size={14} className="text-amber-500" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Trusted Client</span>
                  </div>
                  <div className="p-6 flex flex-col items-center gap-4 text-center">
                    {client.logo ? (
                      <div className="relative w-28 h-14">
                        <Image
                          src={client.logo}
                          alt={client.name || "Client"}
                          fill
                          className="object-contain"
                          sizes="112px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                        <Building2 size={26} className="text-slate-400" />
                      </div>
                    )}
                    {client.name && (
                      <div>
                        <p className="font-bold text-slate-800 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                          {client.name}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">Client Partner</p>
                      </div>
                    )}
                    <div className="w-full pt-2 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                        <CheckCircle2 size={13} />
                        Successfully Delivered
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* PROJECT SPECS CARD ─────────────────────────────────────── */}
            <Reveal delay={160}>
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center gap-2">
                  <FlaskConical size={14} className="text-blue-500" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Project Specs</span>
                </div>
                <div className="p-5 space-y-4">
                  {[
                    { label: "Category", value: category },
                    { label: "Industry", value: industry },
                    { label: "Location", value: location },
                    { label: "Capacity", value: capacity },
                  ].map(({ label, value }, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide pt-0.5">{label}</span>
                      <span className="text-sm font-semibold text-slate-700 text-right">{value || "—"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CONTACT NUDGE CARD ─────────────────────────────────────── */}
            <Reveal delay={220}>
              <div className="rounded-2xl p-6 text-center" style={{ background: "linear-gradient(135deg, #0f2744 0%, #1a3a5c 60%, #0284C7 100%)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">Similar Requirement?</p>
                <p className="text-white font-bold text-base mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Let is engineer your solution.
                </p>
                <p className="text-blue-200 text-xs leading-relaxed mb-5">
                  Our engineers have delivered 200+ plants. Reach out for a technical consultation.
                </p>
                <a
                  href="mailto:hr@hyalineenviro.com"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
                  style={{ background: "#00A3E0", boxShadow: "0 6px 20px rgba(0,163,224,0.35)" }}
                >
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          RELATED PROJECTS
      ══════════════════════════════════════════════════════════════ */}
      <section className="mt-24 border-t border-slate-100 bg-slate-50/70 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-500 mb-1">Portfolio</p>
                <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                  Related Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                View All Projects
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {relatedProjects.map((rp, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link href="/projects" className="block group">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Image placeholder */}
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                      {/* Category badge overlay */}
                      <div className="absolute bottom-3 left-3">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${categoryColors[rp.category] || categoryDefault}`}>
                          {rp.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="font-semibold text-slate-800 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                        {rp.title}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MapPin size={11} />
                        {rp.location}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #00A3E0 100%)" }}>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "#00A3E0" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-semibold" style={{ borderColor: "rgba(0,163,224,0.4)", color: "#60C8F0", background: "rgba(0,163,224,0.08)" }}>
                <Zap size={12} />
                Engineering Consultation
              </div>
              <h2
                className="text-white font-bold mb-5 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontFamily: "var(--font-heading)" }}
              >
                Need a Similar Solution?
              </h2>
              <p className="text-blue-200 mb-10 leading-relaxed">
                Whether you need a treatment plant, fabrication works, or a full turnkey industrial solution — our engineering team is ready to assess your requirement and deliver.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                  style={{ background: "#00A3E0", boxShadow: "0 8px 32px rgba(0,163,224,0.35)", fontFamily: "var(--font-heading)" }}
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border transition-all hover:bg-white/10 w-full sm:w-auto justify-center"
                  style={{ borderColor: "rgba(255,255,255,0.25)" }}
                >
                  <Phone size={15} /> Contact Us
                </Link>
              </div>

              <p className="text-blue-300/50 text-xs mt-8">
                Hyaline Enviro Engineers Pvt. Ltd. · Complete Water Treatment &amp; Engineering Solutions
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </article>
  );
}