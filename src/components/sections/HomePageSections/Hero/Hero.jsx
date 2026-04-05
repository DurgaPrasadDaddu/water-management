import Image from "next/image";
import Link from "next/link";
// import dynamic from "next/dynamic";
import HeroClient from "./HeroClient";
// const HeroClient = dynamic(() => import("./HeroClient"));

const stats = [
  {
    value: "500+",
    label: ["Projects", "Completed"],
  },
  {
    value: "13+",
    label: ["Years", "Experience"],
  },
  {
    value: "50+",
    label: ["Industrial", "Clients"],
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-dvh md:min-h-[73vh]  flex items-center lg:pl-[100px]">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/Banners/sewage-treatment-plant-hero-mobile.webp"
          alt="Water treatment plant"
          fill
          priority
          sizes="(max-width: 768px) 100vw"
          className="object-cover object-center block md:hidden"
        />

        <Image
          src="/Banners/sewage-treatment-plant-hero-bg.webp"
          alt="Water treatment plant"
          width={1920}
          height={900}
          sizes="100vw"
          className="hidden md:block w-full h-auto object-cover object-[center_35%]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-transparent md:bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-5 sm:py-3">
        <div className="grid grid-cols-12 items-center gap-y-10">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* Tag */}
            <p className="text-cyan-400 font-semibold text-xs tracking-[0.25em] uppercase">
              Pioneers in Water Treatment & Engineering
            </p>

            {/* Heading */}
            <h1 className="font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                Industrial
              </span>

              <span className="block text-cyan-400 text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] mt-1">
                Water & Wastewater Treatment
              </span>

              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-1">
                Engineering Experts
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hyaline Enviro Engineers Pvt. Ltd. delivers reliable{" "}
              <span className="text-slate-200 font-semibold">
                water and wastewater solutions
              </span>{" "}
              for residential and commercial applications, specialising in STP,
              ETP, RO Plants, ZLD & industrial fabrication works across India.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
              <Link
                href="/solutions"
                className="px-7 py-3 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition"
              >
                Explore Solutions
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3 text-sm font-semibold text-white border border-white/40 rounded-md hover:bg-white/10 hover:text-cyan-400 transition"
              >
                Request Consultation
              </Link>
            </div>
            <div className="md:hidden mt-6 px-4">
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto text-center">
                {/* Item */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-4 text-center shadow-lg hover:scale-105 transition">
                  <p className="text-xl font-semibold text-cyan-400">500+</p>
                  <p className="text-xs text-slate-300 leading-tight">
                    Projects <br /> Completed
                  </p>
                </div>

                {/* Item */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-4 text-center shadow-lg hover:scale-105 transition">
                  <p className="text-xl font-semibold text-cyan-400">13+</p>
                  <p className="text-xs text-slate-300 leading-tight">
                    Years <br /> Experience
                  </p>
                </div>

                {/* Item */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-4 text-center shadow-lg hover:scale-105 transition">
                  <p className="text-xl font-semibold text-cyan-400">50+</p>
                  <p className="text-xs text-slate-300 leading-tight">
                    Industrial <br /> Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-center pb-5">
            <div className="hidden md:block">
              <HeroClient />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
