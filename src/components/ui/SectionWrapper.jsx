"use client";

const SectionWrapper = ({
  children,
  className = "",
  container = true,
}) => {
  return (
    <section className={`relative py-12 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden ${className}`}>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      {/* Content */}
      <div className={`relative z-10 ${container ? "max-w-7xl mx-auto px-6" : ""}`}>
        {children}
      </div>

    </section>
  );
};

export default SectionWrapper;