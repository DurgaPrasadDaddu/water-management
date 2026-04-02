import AboutHero from "@/components/sections/AboutPageSections/AboutHero";
import CompanyIntro from "@/components/sections/AboutPageSections/CompanyIntro";
import CTASection from "@/components/sections/AboutPageSections/CTASection";
import ImpactStatsSection from "@/components/sections/AboutPageSections/ImpactStatsSection";
import LeadershipSection from "@/components/sections/AboutPageSections/LeadershipSection";
import OurValuesSection from "@/components/sections/AboutPageSections/OurValuesSection";
import VideoSection from "@/components/sections/AboutPageSections/VideoSection";
import { aboutSchema } from "@/lib/schema";

export default function AboutClient() {
  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <main className="bg-white text-gray-800">
        <AboutHero/>
        <CompanyIntro />
        <ImpactStatsSection/>
        <CTASection/>
        <OurValuesSection />
        <LeadershipSection />
        <VideoSection/>
      </main>
    </>
  );
}

/* ================= STAT BADGE ================= */
function StatBadge({ value, label }) {
  return (
    <div className="
      flex flex-col items-center justify-center
      px-3 py-4 sm:px-6
      text-center
      
      /* Mobile: card style */
      bg-white/5 rounded-xl
      
      /* Desktop: remove card look */
      md:bg-transparent md:rounded-none
      
      /* Borders only for desktop */
      md:border-r md:border-white/10 last:border-r-0
    ">
      <span className="
        text-base sm:text-lg md:text-2xl 
        font-black text-white leading-none
      ">
        {value}
      </span>

      <span className="
        text-[10px] sm:text-xs 
        text-white/60 
        mt-1 
        font-medium 
        tracking-wide 
        uppercase
      ">
        {label}
      </span>
    </div>
  );
}