import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import VisionMission from "@/components/about/VisionMission";
import Leadership from "@/components/about/Leadership";
import Stats from "@/components/about/Stats";
import CTA from "@/components/about/CTA";

import Image from "next/image";
import Link from "next/link";

import { generateSEO } from "@/lib/seo";
import { aboutSchema } from "@/lib/schema";

export const metadata = generateSEO({
  title: "About Us | Hyaline Enviro Engineers",
  description:
    "Learn about Hyaline Enviro Engineers Pvt. Ltd., experts in water treatment, wastewater solutions, and industrial fabrication across India.",
  path: "/about",
});



export default function AboutPage() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
    <main className="bg-white text-gray-800">
      <section className="relative overflow-hidden  bg-[#0e2444] py-8 md:py-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.webp" 
            alt="About Hyaline Enviro Engineers"
            fill
            priority
            className="object-center opacity-20"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/50 via-[#0e2040]/30 to-transparent" />

        {/* Glow Effects */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A3E022 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0066aa18 0%, transparent 50%)",
          }}
        />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ">
          <div className="max-w-3xl sm:px-12">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Engineering Sustainable
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Water & Industrial Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Hyaline Enviro Engineers Pvt. Ltd. is a trusted leader in water
              and wastewater treatment and industrial fabrication. We deliver
              end-to-end engineering solutions — from design and manufacturing
              to installation and commissioning — ensuring efficiency,
              compliance, and long-term sustainability.
            </p>

            {/* Stats */}
            <div className="inline-flex flex-wrap border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <StatBadge value="10+" label="Years Experience" />
              <StatBadge value="100+" label="Projects Delivered" />
              <StatBadge value="Pan India" label="Service Coverage" />
              <StatBadge value="ISO" label="Quality Standards" />
            </div>

            {/* CTA (optional but premium) */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Contact Us
              </a>

              <Link
                href="/services"
                className="border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0e2444] transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CompanyIntro />
      <Stats />
      <CTA />
      <VisionMission />
      <Leadership />
      <AboutHero />
    </main>
    </>
  );
}
function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center px-6 py-4 border-r border-white/10 last:border-r-0">
      <span className="text-2xl font-black text-white leading-none">
        {value}
      </span>
      <span className="text-xs text-white/50 mt-1 font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}