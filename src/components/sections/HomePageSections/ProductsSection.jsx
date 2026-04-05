"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../ui/SectionHeading";
import SectionWrapper from "../../ui/SectionWrapper";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("filtration");
  const [openIndex, setOpenIndex] = useState(null);

  // ================= CATEGORY MAPPING =================
  const categories = [
    {
      id: "filtration",
      name: "Filtration & Membrane Systems",
      items: ["ro-membranes", "uf-membranes", "mbr-system", "edi-system"],
    },
    {
      id: "media",
      name: "Water Treatment Media",
      items: ["resin"],
    },
    {
      id: "instruments",
      name: "Testing & Monitoring Instruments",
      items: ["hardness-test-kit", "chlorine-test-kit", "rotameter"],
    },
    {
      id: "pumps",
      name: "Pumps & Pressure Systems",
      items: ["pressure-booster", "hydropneumatic-system"],
    },
    {
      id: "heat",
      name: "Heat Transfer Equipment",
      items: ["plate-heat-exchanger", "heat-pumps"],
    },
    {
      id: "equipment",
      name: "Industrial Equipment",
      items: ["pressure-vessels"],
    },
  ];

  // ================= FILTER PRODUCTS =================
  const activeProducts =
    categories
      .find((cat) => cat.id === activeCategory)
      ?.items.map((slug) => products.find((p) => p.slug === slug)) || [];

  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          variant="product"
          tag="HYALINE ENVIRO PRODUCTS & TRADING"
          title={
            <>
              High-Quality Water Treatment <br />& Industrial Engineering
              Products
            </>
          }
          description={`Explore a comprehensive range of industrial products including
            membranes, resins, pressure systems, and testing instruments
            designed for water treatment and engineering applications. Hyaline
            Enviro Engineers Pvt. Ltd. supplies reliable, high-performance
            components tailored for industrial and commercial requirements
            across India.`}
        />

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-15 justify-center ">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-md font-semibold text-center border border-green-400 transition ${
                  activeCategory === cat.id
                    ? "bg-[#00A3E0] text-white border-[#00A3E0]"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProducts.map((product, index) => (
              <div
                key={product?.slug || index}
                className="h-[380px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#34b7e7] via-[#6bb4cc] to-[#8DC63F] text-white shadow-md hover:shadow-xl transition duration-500 group flex flex-col"
              >
                {/* TOP CONTENT */}
                <div className="p-6 text-center ">
                  <h3 className="text-gray-800 text-xl font-bold leading-snug">
                    {product?.name}
                  </h3>

                  <p className="text-gray-700 text-md mt-2 leading-relaxed line-clamp-2">
                    {product?.tagline}
                  </p>

                  <Link
                    href={`/products/${product?.slug}`}
                    className="mt-4 inline-block text-white font-semibold text-xl"
                  >
                    Explore →
                  </Link>
                </div>

                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={product?.image || "/images/placeholder.jpg"}
                    alt={product?.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-contain group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-3">
          {products.map((product, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={product.slug}
                className="border rounded-xl overflow-hidden bg-white"
              >
                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {product.name}
                  </span>

                  {/* ICON */}
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] p-4 pt-0" : "max-h-0"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative h-40 mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain rounded"
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-[var(--heading-text)]">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-block mt-3 text-[#00A3E0] font-medium"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
