import Image from "next/image";
import SectionWrapper from "../../ui/SectionWrapper";
import AnimatedWrapper from "../../ui/AnimatedWrapper";

export default function CompanyIntro() {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-15 items-center">

        {/* LEFT IMAGE */}
        <AnimatedWrapper direction="left">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about/about.jpg"
                  alt="Engineering Team"
                  width={500}
                  height={350}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 
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
          </div>
        </AnimatedWrapper>

        {/* RIGHT CONTENT */}
        <AnimatedWrapper direction="right">
          <div className="space-y-6">

            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[var(--heading-title)] leading-tight">
              Engineering Excellence <br />
              in Water Solutions
            </h2>

            <p className="text-[var(--heading-text)] leading-relaxed max-w-lg">
              At Hyaline Enviro Engineers, we don’t just build solutions — we
              engineer progress. With over a decade of expertise, we have been a
              trusted partner in delivering high-quality, sustainable, and
              cost-effective engineering solutions.
            </p>

            <p className="text-[var(--heading-text)] leading-relaxed max-w-lg">
              As an ISO 9001:2008 and CE-certified company, we are driven by
              innovation, precision, and environmental responsibility, ensuring
              every project contributes to a cleaner and more efficient future.
            </p>

          </div>
        </AnimatedWrapper>

      </div>

      {/* BOTTOM CARDS */}
      <AnimatedWrapper direction="up" delay={0.2}>
        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-3">
              Equipment Manufacturing & Supply
            </h3>
            <p className="text-[var(--heading-text)] leading-relaxed">
              Strong in-house capabilities for manufacturing tanks, structures,
              and process components with precision and quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-3">
              Operation & Maintenance
            </h3>
            <p className="text-[var(--heading-text)] leading-relaxed">
              Complete O&M services including manpower, monitoring, and system
              optimization for long-term performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[var(--heading-title)] mb-3">
              Pan India & Global Reach
            </h3>
            <p className="text-[var(--heading-text)] leading-relaxed">
              Delivering solutions across India with expanding global presence
              and consistent quality standards.
            </p>
          </div>

        </div>
      </AnimatedWrapper>
    </SectionWrapper>
  );
}