import dynamic from "next/dynamic"
import Hero from "@/components/sections/HomePageSections/Hero/Hero"
import AboutSection from "@/components/sections/HomePageSections/AboutSection"
const FabricationSection = dynamic(() => import("@/components/home/FabricationSection"))
const ProductsSection = dynamic(() => import("@/components/home/ProductsSection"))
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"))
const SolutionsSection = dynamic(() => import("@/components/home/SolutionsSection"))
const MarketSegmentSection = dynamic(() => import("@/components/home/MarketSegmentSection"))
const ProjectsSection = dynamic(() => import("@/components/home/ProjectsSection"))


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <FabricationSection/>
      <ProductsSection/>
      <ServicesSection/>
       <SolutionsSection/>
      <MarketSegmentSection/>
      <ProjectsSection/>
    </div>
  )
}

export default Home
