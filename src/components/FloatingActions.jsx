"use client";

import { useEffect, useState } from "react";
import { Download, ArrowUp, MailIcon } from "lucide-react";
import Image from "next/image";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= LEFT SIDE ================= */}
      <div className="fixed md:left-4 md:top-1/2 md:-translate-y-1/2 bottom-42 right-4 z-[40] pointer-events-none">
        <div className="flex flex-col gap-4 w-fit h-fit pointer-events-auto">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/919553753337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className="w-12 h-12"
            />
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@hyalineenviro.com"
            aria-label="Send email to Hyaline Enviro Engineers"
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition"
          >
            <MailIcon size={22} />
          </a>

        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-[40] pointer-events-none">
        
        <div className="relative w-[70px] h-[100px] pointer-events-auto group">
          
          {/* Tooltip */}
          <div className="absolute right-full mr-5 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 pointer-events-none">
            <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-900/80 via-cyan-600/60 to-blue-900/50 backdrop-blur-xl border border-white/20 text-black text-base shadow-xl whitespace-nowrap">
              📄 Company Profile <br />
              <span className="text-sm text-white">
                Projects • Services • Capabilities
              </span>
            </div>
          </div>

          {/* Button */}
          <a
            href="/Brochure/hyaline-catalouge.pdf"
            download
            rel="noopener noreferrer"
            aria-label="Download Hyaline Catalogue"
            className="absolute inset-0 cursor-pointer"
          >
            {/* Shape */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-600/60 to-blue-400/50 backdrop-blur-2xl border border-white/20 transition group-hover:scale-110 pointer-events-none"
              style={{
                clipPath:
                  "path('M35 0 C60 30 70 55 70 70 C70 90 55 100 35 100 C15 100 0 90 0 70 C0 55 10 30 35 0 Z')",
              }}
            />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-white pt-2 pointer-events-none">
              <Download size={28} />
            </div>

            {/* Ripple */}
            <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping pointer-events-none"></span>
          </a>

        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      {showScroll && (
        <div className="fixed bottom-25 right-3 z-[40] pointer-events-none">
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-900/80 via-cyan-600/60 to-blue-700/50 backdrop-blur-2xl border border-white/20 shadow-xl flex items-center justify-center hover:scale-110 transition"
          >
            <ArrowUp size={24} className="text-white" />

            <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping pointer-events-none"></span>
          </button>

        </div>
      )}
    </>
  );
}