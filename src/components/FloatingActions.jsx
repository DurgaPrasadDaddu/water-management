"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Download, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= LEFT SIDE ================= */}
      <div className="fixed bottom-22 right-6 md:top-1/2 md:left-4 md:-translate-y-1/2 z-[9999] flex flex-col gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919390701234?text=Hello%20Hyaline,%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition"
        >
          <FaWhatsapp size={20} />
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"></span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@hyalineenviro.com"
          className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition"
        >
          <MdEmail size={22} />
        </a>
      </div>

      {/* ================= RIGHT SIDE (BROCHURE) ================= */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-[9999] flex items-center">
        <div className="relative group flex items-center">
          {/* ===== TOOLTIP ===== */}
          <div className="absolute right-full mr-5 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-900/80 via-cyan-600/60 to-blue-900/50 backdrop-blur-xl border border-white/20 text-black text-base shadow-xl whitespace-nowrap">
              📄 Company Profile <br />
              <span className="text-sm text-white">
                Projects • Services • Capabilities
              </span>
            </div>
          </div>

          {/* ===== WATER DROP BUTTON ===== */}
          <a
            href="/brochure/hyaline-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[70px] h-[100px] group cursor-pointer animate-float"
          >
            {/* Drop Shape */}
           <div
            className="
                absolute inset-0
                bg-gradient-to-br from-blue-900/80 via-cyan-600/60 to-blue-400/50
                backdrop-blur-2xl
                border border-white/20
                transition-all duration-300
                group-hover:scale-110
            "
            style={{
                clipPath:
                "path('M35 0 C60 30 70 55 70 70 C70 90 55 100 35 100 C15 100 0 90 0 70 C0 55 10 30 35 0 Z')",
            }}
            />
            {/* Inner Glow */}
            <span className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition"></span>

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-white pt-2">
              <Download
                size={28}
                className="group-hover:-translate-y-1 transition"
              />
            </div>

            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></span>
          </a>
        </div>
      </div>
      {/* ================= SCROLL TO TOP ================= */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-[9999]
            group
            w-14 h-14 md:w-16 md:h-16
            rounded-full
            bg-gradient-to-br from-blue-900/80 via-cyan-600/60 to-blue-700/50
            backdrop-blur-2xl
            border border-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            flex items-center justify-center
            transition-all duration-500 ease-out
            hover:scale-110
            hover:shadow-[0_20px_60px_rgba(0,150,255,0.5)]
            active:scale-95
            overflow-hidden
            "
        >
          {/* Water Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></span>

          {/* Liquid Glow */}
          <span className="absolute inset-0 rounded-full bg-blue-400/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></span>

          {/* Arrow */}
          <ArrowUp
            size={24}
            className="
        relative z-10 text-white
        transition-all duration-300
        group-hover:-translate-y-1
      "
          />

          {/* Subtle rotating ring (water energy feel) */}
          <span className="absolute inset-0 rounded-full border border-cyan-300/20 animate-spin-slow"></span>
        </button>
      )}
    </>
  );
}
