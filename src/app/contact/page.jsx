import Image from "next/image";
import ContactForm from "./ContactForm";

const SERVICES = [
  "Effluent Treatment Plant (ETP)",
  "Sewage Treatment Plant (STP)",
  "Water Treatment Plant (WTP)",
  "Zero Liquid Discharge (ZLD)",
  "Reverse Osmosis Systems",
  "Industrial Wastewater Management",
  "Operation & Maintenance Services",
  "Consultancy & Design",
  "Other / Custom Requirement",
];

function ContactCard({ type, icon, address, phones, email, gradient }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${gradient}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        <svg
          viewBox="0 0 96 96"
          fill="currentColor"
          className="text-white w-full h-full"
        >
          <circle cx="96" cy="0" r="80" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {icon}
          </div>
          <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
            {type}
          </span>
        </div>
        <div className="flex gap-3 mb-5">
          <svg
            className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-white/90 text-sm leading-relaxed">{address}</p>
        </div>
        <div className="flex gap-3 mb-3">
          <svg
            className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="flex flex-col gap-1">
            {phones.map((p, i) => (
              <a
                key={i}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="text-white font-medium text-sm hover:text-cyan-200 transition-colors duration-200"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <svg
            className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href={`mailto:${email}`}
            className="text-white font-medium text-sm hover:text-cyan-200 transition-colors duration-200 break-all"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}

function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center px-6 py-4 border-r border-white/10 last:border-r-0">
      <span className="text-2xl font-black text-white leading-none">
        {value}
      </span>
      <span className="text-xs text-white/60 mt-1 font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="md:min-h-screen min-h-dvh bg-slate-50">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2444] py-15 md:py-18 lg:pl-20">
        {/*Background Image */}
        <div className="absolute inset-0">
          {/* Mobile Image (LCP target) */}
          <Image
            src="/Banners/contact-bg-mobile.webp"
            alt="Contact Background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 block md:hidden"
          />

          {/* Desktop Image */}
          <Image
            src="/Banners/contact-bg-desktop.webp"
            alt="Contcct Background"
            fill
            sizes="100vw"
            className="object-cover opacity-20 hidden md:block"
          />
        </div>

        {/*Dark Gradient Overlay (keep this strong) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/40 via-[#0e2040]/20 to-transparent" />

        {/* Glow Effects */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A3E022 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0066aa18 0%, transparent 50%)",
          }}
        />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Let&apos;s Discuss
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Your Project
              </span>
            </h1>

            <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              From feasibility studies to full-scale plant installation — our
              engineers are ready to deliver precision water treatment solutions
              for your facility.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <StatBadge value="13+" label="Years Exp." />
              <StatBadge value="500+" label="Projects" />
              <StatBadge value="ISO" label="Certified" />
              <StatBadge value="24/7" label="Support" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ── CONTACT FORM ── */}

          <div className="lg:col-span-3">
            <ContactForm SERVICES={SERVICES} />
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-slate-900 text-sm mb-1">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    For urgent project discussions or on-site emergencies, reach
                    us directly.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+917981123366"
                      className="flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 text-[#00A3E0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/917981123366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#22c05e] rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:shadow-md hover:shadow-green-200"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Office Card */}
            <ContactCard
              type="Corporate Office"
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              address="Plot no: 61, Jayaram Bhavan, Ground Floor, Road no: 1, Green Park Avenue, Behind Chennai Shopping Mall, Suchitra Circle, Hyderabad – 500067"
              phones={["+91 7981123366"]}
              email="info@hyalineenviro.com"
              gradient="bg-gradient-to-br from-[#0a1e3c] to-[#0e2d5a]"
            />

            {/* Factory Card */}
            <ContactCard
              type="Factory & Works"
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              }
              address="Survey No: 737/2, Near MSR Convention Garden, Devar Yamjal (V), Shamirpet Mandal, Medchal-Malkajgiri District, Telangana – 500078"
              phones={["+91 7207425404"]}
              email="sales@hyalineenviro.com"
              gradient="bg-gradient-to-br from-[#0f3460] to-[#16213e]"
            />
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ──────────────────────────────────────── */}
      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-8 py-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Our Location
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Suchitra Circle, Hyderabad, Telangana
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Suchitra+Circle+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg w-fit"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Maps
            </a>
          </div>
          <div className="relative h-80 md:h-96 bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30440.332549674757!2d78.476794!3d17.505529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9beb1fd6bf87%3A0x909e3d9b5fad41e9!2sHYALINE%20ENVIRO%20ENGINEERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1695463779641!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA BANNER ────────────────────────────────── */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                Ready to Start Your Water Treatment Project?
              </h2>
              <p className="text-slate-400 mt-2 text-sm">
                Trusted by industries across Telangana &amp; Andhra Pradesh.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:+917981123366"
                className="inline-flex items-center gap-2.5 bg-[#00A3E0] hover:bg-[#0091c7] text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-200 hover:shadow-lg hover:shadow-cyan-900/40 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
              <a
                href="mailto:sales@hyalineenviro.com"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
