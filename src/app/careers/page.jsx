"use client";

import { useEffect, useRef, useState } from "react";

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
const IconArrowDown = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);
const IconMail = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconShield = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconTrendingUp = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconLayers = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconAnchor = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>
);
const IconWrench = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const IconCog = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
  </svg>
);
const IconDroplets = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>
);
const IconFactory = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);
const IconCheck = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── useInView hook for scroll-triggered animations ───────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── AnimatedSection wrapper ──────────────────────────────────────────────────
function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const positions = [
  {
    title: "Technician (ITI)",
    tag: "Site / Plant",
    desc: "Hands-on operation, maintenance, and installation support for water treatment plants and fabricated structures.",
    skills: ["ITI Certificate", "Fitting / Welding / Electrical", "Site-ready"],
  },
  {
    title: "Mechanical Engineer",
    tag: "B.Tech / B.E.",
    desc: "Design, engineering, and execution of piping systems, process equipment, and industrial fabrication works.",
    skills: ["B.Tech Mechanical", "AutoCAD / SolidWorks", "0–5 yrs exp."],
  },
  {
    title: "Instrumentation Engineer",
    tag: "B.Tech / Diploma",
    desc: "Commissioning and calibration of sensors, SCADA panels, PLCs, and control systems across treatment plants.",
    skills: [
      "Instrumentation / E&TC",
      "PLC / SCADA basics",
      "Field experience preferred",
    ],
  },
  {
    title: "Structural Engineer",
    tag: "B.Tech Civil / Structural",
    desc: "Structural design and site supervision of MS/SS platforms, civil foundations, and industrial structures.",
    skills: [
      "Civil / Structural B.Tech",
      "STAAD / AutoCAD",
      "Industrial projects preferred",
    ],
  },
];

const whyJoin = [
  {
    icon: <IconTrendingUp />,
    title: "Accelerated Growth",
    desc: "Work across complex projects spanning design, fabrication, and commissioning — compressed learning that a desk job cannot replicate.",
  },
  {
    icon: <IconLayers />,
    title: "Real Engineering Projects",
    desc: "Every role involves actual plant-level execution — WTP, STP, ETP, RO systems, and structural works — not simulations or maintenance checklists.",
  },
  {
    icon: <IconAnchor />,
    title: "Stability & Long-term Career",
    desc: "Hyaline operates across India with a strong project pipeline. We invest in people who commit to growing with us.",
  },
  {
    icon: <IconShield />,
    title: "Safety-first Culture",
    desc: "Site safety is non-negotiable. Every team member is briefed, equipped, and supported before boots hit the ground.",
  },
];

const workAreas = [
  { icon: <IconDroplets />, label: "Water Treatment Plants (WTP)" },
  { icon: <IconDroplets />, label: "Sewage Treatment Plants (STP)" },
  { icon: <IconFactory />, label: "Effluent Treatment Plants (ETP)" },
  { icon: <IconCog />, label: "RO, ZLD, MEE & ATFD Systems" },
  { icon: <IconWrench />, label: "MS / SS Industrial Fabrication" },
  { icon: <IconFactory />, label: "Pharma, Chemical & Power Industries" },
];

const stats = [
  { value: "13+", label: "Years of Engineering Expertise" },
  { value: "200+", label: "Plants Commissioned Across India" },
  { value: "10+", label: "Industry Sectors Served" },
  { value: "PAN India", label: "Project Footprint" },
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function CareersPage() {
  const applyRef = useRef(null);
  const scrollToApply = () =>
    applyRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="bg-white overflow-x-hidden">
      {/* 
          HERO SECTION
       */}
      <section className="relative min-h-[70svh] flex items-center  pt-5 overflow-hidden">
        {/* Background geometry */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, #0f1f35 0%, #1a3a5c 55%, #00A3E0 100%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl z-0"
          style={{ background: "var(--color-primary)" }}
        />
        {/* Green accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "var(--color-secondary)" }}
        />

        <div className="container-custom relative z-10 py-14 flex items-center justify-center">
          <div className="max-w-3xl">
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-sm font-medium"
              style={{
                borderColor: "rgba(141,198,63,0.4)",
                color: "#8DC63F",
                background: "rgba(141,198,63,0.08)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#8DC63F" }}
              />
              We are Hiring — 2026
            </div>

            <h1
              className="text-white mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
              }}
            >
              Build Infrastructure That <br />
              <span style={{ color: "#8DC63F" }}>Sustains the Nation.</span>
            </h1>

            <p
              className="text-blue-100 mb-8 max-w-xl"
              style={{ fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              Hyaline Enviro Engineers is looking for engineers and technicians
              who want to work on real treatment plants, large-scale
              fabrication, and industrial systems — across India is most
              critical sectors.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToApply}
                className="flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
                style={{
                  background: "var(--color-primary)",
                  fontFamily: "var(--font-heading)",
                  boxShadow: "0 8px 32px rgba(0,163,224,0.35)",
                }}
              >
                <IconMail /> Send Your Resume
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("positions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 font-medium px-8 py-4 rounded-lg border text-white transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                View Open Positions <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
          STATS BAR
       */}
      <section style={{ background: "var(--color-dark)" }}>
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-700">
            {stats.map((s, i) => (
              <AnimatedSection
                key={i}
                delay={i * 80}
                className="text-center px-6 py-2"
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 
          ABOUT / WHAT WE DO
       */}
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 block"
                style={{ color: "var(--color-primary)" }}
              >
                Who We Are
              </span>
              <h2 className="mb-5" style={{ color: "var(--color-dark)" }}>
                End-to-End Water &amp;
                <br /> Industrial Engineering
              </h2>
              <p className="mb-5" style={{ color: "var(--color-text)" }}>
                Hyaline Enviro Engineers Pvt. Ltd. is a professionally managed
                engineering company specializing in water and wastewater
                treatment systems, and industrial fabrication works. We deliver
                complete solutions — from concept design and detailed
                engineering to manufacturing, on-site installation, and final
                commissioning.
              </p>
              <p style={{ color: "var(--color-text)" }}>
                Our projects span critical industries including Pharma,
                Chemicals, Food Processing, Power Plants, Infrastructure, and
                Manufacturing — wherever clean water, zero-liquid discharge, or
                robust structural fabrication is needed, our teams are on the
                ground.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {workAreas.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border bg-white"
                    style={{
                      borderColor: "#E5E7EB",
                      transition: "var(--transition)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--color-primary)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(0,163,224,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      style={{ color: "var(--color-primary)", marginTop: 2 }}
                    >
                      {area.icon}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-dark)" }}
                    >
                      {area.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 
          WHY JOIN US
       */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-3 block"
              style={{ color: "var(--color-primary)" }}
            >
              Why Hyaline
            </span>
            <h2 style={{ color: "var(--color-dark)" }}>
              More Than a Job. <br />A Career With Depth.
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--color-text)"}}>
              We are not a startup chasing hype. We are an engineering company
              that builds systems that run for decades. Here is what that means
              for your career.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoin.map((item, i) => (
              <AnimatedSection key={i} delay={i * 90}>
                <div
                  className="p-6 rounded-2xl border h-full flex flex-col gap-4 group cursor-default"
                  style={{
                    borderColor: "#E5E7EB",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,163,224,0.12)";
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(0,163,224,0.08)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 style={{ color: "var(--color-dark)" }}>{item.title}</h4>
                  <p
                    className="text-sm flex-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 
          LIFE AT COMPANY
       */}
      <section
        className="section relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f1f35 0%, #1a3a5c 100%)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 block"
                style={{ color: "#8DC63F" }}
              >
                Life at Hyaline
              </span>
              <h2 className="text-white mb-6">
                Where Engineers Do Actual Engineering.
              </h2>
              <div className="space-y-5">
                {[
                  {
                    heading: "Field-first, desk-second.",
                    body: "Our teams don't push papers. You'll be at plant sites, in fabrication yards, and on commissioning floors — solving real problems with real tools.",
                  },
                  {
                    heading: "Multi-disciplinary exposure.",
                    body: "Mechanical, civil, instrumentation, and process engineering work side by side. You gain breadth rare in siloed organizations.",
                  },
                  {
                    heading: "A team that's been there.",
                    body: "Our senior engineers have decades of field experience. Mentorship here is operational — not motivational.",
                  },
                  {
                    heading: "Respect for the craft.",
                    body: "We value precision, accountability, and an honest day's work. Good engineering is recognized and rewarded.",
                  },
                ].map((pt, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{
                        background: "rgba(141,198,63,0.2)",
                        color: "#8DC63F",
                      }}
                    >
                      <IconCheck />
                    </div>
                    <p className="text-blue-100">
                      <strong className="text-white">{pt.heading}</strong>{" "}
                      {pt.body}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              {/* Decorative engineering card stack */}
              <div className="relative">
                <div
                  className="absolute -top-4 -right-4 w-full h-full rounded-2xl opacity-20"
                  style={{ background: "var(--color-primary)" }}
                />
                <div
                  className="relative rounded-2xl p-8 border"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest font-semibold mb-4"
                    style={{ color: "#8DC63F" }}
                  >
                    Our Project Footprint
                  </p>
                  <div className="space-y-4">
                    {[
                      ["WTP / STP / ETP", "Complete design-to-commissioning"],
                      ["RO & ZLD Systems", "Zero liquid discharge expertise"],
                      ["MEE & ATFD", "Evaporation & drying systems"],
                      [
                        "MS / SS Fabrication",
                        "Platforms, tanks & structural works",
                      ],
                      [
                        "Pan-India Deployment",
                        "Site teams across multiple states",
                      ],
                    ].map(([title, sub], i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-3 border-b"
                        style={{ borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        <span className="font-semibold text-white text-sm">
                          {title}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 
          OPEN POSITIONS
       */}
      <section id="positions" className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-3 block"
              style={{ color: "var(--color-primary)" }}
            >
              Open Positions
            </span>
            <h2 style={{ color: "var(--color-dark)" }}>Current Openings</h2>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              We hire for skill, attitude, and commitment. Browse current roles
              below and apply directly via email.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {positions.map((pos, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  className="border rounded-2xl p-6 flex flex-col gap-4 h-full relative overflow-hidden group"
                  style={{
                    borderColor: "#E5E7EB",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 40px rgba(0,163,224,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                    style={{ background: "var(--color-primary)" }}
                  />
                  <div className="pl-2">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="text-lg font-semibold"
                        style={{
                          color: "var(--color-dark)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {pos.title}
                      </h3>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                        style={{
                          background: "rgba(0,163,224,0.10)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {pos.tag}
                      </span>
                    </div>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "var(--color-text)" }}
                    >
                      {pos.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pos.skills.map((sk, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-full border font-medium"
                          style={{
                            borderColor: "#D1D5DB",
                            color: "var(--color-text)",
                            background: "var(--color-light)",
                          }}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4 pl-2">
                    <button
                      onClick={scrollToApply}
                      className="text-sm font-semibold flex items-center gap-1 transition-all hover:gap-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Apply via Email <IconChevronRight />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Open application note */}
          <AnimatedSection delay={200} className="mt-8">
            <div
              className="rounded-xl p-5 flex items-start gap-4 border"
              style={{
                background: "rgba(141,198,63,0.06)",
                borderColor: "rgba(141,198,63,0.3)",
              }}
            >
              <span className="text-2xl mt-0.5">💡</span>
              <p className="text-sm" style={{ color: "var(--color-text)" }}>
                <strong style={{ color: "var(--color-dark)" }}>
                  Do not see your role listed?
                </strong>{" "}
                We regularly expand our teams. If you are a skilled engineer or
                technician in the water treatment or industrial fabrication
                space,{" "}
                <button
                  onClick={scrollToApply}
                  className="underline font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  send us your profile anyway.
                </button>{" "}
                We keep active candidates in our pipeline.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 
          HOW TO APPLY
       */}
      <section
        ref={applyRef}
        className="section"
        style={{ background: "var(--color-light)" }}
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 block"
                style={{ color: "var(--color-primary)" }}
              >
                How to Apply
              </span>
              <h2 className="mb-5" style={{ color: "var(--color-dark)" }}>
                Simple. Direct. No Portals.
              </h2>
              <p className="mb-8" style={{ color: "var(--color-text)" }}>
                We believe in keeping recruitment straightforward. No lengthy
                forms, no third-party portals. Send your resume directly to our
                HR team and we will get back to you promptly.
              </p>

              <div className="space-y-5">
                {[
                  ["Step 1", "Prepare your updated resume (PDF preferred)"],
                  [
                    "Step 2",
                    `Write your email subject as: "Application for [Position] – [Your Name]"`,
                  ],
                  ["Step 3", "Send it to hr@hyalineenviro.com"],
                  [
                    "Step 4",
                    "Our HR team reviews all applications and contacts shortlisted candidates",
                  ],
                ].map(([step, text], i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                      style={{
                        background: "var(--color-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {step}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text)" }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              {/* Email CTA Card */}
              <div
                className="rounded-2xl overflow-hidden shadow-xl border"
                style={{ borderColor: "#E5E7EB" }}
              >
                {/* Card header */}
                <div
                  className="p-6"
                  style={{ background: "var(--color-dark)" }}
                >
                  <p
                    className="text-xs uppercase tracking-widest font-semibold mb-1"
                    style={{ color: "#8DC63F" }}
                  >
                    Apply Now
                  </p>
                  <h3 className="text-white text-xl">Send Your Resume</h3>
                </div>
                {/* Card body */}
                <div className="bg-white p-6 space-y-6">
                  {/* Email highlight */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      HR Email Address
                    </p>
                    <a
                      href="mailto:hr@hyalineenviro.com"
                      className="flex items-center gap-3 p-4 rounded-xl border-2 font-bold text-lg transition-all hover:shadow-md"
                      style={{
                        borderColor: "var(--color-primary)",
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      <IconMail />
                      hr@hyalineenviro.com
                    </a>
                  </div>

                  {/* Subject format */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      Email Subject Format
                    </p>
                    <div
                      className="p-4 rounded-xl font-mono text-sm"
                      style={{
                        background: "var(--color-light)",
                        color: "var(--color-dark)",
                        border: "1px dashed #D1D5DB",
                      }}
                    >
                      Application for [Position] – [Your Name]
                    </div>
                    <p
                      className="text-xs mt-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      Example:{" "}
                      <em>
                        Application for Mechanical Engineer – Rahul Sharma
                      </em>
                    </p>
                  </div>

                  {/* Open application */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(0,163,224,0.06)",
                      border: "1px solid rgba(0,163,224,0.2)",
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-dark)" }}
                    >
                      <strong>Open application welcome.</strong> Even if your
                      profile does not match any current opening, you are
                      encouraged to send your resume. We maintain an active
                      talent pool and reach out when relevant roles open up.
                    </p>
                  </div>

                  <a
                    href="mailto:hr@hyalineenviro.com?subject=Application%20for%20[Position]%20–%20[Your%20Name]"
                    className="w-full flex items-center justify-center gap-2 font-semibold py-4 rounded-xl text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                    style={{
                      background: "var(--color-primary)",
                      fontFamily: "var(--font-heading)",
                      boxShadow: "0 8px 24px rgba(0,163,224,0.30)",
                    }}
                  >
                    <IconMail /> Open Email Client & Apply
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 
          FINAL CTA
       */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1f35 0%, #1a3a5c 70%, #00A3E0 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#8DC63F" }}
            >
              Your Next Chapter
            </p>
            <h2
              className="text-white mb-6 mx-auto"
              style={{
                maxWidth: "640px",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              }}
            >
              If You Engineer With Purpose, <br /> You Belong Here.
            </h2>
            <p
              className="text-blue-200 mb-10 mx-auto"
              style={{
                maxWidth: "560px",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              Hyaline Enviro Engineers is built by people who take their craft
              seriously. If you are looking for a place where your technical
              skills are put to real use — not just on paper — we would like to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hr@hyalineenviro.com?subject=Application%20for%20[Position]%20–%20[Your%20Name]"
                className="flex items-center justify-center gap-2 font-semibold px-10 py-4 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "var(--color-primary)",
                  fontFamily: "var(--font-heading)",
                  boxShadow: "0 8px 32px rgba(0,163,224,0.4)",
                }}
              >
                <IconMail /> Send Resume to HR
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("positions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2 font-medium px-10 py-4 rounded-xl border text-white transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                Browse Openings
              </button>
            </div>

            <p
              className="mt-8 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Hyaline Enviro Engineers Pvt. Ltd. · Complete Water Treatment
              &amp; Engineering Solutions · India
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
