// "use client";

// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import Button from "@/components/ui/Button";

// export default function SolutionTemplate({ data }) {
//   return (
//     <div>

//       {/* ================= HERO ================= */}
//       <section className="relative h-[420px] w-full">
//         <Image
//           src={data.hero.image}
//           alt={data.name}
//           fill
//           className="object-cover"
//           priority
//         />

//         <div className="absolute inset-0 bg-black/60 flex items-center">
//           <Container>
//             <div className="max-w-3xl text-white">
//               <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                 {data.hero.title}
//               </h1>
//               <p className="text-lg text-gray-200">
//                 {data.hero.subtitle}
//               </p>
//             </div>
//           </Container>
//         </div>
//       </section>

//       {/* ================= OVERVIEW ================= */}
//       <section className="py-16 bg-white">
//         <Container>
//           <div className="max-w-4xl">
//             <h2 className="text-2xl font-semibold mb-4">
//               Overview
//             </h2>
//             <p className="text-[var(--heading-text)] leading-relaxed text-lg">
//               {data.overview}
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* ================= WHAT WE PROVIDE ================= */}
//       <section className="py-16 bg-gray-50">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">
//             What We Provide
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data.whatWeProvide.map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition"
//               >
//                 <p className="font-medium">{item}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section className="py-16 bg-white">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-10">
//             Process / Workflow
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {data.process.map((step, i) => (
//               <div key={i} className="text-center">
//                 <div className="w-12 h-12 mx-auto bg-[#00A3E0] text-white rounded-full flex items-center justify-center font-bold mb-4">
//                   {i + 1}
//                 </div>
//                 <p className="text-[var(--heading-text)]">{step}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= BENEFITS ================= */}
//       <section className="py-16 bg-gray-50">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">
//             Key Benefits
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {data.benefits.map((item, i) => (
//               <div key={i} className="flex gap-3 items-start">
//                 <span className="text-[#00A3E0] text-xl">✔</span>
//                 <p className="text-[var(--heading-text)]">{item}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= INDUSTRIES ================= */}
//       <section className="py-16 bg-white">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">
//             Industries We Serve
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {data.industries.map((item, i) => (
//               <div
//                 key={i}
//                 className="p-5 border rounded-lg text-center hover:shadow-md transition"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-16 bg-gray-50">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">
//             Why Choose Hyaline Enviro Engineers
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {data.whyChooseUs.map((item, i) => (
//               <div key={i} className="flex gap-3">
//                 <span className="text-[#00A3E0]">✔</span>
//                 <p>{item}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-20 bg-[#00A3E0] text-white text-center">
//         <Container>
//           <h2 className="text-3xl font-semibold mb-4">
//             {data.cta.title}
//           </h2>
//           <p className="mb-6 text-white/90">
//             Talk to our experts and get customized engineering solutions.
//           </p>

//           <Button
//             href="/contact"
//             variant="secondary"
//           >
//             {data.cta.button}
//           </Button>
//         </Container>
//       </section>

//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import Button from "@/components/ui/Button";
// import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";

// import FAQSection from "../ui/FAQSection";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Breadcrumbs from "../ui/Breadcrumbs";

// export default function SolutionTemplate({ data }) {
//   return (
//     <>
//       {/* ================= SCHEMA ================= */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(generateServiceSchema(data)),
//         }}
//       />

//       {data.faq?.length > 0 && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(generateFAQSchema(data.faq)),
//           }}
//         />
//       )}

//       {/* ================= HERO ================= */}
//       <section className="relative h-[420px] w-full">
//         <Image
//           src={data.hero.image}
//           alt={data.name}
//           fill
//           className="object-cover"
//           priority
//         />

//         <div className="absolute inset-0 bg-black/60 flex items-center">
//           <Container>
//             <div className="max-w-3xl text-white">
//               <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                 {data.hero.title}
//               </h1>
//               <p className="text-lg text-gray-200">{data.hero.subtitle}</p>
//             </div>
//           </Container>
//         </div>
//       </section>

//       {/* ================= BREADCRUMBS ================= */}

//       <Breadcrumbs
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Solutions", href: "/solutions" },
//           { label: data.name },
//         ]}
//       />

//       {/* ================= OVERVIEW ================= */}
//       <section className="py-10">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//           <p className="text-[var(--heading-text)]">{data.overview}</p>
//         </Container>
//       </section>

//       {/* ================= WHAT WE PROVIDE ================= */}
//       <section className="py-10 bg-gray-50">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">What We Provide</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data.whatWeProvide.map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition"
//               >
//                 <p className="font-medium">{item}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= PROCESS ================= */}
//       {/* <section className="py-10 bg-white">
//           <Container>
//             <h2 className="text-2xl font-semibold mb-10">Process / Workflow</h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {data.process.map((step, i) => (
//                 <div key={i} className="text-center">
//                   <div className="w-12 h-12 mx-auto bg-[#00A3E0] text-white rounded-full flex items-center justify-center font-bold mb-4">
//                     {i + 1}
//                   </div>
//                   <p className="text-[var(--heading-text)]">{step}</p>
//                 </div>
//               ))}
//             </div>
//           </Container>
//         </section> */}
//       <section className="py-20 bg-[#f8fafc]">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* HEADER */}
//           <div className="text-center max-w-2xl mx-auto">
//             <p className="text-sm text-[#00A3E0] uppercase tracking-wider">
//               Process Flow
//             </p>
//             <h2 className="text-4xl font-semibold text-gray-800 mt-2">
//               Our Engineering Workflow
//             </h2>
//             <p className="text-gray-500 mt-3">
//               A structured and systematic approach ensuring efficient treatment,
//               optimized performance, and regulatory compliance.
//             </p>
//           </div>

//           {/* FLOW */}
//           <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-10">
//             {data.process.map((step, i) => (
//               <div key={i} className="flex items-center w-full">
//                 {/* STEP CARD */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2 }}
//                   viewport={{ once: true }}
//                   className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
//                 >
//                   {/* STEP NUMBER */}
//                   <div className="text-[#00A3E0] font-semibold text-sm mb-2">
//                     Step {i + 1}
//                   </div>

//                   {/* TITLE */}
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {step}
//                   </h3>

//                   {/* LINE */}
//                   <div className="mt-4 h-[2px] bg-gradient-to-r from-[#00A3E0] to-transparent"></div>
//                 </motion.div>

//                 {/* ARROW */}
//                 {i !== data.process.length - 1 && (
//                   <div className="hidden lg:flex items-center justify-center mx-4">
//                     <ArrowRight className="text-[#00A3E0]" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= BENEFITS ================= */}
//       <section className="py-10 bg-gray-50">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">Key Benefits</h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {data.benefits.map((item, i) => (
//               <div key={i} className="flex gap-3 items-start">
//                 <span className="text-[#00A3E0] text-xl">✔</span>
//                 <p className="text-[var(--heading-text)]">{item}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= INDUSTRIES ================= */}
//       {/* {data.industries?.length > 0 && (
//         <section className="py-10">
//           <Container>
//             <h2 className="text-2xl font-semibold mb-8">Industries</h2>

//             <div className="grid md:grid-cols-3 gap-6">
//               {data.industries.map((item, i) => (
//                 <div key={i} className="border p-4 text-center">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </Container>
//         </section>
//       )} */}

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-10 bg-gray-50">
//         <Container>
//           <h2 className="text-2xl font-semibold mb-8">
//             Why Choose Hyaline Enviro Engineers
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {data.whyChooseUs.map((item, i) => (
//               <div key={i} className="flex gap-3">
//                 <span className="text-[#00A3E0]">✔</span>
//                 <p>{item}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= FAQ ================= */}
//       {data.faq?.length > 0 && <FAQSection faqs={data.faq} />}

//       {/* ================= CTA ================= */}
//       <section className="py-10 bg-[#00A3E0] text-white text-center">
//         <Container>
//           <h2 className="text-3xl font-semibold mb-4">{data.cta.title}</h2>
//           <p className="mb-6 text-white/90">
//             Talk to our experts and get customized engineering solutions.
//           </p>

//           <Button href="/contact" variant="secondary">
//             {data.cta.button}
//           </Button>
//         </Container>
//       </section>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FAQSection from "../ui/FAQSection";
import Breadcrumbs from "../ui/Breadcrumbs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  MapPin,
  Users,
  Wrench,
  Droplets,
  Factory,
  Leaf,
  TrendingDown,
  BadgeCheck,
  FlaskConical,
  Building2,
  Stethoscope,
  Shirt,
  Flame,
  Cpu,
} from "lucide-react";

/* ─────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

/* ─────────────────────────────────────────────
   INDUSTRY ICON MAP
───────────────────────────────────────────── */
const INDUSTRY_ICONS = {
  Pharmaceutical: FlaskConical,
  Chemical: Cpu,
  Manufacturing: Factory,
  Textile: Shirt,
  Residential: Building2,
  Commercial: Building2,
  Healthcare: Stethoscope,
  "Food & Beverage": Flame,
  Industrial: Factory,
  "Food Processing": Flame,
  default: Building2,
};

/* ─────────────────────────────────────────────
   TRUST STATS
───────────────────────────────────────────── */
const TRUST_STATS = [
  { value: "13+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "200+", label: "Clients Served" },
  { value: "15+", label: "Industries" },
];

/* ─────────────────────────────────────────────
   CERTIFICATIONS
───────────────────────────────────────────── */
const CERTIFICATIONS = [
  "PCB Compliant",
  "ISO Certified",
  "ZLD Specialist",
  "Pan India Execution",
];

/* ─────────────────────────────────────────────
   BUSINESS IMPACT ICONS
───────────────────────────────────────────── */
const IMPACT_ICONS = [TrendingDown, Leaf, BadgeCheck, Droplets];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function SolutionTemplate({ data }) {
  return (
    <>
      {/* ═══════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════ */}
      <section
        className="relative flex flex-col justify-center overflow-hidden
      
         min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]"
      >
       
        {/* BG Image */}
        <Image
          src={data.hero.image}
          alt={data.name}
          fill
          className="object-center scale-105"
          priority
        />

        {/* Layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a2e]/90 via-[#002d4a]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a2e]/60 via-transparent to-transparent" />

        {/* Decorative Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent Glow */}
        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-72 h-72 bg-[#00A3E0] rounded-full blur-[120px] opacity-20 pointer-events-none" />

        <div className="relative w-full pb-16 pt-5 sm:px-18">
          <Container>
            <div className="max-w-2xl">
              {/* Tag */}
              <motion.div {...fadeIn(0.1)} className="mb-5">
                <span className="inline-flex items-center gap-2 text-[#00A3E0] text-xs font-semibold uppercase tracking-[0.15em] border border-[#00A3E0]/30 bg-[#00A3E0]/10 backdrop-blur px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                  Industrial Solution
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.15)}
                className="text-4xl md:text-[3.25rem] font-bold leading-[1.1] text-white mb-5"
              >
                {data.hero.title}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                {...fadeUp(0.22)}
                className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl"
              >
                {data.hero.subtitle} — engineered for performance, compliance,
                and long-term value.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                {...fadeUp(0.28)}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Button href="/contact" variant="primary">
                  Get Free Consultation
                </Button>
                <a
                  href="/Brochure/hyaline-brochure.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-white text-sm font-medium backdrop-blur hover:bg-white/10 transition"
                >
                  Download Brochure <ChevronRight size={15} />
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                {...fadeIn(0.35)}
                className="flex flex-wrap gap-x-7 gap-y-3"
              >
                {TRUST_STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-[#00A3E0]">
                      {s.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: data.name },
        ]}
      />

      {/* ═══════════════════════════════════════
          2. OVERVIEW + CERTIFICATIONS STRIP
      ═══════════════════════════════════════ */}
      <section className="section bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            <div>
              <motion.p
                {...fadeIn()}
                className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-3"
              >
                What is {data.name}?
              </motion.p>
              <motion.h2
                {...fadeUp(0.05)}
                className="text-3xl font-bold text-gray-900 mb-5"
              >
                Overview
              </motion.h2>
              {/* <motion.p
                {...fadeUp(0.1)}
                className="text-gray-600 leading-[1.9] text-[1.05rem]"
              >
                {data.overview}
              </motion.p> */}
              <div className="space-y-5">
                {data.overview
                  .split(/\n\s*\n/) 
                  .map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="text-gray-600 leading-[1.9]"
                    >
                      {para.trim()}
                    </motion.p>
                  ))}
              </div>
            </div>

            {/* Cert Card */}
            <motion.div
              {...fadeUp(0.15)}
              className="bg-[#f0f9ff] border border-[#00A3E0]/20 rounded-2xl p-6 space-y-3"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Compliance & Credentials
              </p>
              {CERTIFICATIONS.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#00A3E0] shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{c}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-[#00A3E0]/15 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} className="text-[#00A3E0]" />
                Pan India Project Execution
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          3. PROBLEM → SOLUTION
      ═══════════════════════════════════════ */}
      {data.problemSolution && (
        <section className="section bg-[#001a2e] text-white overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #00A3E0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <Container className="relative">
            <motion.div
              {...fadeUp()}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-3">
                The Challenge
              </p>
              <h2 className="text-3xl font-bold">
                Industry Pain Points We Solve
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {data.problemSolution.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition"
                >
                  <p className="text-[#ff6b6b] text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b6b]" />
                    Pain Point
                  </p>
                  <p className="text-gray-300 mb-4 text-sm">{item.problem}</p>
                  <p className="text-[#00A3E0] text-sm font-semibold mb-1 flex items-center gap-2">
                    <CheckCircle2 size={14} /> Our Solution
                  </p>
                  <p className="text-white text-sm">{item.solution}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ═══════════════════════════════════════
          4. WHAT WE PROVIDE (Solution Stack)
      ═══════════════════════════════════════ */}
      <section className="section bg-[#f8fafc]">
        <Container>
          <motion.div {...fadeUp()} className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-2">
              Complete Solution Stack
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              What We Provide
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              End-to-end engineering from design to long-term maintenance —
              single-vendor accountability.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.whatWeProvide.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00A3E0]/40 hover:shadow-lg hover:shadow-[#00A3E0]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00A3E0]/10 flex items-center justify-center mb-4 group-hover:bg-[#00A3E0]/20 transition">
                  <Wrench size={18} className="text-[#00A3E0]" />
                </div>
                <p className="font-semibold text-gray-800 text-sm leading-snug">
                  {item}
                </p>
                <div className="mt-4 h-px bg-gradient-to-r from-[#00A3E0]/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          5. PROCESS FLOW (Stepper)
      ═══════════════════════════════════════ */}
      <section className="section bg-white overflow-hidden relative">
        <Container>
          {/* HEADER */}
          <motion.div
            {...fadeUp()}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Engineering Workflow
            </h2>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              A structured, intelligent process designed for efficiency,
              compliance, and long-term performance.
            </p>
          </motion.div>

          {/* DESKTOP INTERACTIVE STEPPER */}
          <div className="hidden lg:flex items-start justify-between relative group">
            {/* Animated Connector Line */}
            <div className="absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/30 to-transparent">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-[#00A3E0] to-[#8DC63F]"
              />
            </div>

            {data.process.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.15)}
                className="flex flex-col items-center text-center flex-1 px-4 relative cursor-pointer group/item"
              >
                {/* Glow Effect */}
                <div className="absolute w-20 h-20 bg-[#00A3E0]/10 blur-2xl rounded-full opacity-0 group-hover/item:opacity-100 transition duration-500" />

                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#00A3E0] flex items-center justify-center font-bold text-[#00A3E0] text-lg shadow-md transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-xl group-hover/item:bg-[#00A3E0] group-hover/item:text-white z-10">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="mt-5">
                  <p className="font-semibold text-gray-800 text-sm md:text-base group-hover/item:text-[#00A3E0] transition">
                    {step}
                  </p>

                  {/* Optional Description */}
                  <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover/item:opacity-100 transition duration-300">
                    Optimized engineering step ensuring efficiency
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE - PREMIUM CARDS */}
          <div className="lg:hidden space-y-6">
            {data.process.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="relative group"
              >
                <div className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm backdrop-blur-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  {/* Number */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A3E0] to-[#8DC63F] flex items-center justify-center font-bold text-white text-sm shadow-md">
                      {i + 1}
                    </div>

                    {i < data.process.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[#00A3E0]/40 to-transparent my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-[#00A3E0] transition">
                      {step}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Structured execution ensuring high performance &
                      compliance.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          6. BUSINESS IMPACT (was "Benefits")
      ═══════════════════════════════════════ */}
      <section className="section bg-gradient-to-br from-[#f0f9ff] to-[#f8fafc]">
        <Container>
          <motion.div {...fadeUp()} className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-2">
              Value Delivered
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Business Impact & Benefits
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Tangible outcomes that directly affect your compliance, costs, and
              sustainability goals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {data.benefits.map((item, i) => {
              const Icon = IMPACT_ICONS[i % IMPACT_ICONS.length];
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00A3E0]/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#00A3E0]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {item}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          7. INDUSTRIES (Visual Grid)
      ═══════════════════════════════════════ */}
      {data.industries?.length > 0 && (
        <section className="section bg-white">
          <Container>
            <motion.div {...fadeUp()} className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-2">
                Who We Serve
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Industries We Work With
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.industries.map((ind, i) => {
                const Icon = INDUSTRY_ICONS[ind] ?? INDUSTRY_ICONS.default;
                const useCase = data.industryCases?.[ind] ?? "";
                return (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.07)}
                    className="group flex flex-col items-center text-center bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 hover:border-[#00A3E0]/40 hover:bg-[#f0f9ff] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 flex items-center justify-center mb-3 group-hover:bg-[#00A3E0]/20 transition">
                      <Icon size={22} className="text-[#00A3E0]" />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">{ind}</p>
                    {useCase && (
                      <p className="text-xs text-gray-400 mt-1 leading-snug">
                        {useCase}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ═══════════════════════════════════════
          8. CASE STUDIES (if present)
      ═══════════════════════════════════════ */}
      {data.caseStudies?.length > 0 && (
        <section className="section bg-[#001a2e] text-white">
          <Container>
            <motion.div {...fadeUp()} className="mb-12">
              <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-2">
                Proven Track Record
              </p>
              <h2 className="text-3xl font-bold">Project Case Studies</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.caseStudies.map((cs, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition"
                >
                  <p className="text-[#00A3E0] font-bold text-lg mb-1">
                    {cs.client}
                  </p>
                  <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">
                    {cs.industry}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400 font-medium">
                        Challenge:{" "}
                      </span>
                      <span className="text-gray-300">{cs.problem}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-medium">
                        Solution:{" "}
                      </span>
                      <span className="text-gray-300">{cs.solution}</span>
                    </div>
                    <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                      <CheckCircle2
                        size={15}
                        className="text-[#8DC63F] shrink-0 mt-0.5"
                      />
                      <span className="text-[#8DC63F] font-medium">
                        {cs.outcome}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ═══════════════════════════════════════
          9. WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="section bg-[#f8fafc]">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <motion.div {...fadeUp()}>
              <p className="text-xs uppercase tracking-widest text-[#00A3E0] font-semibold mb-2">
                Our Edge
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Why Choose Hyaline Enviro Engineers
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                More than a vendor — we are an engineering partner committed to
                your operational success with complete end-to-end
                accountability.
              </p>

              <div className="space-y-4">
                {data.whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.08)}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-white" />
                    </div>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-4">
              {TRUST_STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-bold text-[#00A3E0] mb-1">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          10. FAQ (SEO-Optimized)
      ═══════════════════════════════════════ */}
      {data.faq?.length > 0 && <FAQSection faqs={data.faq} />}

      {/* ═══════════════════════════════════════
          11. CTA (Conversion)
      ═══════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-[#00A3E0]">
        {/* Decorative bg */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 50%, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative text-center">
          <motion.div {...fadeUp()}>
            <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-3">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {data.cta.title}
            </h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto">
              Talk to our engineers and get a customized solution tailored to
              your industry and compliance needs — no obligation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button href="/contact" variant="secondary">
                {data.cta.button}
              </Button>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 text-white font-medium hover:underline"
              >
                <Phone size={16} />
                Call an Expert Now
              </a>
            </div>

            {/* Quick contact pills */}
            <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <Award size={14} />
                Free site assessment
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                Expert consultation
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} />
                Quick turnaround quote
              </span>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
