import Image from "next/image";
import { Droplets, Factory, Settings, Globe, ArrowRight } from "lucide-react";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionHeading from "../../../components/ui/SectionHeading";

export default function AboutSection() {
  const features = [
    {
      icon: <Droplets className="w-6 h-6 text-[color:var(--color-primary)]" />,
      title: "Water Treatment Experts",
      desc: "Advanced MEE, WTP, STP, ETP, UF+RO & ZLD systems",
    },
    {
      icon: <Factory className="w-6 h-6 text-[color:var(--color-secondary)]" />,
      title: "Industrial Fabrication",
      desc: "MS, SS structures & custom equipment",
    },
    {
      icon: <Settings className="w-6 h-6 text-[color:var(--color-dark)]" />,
      title: "End-to-End Solutions",
      desc: "Design to commissioning services",
    },
    {
      icon: <Globe className="w-6 h-6 text-[color:var(--color-primary)]" />,
      title: "Pan India Presence",
      desc: "Serving industries across India",
    },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <SectionHeading
          preTitle="Welcome to"
          highlight="HYALINE ENVIRO ENGINEERS"
          title={
            <>
              Engineering Sustainable Water <br />& Wastewater Solutions
            </>
          }
          description={`Hyaline Enviro Engineers Pvt. Ltd. delivers advanced water and 
          wastewater treatment solutions along with industrial fabrication 
          services. We provide complete end-to-end engineering solutions 
          from design to commissioning.`}
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/hyaline-home-about.webp"
                alt="Water Treatment Plant"
                width={550}
                height={414}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -top-6 -left-3 lg:-left-5 bg-white/80 backdrop-blur-lg p-4 lg:p-6 rounded-2xl shadow-xl border border-white/50">
              <p className="text-xl text-center font-bold text-[color:var(--color-primary)]">
                30+
              </p>
              <p className="text-sm text-[color:var(--color-text)]">
                Industrial Sectors
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-2xl font-bold text-[color:var(--color-dark)] mb-6">
              Delivering Innovative Engineering & Environmental Solutions
            </h3>

            <p className="text-[color:var(--color-dark)] text-base sm:text-lg mb-8 leading-relaxed">
              Our expertise spans across MEE, STP, ETP, UF+RO, ZLD, WTP, and ATFD
              systems. With a skilled team of engineers and fabricators, we
              ensure precision, quality, and long-term reliability.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    p-5 rounded-2xl
                    bg-white/80 backdrop-blur-md
                    border border-gray-100
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h4 className="font-semibold text-[color:var(--color-dark)]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-base text-[color:var(--color-text)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/about"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-xl
                  bg-[var(--color-primary)] text-white 
                  hover:bg-[var(--color-primary-hover)] font-medium
                  shadow-lg
                  hover:shadow-xl
                  transition duration-300
                "
              >
                Discover More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
