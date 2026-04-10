import dynamic from "next/dynamic"
import Hero from "@/components/sections/HomePageSections/Hero/Hero"
import AboutSection from "@/components/sections/HomePageSections/AboutSection"
import ServicesSection from "@/components/sections/HomePageSections/ServicesSection"
import MarketSegmentSection from "@/components/sections/HomePageSections/MarketSegmentSection"
import ClientsCarousel from "@/components/sections/HomePageSections/ClientsCarousel"
import ChannelPartnerSection from "@/components/sections/HomePageSections/ChannelPartnerSection"

const FabricationSection = dynamic(() => import("@/components/sections/HomePageSections/FabricationSection"))
const ProductsSection = dynamic(() => import("@/components/sections/HomePageSections/ProductsSection"))
const SolutionsSection = dynamic(() => import("@/components/sections/HomePageSections/SolutionsSection"))

// const ProjectsSection = dynamic(() => import("@/components/home/ProjectsSection"))


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <SolutionsSection/>
      <FabricationSection/>
      <ProductsSection/>
      <ServicesSection/>
      <MarketSegmentSection/>
      <ChannelPartnerSection/>
      <ClientsCarousel/>
      {/* <ProjectsSection/> */}
    </div>
  )
}

export default Home
