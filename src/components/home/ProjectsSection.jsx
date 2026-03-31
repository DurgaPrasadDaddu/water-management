"use client";
import { projects } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";

export default function ProjectsSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          variant="product"
          tag="Hyaline Engineering Projects"
          title={<>Proven Projects & Trusted Clients</>}
          description={`Delivering high-performance water treatment and engineering solutions
            across industries.`}
        />

        {/* Projects */}
        <div className="space-y-20">
          {projects.slice(0, 4).map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="block group"
              >
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl shadow-lg ${
                      isReverse ? "md:order-2" : ""
                    }`}
                  >
                    <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={isReverse ? "md:order-1" : ""}
                  >
                    {/* Client */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-10 h-10">
                        <Image
                          src={project.client.logo}
                          alt={project.client.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-semibold text-gray-800">
                        {project.client.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Meta */}
                    <p className="text-sm text-gray-500 mb-4">
                      {project.industry} • {project.capacity}
                    </p>

                    {/* Description */}
                    <p className="text-[var(--heading-text)] mb-4 line-clamp-3 text-[15px] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Result */}
                    <p className="font-medium text-blue-600 mb-6">
                      ✔ {project.shortResult}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center text-sm font-semibold text-black group-hover:text-blue-600 transition">
                      View Case Study →
                    </div>
                  </motion.div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/projects">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:scale-105">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
