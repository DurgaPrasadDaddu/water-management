import { AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function Banner({ title, description, image, alt }) {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[320px] overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[60%] bg-[#0A2540] text-white flex items-center">
        <div className="px-6 sm:px-20 py-10 md:py-0 max-w-xl">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-4 md:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full md:w-[40%] h-[200px] sm:h-[250px] md:h-full">
        <Image src={image} alt={alt} fill className="object-cover" priority />
      </div>
    </section>
  );
}
