import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* LOGO */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-blue-200 opacity-40 animate-pulse"></div>
          
          <Image
            src="/logo.webp" 
            alt="Logo"
            width={80}
            height={80}
            priority
            className="relative z-10 object-contain"
          />
        </div>

        {/* SPINNER */}
        <div className="relative flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-4 border-[#0147AD]/20"></div>
          <div className="absolute h-10 w-10 rounded-full border-4 border-[#0147AD] border-t-transparent animate-spin"></div>
        </div>

        {/* LOADING TEXT */}
        <p className="text-sm text-gray-500 tracking-wide">
          Loading, please wait...
        </p>

      </div>
    </div>
  );
}