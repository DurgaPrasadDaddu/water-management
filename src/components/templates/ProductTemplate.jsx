// "use client";

// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import Link from "next/link";
// import { generateProductSchema } from "@/lib/schema";
// import Breadcrumbs from "../ui/Breadcrumbs";

// export default function ProductTemplate({ product }) {

//   return (
//     <>
//       {/* ================= SCHEMA ================= */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(generateProductSchema(product)),
//         }}
//       />

//       {/* ================= HERO (LIGHT CORPORATE) ================= */}
//       <section className="bg-gradient-to-b from-blue-50 to-white py-10">
//         <Container>
//           <div className="max-w-4xl">
//             <p className="text-[#00A3E0] font-medium uppercase tracking-wide mb-2">
//               Industrial Product
//             </p>

//             <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
//               {product.name}
//             </h1>

//             <p className="text-[var(--heading-text)] mt-3">{product.tagline}</p>
//           </div>
//         </Container>
//       </section>

//       {/* ================= BREADCRUMB ================= */}
//       <section className="bg-white  py-3 text-sm">
//         <Breadcrumbs
//           items={[
//             { label: "Home", href: "/" },
//             { label: "Products", href: "/products" },
//             { label: product.name },
//           ]}
//         />
//       </section>

//       {/* ================= MAIN SECTION ================= */}
//       <section className="py-10">
//         <Container>
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             {/* LEFT → IMAGE */}
//             <div className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden border">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* RIGHT → DETAILS */}
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                 Product Overview
//               </h2>

//               <p className="text-[var(--heading-text)] mb-6 leading-relaxed">
//                 {product.description}
//               </p>

//               {/* SPECIFICATIONS */}
//               <div className="border rounded-lg p-5 mb-6">
//                 <h3 className="font-semibold mb-4 text-gray-900">
//                   Key Specifications
//                 </h3>

//                 <div className="space-y-2 text-sm">
//                   {Object.entries(product.specifications || {}).map(
//                     ([key, value]) => (
//                       <div
//                         key={key}
//                         className="flex justify-between border-b pb-1"
//                       >
//                         <span className="capitalize text-gray-500">{key}</span>
//                         <span className="font-medium text-gray-800">
//                           {value}
//                         </span>
//                       </div>
//                     ),
//                   )}
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="flex gap-4 flex-wrap">
//                 <Link
//                   href="/contact"
//                   className="bg-[#00A3E0] hover:bg-[#008ac0] text-white px-6 py-3 rounded-lg font-medium transition"
//                 >
//                   Request Quote
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
//                 >
//                   Download Datasheet
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* ================= FEATURES ================= */}
//       {product.features?.length > 0 && (
//         <section className="py-10 bg-gray-50">
//           <Container>
//             <h2 className="text-2xl font-semibold mb-8 text-gray-900">
//               Key Features
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               {product.features.map((item, i) => (
//                 <div key={i} className="flex gap-3">
//                   <span className="text-[#00A3E0]">✔</span>
//                   <p className="text-gray-700">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </Container>
//         </section>
//       )}

//       {/* ================= APPLICATIONS ================= */}
//       {product.applications?.length > 0 && (
//         <section className="py-10 bg-white">
//           <Container>
//             <h2 className="text-2xl font-semibold mb-8 text-gray-900">
//               Applications
//             </h2>

//             <div className="grid md:grid-cols-3 gap-6">
//               {product.applications.map((item, i) => (
//                 <div
//                   key={i}
//                   className="p-5 border rounded-lg text-gray-700 hover:shadow-sm transition"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </Container>
//         </section>
//       )}

//       {/* ================= FINAL CTA ================= */}
//       <section className="py-14 bg-gradient-to-r from-blue-50 to-cyan-50 text-center">
//         <Container>
//           <h2 className="text-3xl font-semibold text-gray-900 mb-4">
//             Looking for the right solution?
//           </h2>

//           <p className="text-[var(--heading-text)] mb-6 max-w-2xl mx-auto">
//             Get expert guidance and the best product recommendation for your
//             industrial application.
//           </p>

//           <Link
//             href="/contact"
//             className="inline-block bg-[#00A3E0] hover:bg-[#008ac0] text-white px-7 py-3 rounded-lg font-medium"
//           >
//             Contact Our Experts →
//           </Link>
//         </Container>
//       </section>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { products } from "@/data/products";

//  INLINE SVG ICON SYSTEM  (zero external dependency)

const Icons = {
  CheckCircle: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Zap: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Building: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Shield: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  Award: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="8" r="6" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
      />
    </svg>
  ),
  Globe: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="10" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
      />
    </svg>
  ),
  Users: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Phone: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  Download: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  ),
  Loader: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
      />
    </svg>
  ),
  WhatsApp: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Star: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
};

//  STATIC DATA

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Site Assessment",
    body: "On-site audit — water quality analysis, flow requirements, space constraints, and discharge norms.",
  },
  {
    num: "02",
    title: "Custom Engineering",
    body: "Bespoke solution with P&ID diagrams, 3D models, and a detailed BOQ tailored to your process.",
  },
  {
    num: "03",
    title: "In-House Fabrication",
    body: "MS / SS structures, tanks, and assemblies fabricated in-house under strict quality protocols.",
  },
  {
    num: "04",
    title: "Installation & Commissioning",
    body: "Supervised site installation, system testing, and hands-on operator training.",
  },
  {
    num: "05",
    title: "AMC & O&M Support",
    body: "Annual Maintenance Contracts with 24×7 remote monitoring and performance guarantees.",
  },
];

const TRUST_STATS = [
  { value: "13+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "Pan India", label: "Service Network" },
  { value: "ISO 9001", label: "Quality Certified" },
];

const CERTIFICATIONS = [
  "ISO 9001:2015",
  "CE Certified",
  "BIS Approved",
  "MSME Registered",
];

const TRUST_CARDS = [
  {
    key: "award",
    label: "ISO Certified",
    desc: "International quality standards across all products.",
    Icon: "Award",
  },
  {
    key: "globe",
    label: "Pan India Service",
    desc: "Installation & AMC across every major state.",
    Icon: "Globe",
  },
  {
    key: "users",
    label: "Expert Engineering",
    desc: "50+ engineers with domain-specific expertise.",
    Icon: "Users",
  },
  {
    key: "shield",
    label: "Reliable Support",
    desc: "Dedicated post-installation support team.",
    Icon: "Shield",
  },
];

// ═══════════
//  MAIN EXPORT
// ═══════════
export default function ProductTemplate({ product }) {
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const specEntries = Object.entries(product.specifications ?? {});
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.name },
  ];
  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <>
      {/* 
          HERO
       */}
      <section className="relative overflow-hidden pt-6 pb-16 lg:pb-24 bg-[#0a1628]">
        {/* Background Layers */}
        <div className="absolute inset-0 hero-mesh pointer-events-none" />
        <div className="absolute inset-0 hero-grid pointer-events-none opacity-40" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="py-4 mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product?.name || "Product" },
              ]}
              theme="dark"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="sm:px-12">
              {/* Badge */}
              <div className="hero-badge mb-6 fade-up fade-up-delay-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="pt-mono text-sky-300 text-xs font-medium tracking-widest uppercase">
                  Industrial Grade Product
                </span>
              </div>

              {/* Title */}
              <h1 className="pt-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-4 fade-up fade-up-delay-2">
                {product?.name}
              </h1>

              {/* Tagline */}
              <p className="text-sky-300 font-semibold text-lg mb-5 fade-up fade-up-delay-3">
                {product?.tagline}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg fade-up fade-up-delay-3">
                {product?.description?.slice(0, 180) ||
                  "High-performance industrial solution."}
                …
              </p>

              {/* Features */}
              <div className="flex flex-wrap  gap-2 mb-10 fade-up fade-up-delay-4">
                {(product?.features || []).slice(0, 4).map((f, i) => (
                  <span
                    key={i}
                    className="flex items-center text-baase gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-2 rounded-lg backdrop-blur-sm"
                  >
                    <span className="text-sky-400">✓</span>
                    {typeof f === "string" ? f : f?.title}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 fade-up fade-up-delay-5">
                <Link
                  href="#enquiry"
                  className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-90 transition-all"
                >
                  Request a Quote →
                </Link>

                <button className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition-all">
                  ↓ Download Brochure
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative fade-up fade-up-delay-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <Image
                  src={product?.image}
                  alt={product?.name || "product"}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 z-10 bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                  {Object.values(product?.specifications || {})[0] ||
                    "Industrial Grade"}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="section bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <SectionLabel text="Product Overview" center />

            {/* Heading */}
            <h2
              className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-[var(--color-dark)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineering Solutions{" "}
              <span className="text-[var(--color-primary)]">
                Built for Performance
              </span>
            </h2>

            {/* Divider (premium touch) */}
            <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto mb-6 rounded-full" />

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Supporting Content */}
            <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Designed for demanding industrial environments, our solutions
              ensure consistent performance, reduced operational costs, and
              long-term reliability. Every system is engineered with precision
              to meet global standards while complying with Indian regulatory
              requirements.
            </p>
          </div>
        </Container>
      </section>
      {/*  KEY FEATURES */}
      <section className="section bg-white">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Why Choose This" center />

            <h2
              className="text-3xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Features Designed for{" "}
              <span className="text-[var(--color-primary)]">
                Industrial Excellence
              </span>
            </h2>

            {/* Divider */}
            <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto mt-5 rounded-full" />

            <p className="text-gray-500 mt-5 text-lg">
              Engineered to deliver efficiency, durability, and long-term
              performance across demanding industrial environments.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {(product?.features || []).map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 bg-white"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icons.CheckCircle className="w-5 h-5" />
                </div>

                {/* Content */}
                <div>
                  <p className="text-base font-medium text-gray-800 leading-relaxed">
                    {typeof feat === "string" ? feat : feat?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Bottom CTA (Premium Touch) */}
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
              Looking for a customized solution for your industry?
            </p>
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:opacity-90 transition">
              Get a Free Consultation
            </button>
          </div>
        </Container>
      </section>

      {/* 
          PROCESS — HOW IT WORKS
       */}
      <section className="section bg-white">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <SectionLabel text="Our Engineering Process" center />
              <h2
                className="text-3xl lg:text-4xl font-bold text-[var(--color-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                How It Works
              </h2>
              <p className="text-gray-800 mt-3 max-w-xl mx-auto">
                A proven five-stage workflow — from site survey to lifetime
                support.
              </p>
            </div>
          </Reveal>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block relative">
            <div
              className="absolute top-10 left-[8%] right-[8%] h-px"
              style={{
                background:
                  "linear-gradient(90deg,var(--color-primary),var(--color-secondary))",
              }}
            />
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {PROCESS_STEPS.map((s, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="flex flex-col items-center text-center px-2 group">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-6 border-4 border-white group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg,var(--color-primary),var(--color-accent))",
                      }}
                    >
                      {s.num}
                    </div>
                    <h4 className="font-bold text-sm text-[var(--color-dark)] mb-2">
                      {s.title}
                    </h4>
                    <p className="text-gray-800 text-base leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="flex flex-col gap-0 lg:hidden relative pl-12">
            <div
              className="absolute left-5 top-4 bottom-4 w-px"
              style={{
                background:
                  "linear-gradient(180deg,var(--color-primary),var(--color-secondary))",
              }}
            />
            {PROCESS_STEPS.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 70}
                className="relative pb-10 last:pb-0"
              >
                <div
                  className="absolute -left-[2.8rem] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--color-primary),var(--color-accent))",
                  }}
                >
                  {s.num}
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-[var(--color-dark)] mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 
          TRUST DARK BAND
       */}
      <section
        className="section relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#0a1628 0%,#0f2044 50%,#0a2318 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Container>
          <div className="relative z-10">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-gray-400 mt-3">
                  Proven performance across sectors and geographies.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {TRUST_STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="text-center p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1">
                      {s.value}
                    </div>
                    <div className="text-gray-400 text-xs uppercase tracking-widest">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="flex flex-wrap justify-center gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                    style={{
                      border: "1px solid rgba(141,198,63,0.35)",
                      color: "var(--color-secondary)",
                      background: "rgba(141,198,63,0.08)",
                    }}
                  >
                    <Icons.Star className="w-3.5 h-3.5" />
                    {cert}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 
          RELATED PRODUCTS
       */}
      {related.length > 0 && (
        <section
          className="section"
          style={{ background: "linear-gradient(135deg,#f8fafc,#f0fff4)" }}
        >
          <Container>
            <Reveal>
              <div className="text-center mb-12">
                <SectionLabel text="Explore More" center />
                <h2
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-dark)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Related Products
                </h2>
                <p className="text-gray-800 mt-3 text-base">
                  Complete your system with our full product range.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
              {related.map((rp, i) => (
                <Reveal key={rp.slug} delay={i * 90}>
                  <RelatedCard product={rp} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="text-center mt-10">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:-translate-y-0.5 hover:shadow-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                >
                  View All Products
                  <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      )}
    </>
  );
}

//  HOOK — Scroll-triggered visibility

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

//  ANIMATED WRAPPER

function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useInView();
  const map = {
    up: visible ? "translateY(0)" : "translateY(40px)",
    left: visible ? "translateX(0)" : "translateX(-40px)",
    right: visible ? "translateX(0)" : "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: map[direction] ?? "none",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

//  SECTION LABEL

function SectionLabel({ text, center = false }) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}
    >
      <span className="block h-px w-8 bg-[var(--color-primary)]" />
      <span className="text-xs font-bold tracking-[0.18em] uppercase text-[var(--color-primary)]">
        {text}
      </span>
      {center && <span className="block h-px w-8 bg-[var(--color-primary)]" />}
    </div>
  );
}

//  RELATED PRODUCT CARD

function RelatedCard({ product: rp }) {
  return (
    <Link
      href={`/products/${rp.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden bg-blue-100">
        <Image
          src={rp.image}
          alt={rp.name}
          fill
          className="object-center group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width:640px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-base leading-snug">
            {rp.name}
          </h3>
          <p className="text-white/65 text-base mt-0.5 line-clamp-1">
            {rp.tagline}
          </p>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between bg-blue-100 border-t border-gray-50 mt-auto">
        <span className="text-gray-800 text-base line-clamp-1 flex-1 mr-3">
          {rp.features?.[0] ?? "View Details"}
        </span>
        <span className="flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] whitespace-nowrap group-hover:gap-2 transition-all">
          View Details <Icons.ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
