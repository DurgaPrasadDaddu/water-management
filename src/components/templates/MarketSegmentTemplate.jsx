"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "../ui/Banner";

export default function MarketSegmentTemplate({ data }) {
  return (
    <>
      {/* Banner */}
      <Banner
        title={data.title}
        description={data.description}
        image={data.image}
      />
      
      {/* Heading Section */}

      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6  relative z-10 text-center">
          <p className="text-blue-600 text-lg font-semibold tracking-wide">
            Market Segment
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-title)] mt-4">
            Industries We Serve in {data.title}
          </h2>

          <p className="text-[var(--heading-text)] mt-6 max-w-2xl mx-auto">
            Explore our expertise across multiple industries with tailored
            engineering solutions designed for performance and compliance.
          </p>
        </div>
      </section>

      {/* Grid Section */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {data.industries.map((item, index) => (
            <Link
              key={index}
              href={`/market-segments/${data.slug}/${item.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[320px] shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="absolute inset-0 object-cover transform group-hover:scale-110 transition duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white text-lg font-semibold group-hover:text-[#00A3E0] transition">
                  {item.name}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#00A3E0]/40 rounded-2xl transition"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}

      <section className="bg-[#00A3E0] text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Looking for Solutions in {data.title}?
        </h2>

        <p className="mt-4 text-white/90">
          Get in touch with our experts for customized engineering solutions.
        </p>

        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-white text-[#00A3E0] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
