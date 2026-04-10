"use client";

import Link from "next/link";

const trustPoints = [
  "In-house engineering team",
  "ISO-compliant fabrication",
  "PAN India service network",
  "Responsive partner support",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-10 md:py-18 bg-gradient-to-br from-[#0a0f1e] via-[#112038] to-[#1a3154] text-white">

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">

        {/* EYEBROW */}
        <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
          Ready to Begin?
        </p>

        {/* HEADLINE */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
          Start Your Partnership Journey Today
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
          Join a growing network of industrial partners across India backed by a
          company that delivers on its commitments — technically, commercially,
          and operationally.
        </p>

        {/* TRUST POINTS */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-white/70">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] text-xs">✓</span>
              {point}
            </li>
          ))}
        </ul>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="mailto:info@hyalineenviro.in"
            className="px-6 py-3 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition font-medium shadow-lg"
          >
            Email Our Team
          </a>

        </div>

        {/* DISCLAIMER */}
        <p className="text-base text-white/40">
          Applications reviewed within 2 business days. No upfront commitment required.
        </p>

      </div>
    </section>
  );
}