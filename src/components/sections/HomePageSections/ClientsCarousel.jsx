"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";
import Container from "../../ui/Container";

export default function ClientsCarousel() {
  const clients = [
    { name: "Pharmaceutical Plants", image: "/Images/clients/pharma.png" },
    { name: "Chemical Manufacturing Units", image: "/Images/clients/chemical.png" },
    { name: "Food & Beverage Industries", image: "/Images/clients/food.png" },
    { name: "Textile Processing Units", image: "/Images/clients/textile.png" },
    { name: "Power Generation Plants", image: "/Images/clients/power.png" },
    { name: "Electronics & Semiconductor", image: "/Images/clients/electronics.png" },
    { name: "Automobile Industries", image: "/Images/clients/automobile.png" },
    { name: "Steel & Metal Industries", image: "/Images/clients/steel.png" },
  ];

  const duplicated = [...clients, ...clients];

  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrame;

    const move = () => {
      setOffset((prev) => {
        const trackWidth = trackRef.current.scrollWidth / 2;
        return prev >= trackWidth ? 0 : prev + 0.6;
      });

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <SectionWrapper className="bg-white relative overflow-hidden">
      <Container>
        {/* 🔥 Heading (SEO + Marketing optimized) */}
        <SectionHeading
          tag="Our Clients & Projects"
          title={
            <>
              Trusted by Leading <br />
              <span className="text-[#00A3E0]">Industrial Clients</span>
            </>
          }
          description={`Hyaline Enviro Engineers has successfully delivered water treatment and environmental engineering solutions across diverse industries including pharmaceuticals, chemicals, power plants, and manufacturing sectors. Our proven expertise ensures reliability, compliance, and long-term performance.`}
        />

        {/* 🔥 Carousel */}
        <div
          className="mt-14 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-14"
            style={{
              transform: `translateX(-${offset}px)`,
              willChange: "transform",
            }}
          >
            {duplicated.map((client, index) => (
              <div
                key={index}
                className="shrink-0 flex flex-col items-center group"
              >
                {/* Logo / Image */}
                <div className="w-[140px] h-[80px] flex items-center justify-center bg-white border border-gray-100 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                  />
                </div>

                {/* Label */}
                <p className="text-xs text-gray-500 mt-3 text-center max-w-[140px]">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Bottom Trust Line */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Successfully serving <span className="text-[#00A3E0] font-semibold">50+ industrial clients</span> across India with reliable and scalable water treatment solutions.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}