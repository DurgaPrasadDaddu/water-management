"use client";

import { motion } from "framer-motion";

export default function WaterDropsAnimation() {

  const dropVariant = {
    hidden: { y: -50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      className="col-span-12 lg:col-span-4 flex flex-wrap lg:flex-col justify-center items-center gap-6 mt-10 lg:mt-0"
    >
      <motion.div variants={dropVariant}>
        <WaterDrop number="100+" label="Projects Completed" />
      </motion.div>

      <motion.div variants={dropVariant}>
        <WaterDrop number="13+" label="Years Experience" />
      </motion.div>

      <motion.div variants={dropVariant}>
        <WaterDrop number="50+" label="Industrial Clients" />
      </motion.div>
    </motion.div>
  );
}

function WaterDrop({ number, label }) {
  return (
    <div className="relative w-[100px] h-[130px] md:w-[120px] md:h-[150px] flex items-center justify-center">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/20 shadow-xl rounded-[40%] sm:hidden" />
      <div
        className="hidden sm:block absolute inset-0 bg-white/40 backdrop-blur-md border border-white/20 shadow-2xl"
        style={{
          clipPath:
            "path('M60 0 C95 45 120 80 120 110 C120 140 90 150 60 150 C30 150 0 140 0 110 C0 80 25 45 60 0 Z')",
        }}
      />

      <div className="relative text-center text-white">
        <p className="text-xl font-bold text-cyan-300">{number}</p>
        <p className="text-base font-semibold mt-1">{label}</p>
      </div>
    </div>
  );
}