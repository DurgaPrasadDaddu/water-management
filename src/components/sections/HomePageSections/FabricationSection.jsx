"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { fabricationData } from "@/data/fabrication";

export default function FabricationSection() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= CURVED BACKGROUND ================= */}
      <div className="relative pt-16 pb-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Banners/fabrications.webp"
            alt="Fabrication Background"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />

        {/* Curve Shape */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[100%]" />

        <Container className="relative z-10">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-12">
            <p className="text-white text-sm sm:text-base font-semibold tracking-wide">
              Industrial Fabrication Expertise
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-white leading-tight">
              Customized Industrial Fabrication Systems
            </h2>

            <p className="text-white text-lg sm:text-xl mt-6 max-w-3xl sm:max-w-5xl mx-auto leading-relaxed">
              We specialize in precision-engineered fabrication including MS &
              SS structures, process tanks, equipment skids, and industrial
              components. Every solution is customized to meet your operational
              requirements, ensuring durability, safety, and long-term
              reliability.
            </p>
          </div>
        </Container>
      </div>

      {/* ================= CONTENT ================= */}
      <Container className="relative z-20 -mt-38">
        {/* ================= CAROUSEL ================= */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          loopAdditionalSlides={3}
          speed={1500} // smooth motion
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 1000, //  (continuous scroll)
            disableOnInteraction: false,
          }}
          allowTouchMove={false} // optional (for auto-only feel)
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {fabricationData.map((item) => (
            <SwiperSlide key={item.slug}>
              <Link href={`/fabrication/${item.slug}`}>
                {/* ================= CARD ================= */}
                <div
                  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  className="group bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl border border-gray-400 shadow-sm hover:shadow-2xl transition-all duration-300 p-5 min-h-[250px] flex gap-4 relative overflow-hidden hover:-translate-y-1"
                >
                  {/* 🔷 LEFT ACCENT LINE */}
                  {/* <div className="absolute left-0 top-0 h-full w-1 bg-[#00A3E0]" /> */}

                  {/* IMAGE */}
                  <div className="relative w-28 h-36 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="112px"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-2 leading-snug group-hover:text-[#00A3E0] transition">
                        {item.title}
                      </h3>

                      {/* 🔥 INDUSTRIAL CONTENT */}
                      <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <span className="text-[#00A3E0] text-sm font-semibold mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore Solution →
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= BOTTOM TEXT ================= */}
        <div
          className="text-center m-12 text-base sm:text-lg
          text-[color:var(--color-dark)]
          leading-[1.8] max-w-2xl mx-auto"
        >
          We specialize in customized MS & SS fabrication including tanks,
          structures, platforms, piping supports, and process equipment designed
          to meet industry-specific operational requirements with precision and
          reliability.
        </div>
      </Container>
    </section>
  );
}
