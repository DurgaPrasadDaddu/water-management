import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/data/solutions";
import Container from "@/components/ui/Container";
import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";

export default function SolutionsSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
         variant="product"
          tag="Hyaline Engineering Solutions"
          title={
            <>
              Complete Water & Wastewater <br />
              Treatment Solutions
            </>
          }
          description={`Hyaline Enviro Engineers provides end-to-end engineering solutions
          combining advanced water treatment technologies with industrial
          fabrication and turnkey project execution. From design to
          commissioning, we deliver reliable and sustainable solutions
          tailored for industrial applications.`}
        />

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {solutions.map((item) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-gray-100 shadow-lg hover:shadow-2xl transition duration-300">
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.hero?.image || "/images/placeholder.jpg"}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition duration-500"
                  />

                  {/* OVERLAY */}
                  {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div> */}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[var(--heading-title)]">
                    {item.name}
                  </h3>

                  <p className="text-[var(--heading-text)] text-sm leading-relaxed mb-4">
                    {item.seo.description}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-[#00A3E0] font-medium">
                    Explore Solution
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
