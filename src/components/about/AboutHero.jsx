"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* CARD */}
        <div className="border-2 border-gray-300 rounded-2xl p-6 md:p-10 bg-gradient-to-r from-[#f8f6f3] to-[#e6f2ff]">
          {/* TOP TEXT */}
          <p className="font-semibold text-blue-600 text-center mb-3 uppercase tracking-wide">
            Complete Water Treatment Solutions
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-6">
            Delivering Sustainable Engineering Solutions for a Better Future
          </h2>

          {/* VIDEO AREA */}
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            {!play ? (
              <>
                {/* Thumbnail */}
                <div className="relative w-full h-[250px]">
                  <Image
                    src="/logos/hyaline-thumbnail.png"
                    alt="Video Thumbnail"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}

                {/* Play Button with Blink Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={() => setPlay(true)}
                    className="relative w-16 h-16 rounded-full bg-transparent flex items-center justify-center shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Pulse Ring */}
                    <span className="absolute inline-flex h-full w-full rounded-full bg-gray-600 opacity-40 animate-ping"></span>
                    <span className="absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-40 animate-ping"></span>
                    {/* Play Icon */}
                    <span className="relative text-xl text-black">▶</span>
                  </motion.button>
                </div>
              </>
            ) : (
              /* YouTube Embed */
              <iframe
                className="w-full h-[250px] md:h-[400px] rounded-xl"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* BOTTOM TEXT */}
          <p className="text-center text-black  mt-4">
            Explore how we deliver high-performance water treatment and
            engineering solutions across industries.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4 mt-5">
            {/* Primary CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
            >
              Get Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
