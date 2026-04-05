"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import services from "@/data/services";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";
import Container from "../../ui/Container";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  // 🔥 Laptop movement logic
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const translateY = useRef(0);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    const container = containerRef.current;
    const card = cardRef.current;

    // 👉 Apply ONLY on lg screens
    if (
      typeof window !== "undefined" &&
      window.innerWidth >= 1024 &&
      el &&
      container &&
      card
    ) {
      const itemTop = el.offsetTop;
      const containerHeight = container.offsetHeight;
      const cardHeight = card.offsetHeight;

      const maxTranslate = containerHeight - cardHeight;
      const safeTop = Math.min(itemTop, maxTranslate);

      translateY.current = safeTop < 0 ? 0 : safeTop;

      card.style.transform = `translateY(${translateY.current}px)`;
    }
  }, [activeIndex]);

  return (
    <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white ">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] right-[-150px] w-[450px] h-[450px] bg-[#00A3E0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-120px] w-[400px] h-[400px] bg-[#8DC63F]/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          variant="product"
          tag="Our Capabilities"
          title={
            <>
              Premium Water & Wastewater <br />
              Engineering Services
            </>
          }
          description="We deliver end-to-end engineering and O&M solutions — from design and fabrication to optimization and compliance — ensuring sustainability and long-term reliability for industrial and municipal systems."
        />

        {/* ================= DESKTOP / LAPTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start relative mt-16">
          {/* LEFT PANEL */}
          <div className="space-y-5">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.slug}
                  ref={(el) => (itemRefs.current[index] = el)} // 👈 IMPORTANT
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group relative rounded-xl border cursor-pointer overflow-hidden transition-all
                    duration-500 p-6
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#00A3E0] via-[#0096C8] to-[#8DC63F] text-white shadow-xl"
                        : "bg-white hover:bg-[#F3F4F6] border-gray-200"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-lg font-semibold ${
                        isActive ? "text-white/90" : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold ${
                          isActive ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {service.shortTitle}
                      </h3>
                      <p
                        className={`text-sm mt-2 ${
                          isActive ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    <span
                      className={`transition-transform ${
                        isActive
                          ? "translate-x-2 opacity-80"
                          : "opacity-0 group-hover:opacity-100 group-hover:translate-x-2 text-gray-400"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#8DC63F] to-[#00A3E0] animate-[pulse_2s_ease-in-out_infinite]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT PANEL (MOVING CARD) */}
          <div ref={containerRef} className="relative h-full w-full">
            <div
              ref={cardRef}
              className="absolute w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            >
              <div className="relative h-[460px] w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10 text-white">
                  <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-lg line-clamp-2">
                    {active.overview}
                  </p>

                  <Link
                    href={`/services/${active.slug}`}
                    className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-[#00A3E0] transition-all"
                  >
                    Explore Service <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.slug}>
                <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bluek/80  via-black/40 to-transparent" />
                  <div className="absolute bottom-0 z-10 p-6 text-white">
                    <h3 className="text-lg font-semibold">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-white/80 mt-2 line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-[#00A3E0] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md text-sm hover:bg-white transition"
                    >
                      Explore <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </SectionWrapper>
  );
}
