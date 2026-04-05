import Image from "next/image";
import Link from "next/link";

// Optional: Extract this if reused elsewhere
function StatBadge({ value, label }) {
  return (
    <div className="p-4 text-center border-r border-b border-white/10 last:border-r-0">
      <h4 className="text-white font-bold text-lg sm:text-xl">{value}</h4>
      <p className="text-slate-400 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0e2444] py-6 sm:py-8 md:py-10">
    
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* ✅ Mobile Image (LCP Priority) */}
        <Image
          src="/Banners/about-bg-mobile.webp"
          alt="About Hyaline Enviro Engineers"
          fill
          priority
          sizes="(max-width: 768px) 100vw"
          className="object-cover opacity-20 block md:hidden"
        />

        {/* ✅ Desktop Image */}
        <Image
          src="/Banners/about-bg.webp"
          alt="About Hyaline Enviro Engineers"
          fill
          sizes="100vw"
          className="object-cover opacity-20 hidden md:block"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/50 via-[#0e2040]/30 to-transparent" />

      {/* Glow */}
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

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto  px-6  lg:px-8">
        <div className="max-w-3xl md:pl-10 lg:pl-14">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-6 sm:w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6">
            Engineering Sustainable
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Water & Industrial Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mb-8 sm:mb-10">
            Hyaline Enviro Engineers Pvt. Ltd. is a trusted leader in water and
            wastewater treatment and industrial fabrication. We deliver
            end-to-end engineering solutions — from design and manufacturing to
            installation and commissioning — ensuring efficiency, compliance,
            and long-term sustainability.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
            <StatBadge value="13+" label="Years Experience" />
            <StatBadge value="500+" label="Projects Delivered" />
            <StatBadge value="Pan India" label="Service Coverage" />
            <StatBadge value="ISO" label="Quality Standards" />
          </div>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-md text-sm sm:text-base font-medium transition text-center"
            >
              Contact Us
            </Link>

            <Link
              href="/fabrication"
              className="border border-white/20 text-white px-5 py-3 rounded-md text-sm sm:text-base hover:bg-white hover:text-[#0e2444] transition text-center"
            >
              Explore Fabrications
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  );
}
