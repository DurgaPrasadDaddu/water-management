// app/market-segments/[segment]/[slug]/loading.jsx

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-white">
      
      <div className="flex flex-col items-center gap-5">
        
        {/* LOGO */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-blue-200 opacity-40 animate-pulse"></div>

          <Image
            src="/logo.webp"
            alt="Logo"
            width={70}
            height={70}
            className="relative z-10"
          />
        </div>

        {/* SPINNER */}
        <div className="relative">
          <div className="h-10 w-10 rounded-full border-4 border-[#0147AD]/20"></div>
          <div className="absolute inset-0 h-10 w-10 rounded-full border-4 border-[#0147AD] border-t-transparent animate-spin"></div>
        </div>

        <p className="text-sm text-gray-500">
          Loading details...
        </p>
      </div>

    </div>
  );
}