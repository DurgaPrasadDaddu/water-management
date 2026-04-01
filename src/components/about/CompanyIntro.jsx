"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

export default function AboutHero() {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-15 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          {/* Wrapper (Fix for perfect badge alignment) */}
          <div className="relative w-full max-w-lg">
            {/* Image Card */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/hyaline-home-about.webp"
                alt="Engineering Team"
                width={500}
                height={350}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105 will-change-transform"
              />
            </div>

            {/* Floating Badge (Centered Always) */}
            <div
              className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 
              bg-white rounded-full 
              w-20 h-20 sm:w-24 sm:h-24 
              flex items-center justify-center 
              shadow-[0_10px_30px_rgba(0,0,0,0.15)] border"
            >
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-gray-500">Since</p>
                <p className="font-bold text-base sm:text-lg text-[var(--heading-title)]">
                  2013
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[var(--heading-title)] leading-tight">
            Engineering Excellence <br />
            in Water Solutions
          </h1>

          {/* Description */}
          <p className="text-[var(--heading-text)] leading-relaxed max-w-lg">
            At Hyaline Enviro Engineers, we don’t just build solutions —we
            engineer progress. With over a decade of expertise, we have been a
            trusted partner in delivering high-quality, sustainable, and
            cost-effective engineering solutions. Our core expertise spans
            wastewater management, water treatment plants, heavy engineering and
            fabrication, and solar energy solutions, making us a reliable
            one-stop solution for diverse industrial and infrastructure needs.
          </p>
          <p className="text-[var(--heading-text)] leading-relaxed max-w-lg">
            As an ISO 9001:2008 and CE-certified company, we are driven by
            innovation, precision, and environmental responsibility. By
            integrating cutting-edge technology, expert craftsmanship, robust
            fabrication capabilities, and customer centric services, we ensure
            that every project contributes to a cleaner, more efficient, and
            technologically advanced Futur
          </p>
        </motion.div>
      </div>
      {/* BOTTOM CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-16 md:mt-20 grid md:grid-cols-3 gap-8"
      >
        {/* Equipment Supply */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-3">
            Equipment Manufacturing & Supply
          </h3>
          <p className="text-[var(--heading-text)]  leading-relaxed">
            Hyaline Enviro Engineers Pvt. Ltd. has strong in-house capabilities
            for manufacturing and supplying key equipment required for water and
            wastewater treatment plants, including tanks, structures, and
            process components with high precision and quality standards.
          </p>
        </div>

        {/* O&M */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-3">
            Operation & Maintenance
          </h3>
          <p className="text-[var(--heading-text)]  leading-relaxed">
            We provide complete Operation & Maintenance (O&M) services for
            treatment plants, ensuring smooth performance and efficiency. Our
            services include skilled manpower support, routine maintenance,
            system monitoring, and performance optimization for long-term
            reliability.
          </p>
        </div>

        {/* Global Presence */}
        <div className="bg-transparent p-6 rounded-xl shadow-md hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-3">
            Pan India & Global Reach
          </h3>
          <p className="text-[var(--heading-text)] leading-relaxed">
            We deliver our engineering solutions across India, serving diverse
            industries and infrastructure projects. With growing global
            outreach, we aim to expand our presence internationally while
            maintaining high-quality standards and reliable project execution.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
