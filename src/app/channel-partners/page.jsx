// app/channel-partners/page.jsx

import ApplicationForm from "@/components/sections/channel-partnerSections/ApplicationForm";
import FinalCTA from "@/components/sections/channel-partnerSections/FinalCTA";
import HeroSection from "@/components/sections/channel-partnerSections/HeroSection";
import PartnershipModels from "@/components/sections/channel-partnerSections/PartnershipModels";
import WhatWeOffer from "@/components/sections/channel-partnerSections/WhatWeOffer";
import WhoShouldApply from "@/components/sections/channel-partnerSections/WhoShouldApply";
import WhyPartner from "@/components/sections/channel-partnerSections/WhyPartner";


export const metadata = {
  title: "Channel Partners | Hyaline Enviro Engineering",
  description:
    "Join Hyaline Enviro Engineering's Channel Partner Program. Distribute water treatment systems, fabrication solutions, and industrial products across India.",
};

export default function ChannelPartnersPage() {
  return (
    <main className="channel-partners-page">
      <HeroSection />
      <WhatWeOffer />
      <WhyPartner />
      <WhoShouldApply />
      <PartnershipModels />
      <ApplicationForm/>
      <FinalCTA/>
    </main>
  );
}