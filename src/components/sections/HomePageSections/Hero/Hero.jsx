import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WaterDropsAnimation from "./WaterDropsAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/sewage-treatment-plant-hero-bg.webp"
          alt="Industrial Water Wastewater Treatment Plant"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 py-5 lg:px-8  w-full">
        <div className="grid grid-cols-12 gap-6 sm:gap-6 md:gap-10 items-center sm:pl-16 md:pl-15">

          
          <div className="col-span-12 lg:col-span-8 text-white text-center md:text-left">
            
            <p className="text-cyan-300 uppercase text-sm mb-4">
              Pioneers in Water Treatment & Engineering Solutions
            </p>

            <h1 className="
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-[5rem] 
              xl:text-[4.5rem]
              font-semibold 
              leading-[1.5] 
              mb-4 sm:mb-6
            ">
              Industrial
              <span className="block text-cyan-300 sm:mt-3">
                Water & Wastewater Treatment
              </span>
              <span className="block text-gray-200 sm:mt-3 ">
                Engineering Experts
              </span>
            </h1>

            <p className="mb-8 max-w-2xl">
              Hyaline Enviro Engineers Pvt. Ltd. delivers reliable water and wastewater solutions...
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="/solutions">
                <Button>Explore Solutions</Button>
              </Link>

              <Link href="/contact">
                <Button variant="secondary">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* WATER DROPS (animated) */}
          <WaterDropsAnimation />

        </div>
      </div>
    </section>
  );
}