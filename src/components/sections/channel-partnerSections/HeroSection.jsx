"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-10 md:px-18 bg-gradient-to-br from-[#0a0f1e] via-[#112038] to-[#243b55]">
      
      {/* GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ACCENT BAR */}
      <div className="absolute top-0 left-0 w-[4px] h-full bg-[var(--color-accent)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">

          {/* EYEBROW */}
          <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[var(--color-accent)] font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Partnership Programme
          </div>

          {/* HEADING */}
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Grow With Us as a{" "}
            <span className="text-[var(--color-accent)]">
              Channel Partner
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
            Hyaline Enviro Engineering offers qualified industrial partners
            access to our complete portfolio of water treatment systems,
            fabrication solutions, and trading products. With over a decade of
            proven delivery across PAN India, we are looking for serious
            business partners ready to grow in the industrial water and
            fabrication sector.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="#apply"
              className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium shadow hover:bg-[var(--color-primary-hover)] transition"
            >
              Apply for Partnership
            </Link>

            <Link
              href="#what-we-offer"
              className="px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition"
            >
              Explore Offerings
            </Link>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">

            <div>
              <p className="text-white text-xl font-semibold">13+</p>
              <p className="text-white/50 text-base">Years of Experience</p>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            <div>
              <p className="text-white text-xl font-semibold">PAN India</p>
              <p className="text-white/50 text-base">Operations</p>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/20" />

             <div>
              <p className="text-white text-xl font-semibold">400+</p>
              <p className="text-white/50 text-base">Clients Served</p>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            <div>
              <p className="text-white text-xl font-semibold">4</p>
              <p className="text-white/50 text-base">Partner Models</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}