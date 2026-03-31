"use client";

import { motion } from "framer-motion";

const SectionHeading = ({
  tag,
  preTitle,
  highlight,
  title,
  description,
  align = "center",
  variant = "default",
  showDivider = false,
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  // ================= ANIMATION VARIANTS =================
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${alignment} mb-14`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* ================= TAG ================= */}
      {variant === "product" && tag && (
        <motion.p
          variants={fadeUp}
          className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase"
        >
          {tag}
        </motion.p>
      )}

      {/* ================= PRETITLE ================= */}
      {variant === "default" && preTitle && (
        <motion.p variants={fadeUp}>
          {/* Pretitle */}
          <span className="block text-sm sm:text-base">
            {preTitle}
          </span>

          {/* Highlight */}
          {highlight && (
            <span className="block text-[color:var(--color-primary)] font-semibold text-base sm:text-lg mt-1">
              {highlight}
            </span>
          )}
        </motion.p>
      )}

      {/* ================= TITLE ================= */}
      {title && (
        <motion.h2
          variants={fadeUp}
          className="mt-4
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-semibold
            text-[color:var(--color-dark)]
            leading-tight"
        >
          {title}
        </motion.h2>
      )}

      {/* ================= DIVIDER ================= */}
      {showDivider && (
        <motion.div
          variants={fadeUp}
          className={`w-16 h-1 bg-[var(--heading-accent)] mt-4 ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}

      {/* ================= DESCRIPTION ================= */}
      {description && (
        <motion.p
          variants={fadeUp}
          className={`
          mt-6
          text-lg sm:text-xl
          text-[color:var(--color-dark)]
          leading-[1.8]
          ${align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"}
        `}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
