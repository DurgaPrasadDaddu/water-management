// import Link from "next/link";
// import Image from "next/image";
// import SectionWrapper from "@/components/ui/SectionWrapper";
// import SectionHeading from "@/components/ui/SectionHeading";
// import ConsultationCTA from "../ui/ConsultationCTA";

// export default function ListingPageTemplate({
//   title,
//   subtitle,
//   data,
//   basePath,
// }) {
//   return (
//     <>
//       {/* HERO */}
//       <section className="bg-gradient-to-r from-[#0A2540] to-[#00A3E0] text-white py-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
//           <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
//             {subtitle}
//           </p>
//         </div>
//       </section>

//       {/* GRID */}
//       <SectionWrapper>
//         <SectionHeading
//           title={`Our ${title}`}
//           description={`Explore our engineering-driven solutions designed for performance, reliability, and efficiency.`}
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {data.map((item) => (
//             <Link
//               key={item.slug}
//               href={`/${basePath}/${item.slug}`}
//               className="group bg-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
//             >
//               {/* IMAGE */}
//               <div className="relative h-52 overflow-hidden">
//                 <Image
//                   src={item.image || item.hero?.image}
//                   alt={item.title || item.name}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#00A3E0]">
//                   {item.title || item.name}
//                 </h3>

//                 <p className="text-gray-600 mt-3 line-clamp-3">
//                   {item.description || item.tagline}
//                 </p>

//                 <span className="inline-block mt-4 text-sm font-medium text-[#00A3E0]">
//                   View Details →
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </SectionWrapper>

//       {/* CTA */}
//       {/* <section className="bg-[#39cde0] text-white py-16 mt-16">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-3xl font-semibold">
//             Looking for Customized {title}?
//           </h2>
//           <p className="mt-4 opacity-80">
//             Get expert consultation and tailored engineering solutions for your
//             project requirements.
//           </p>

//           <button className="mt-6 bg-[#00A3E0] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
//             Request a Quote
//           </button>
//         </div>
//       </section> */}
//       <ConsultationCTA/>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Utility ────────────────────────────────────────────────────────────────
const cls = (...args) => args.filter(Boolean).join(" ");

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── SVG Noise / Pattern ────────────────────────────────────────────────────
const HeroPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path
          d="M 48 0 L 0 0 0 48"
          fill="none"
          stroke="white"
          strokeWidth="0.8"
        />
      </pattern>
      <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
  </svg>
);

const CircuitLines = () => (
  <svg
    className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="500" cy="100" r="180" stroke="#00A3E0" strokeWidth="1" />
    <circle cx="500" cy="100" r="120" stroke="#00A3E0" strokeWidth="0.5" />
    <circle cx="500" cy="100" r="60" stroke="#00A3E0" strokeWidth="0.5" />
    <line
      x1="0"
      y1="100"
      x2="600"
      y2="100"
      stroke="#00A3E0"
      strokeWidth="0.5"
    />
    <line
      x1="500"
      y1="0"
      x2="500"
      y2="600"
      stroke="#00A3E0"
      strokeWidth="0.5"
    />
    <line
      x1="200"
      y1="0"
      x2="200"
      y2="600"
      stroke="#00A3E0"
      strokeWidth="0.3"
    />
    <line
      x1="0"
      y1="300"
      x2="600"
      y2="300"
      stroke="#00A3E0"
      strokeWidth="0.3"
    />
    <rect
      x="180"
      y="80"
      width="40"
      height="40"
      stroke="#00A3E0"
      strokeWidth="0.8"
    />
    <rect
      x="460"
      y="60"
      width="80"
      height="80"
      stroke="#00A3E0"
      strokeWidth="0.8"
    />
  </svg>
);

// ─── Skeleton Card ──────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden bg-white shadow-md animate-pulse">
    <div className="h-56 bg-gray-200" />
    <div className="p-6 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="h-5 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
      <div className="h-8 bg-gray-100 rounded-lg w-1/3 mt-4" />
    </div>
  </div>
);

// ─── Badge ──────────────────────────────────────────────────────────────────
const Badge = ({ label, variant = "blue" }) => {
  const styles = {
    blue: "bg-sky-100 text-sky-700 border border-sky-200",
    green: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
  };
  return (
    <span
      className={cls(
        "inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full",
        styles[variant],
      )}
    >
      {label}
    </span>
  );
};

// ─── Premium Card ────────────────────────────────────────────────────────────
const PremiumCard = ({ item, basePath, featured = false, index = 0 }) => {
  const [ref, inView] = useInView(0.1);
  const href = `${basePath}/${item.slug}`;
  const title = item.title || item.name || "";
  const description = item.description || item.tagline || "";
  const imgSrc = item.hero?.image || item.image || "/images/placeholder.jpg";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={cls(
        "group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100",
        "shadow-md hover:shadow-2xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        featured ? "md:col-span-1" : "",
      )}
    >
      {/* Image */}
      <div
        className={cls("relative overflow-hidden", featured ? "h-72" : "h-56")}
      >
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        {/* Badges on image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.category && <Badge label={item.category} variant="blue" />}
          {item.industry && <Badge label={item.industry} variant="green" />}
          {item.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-amber-400 text-amber-900">
              ★ Featured
            </span>
          )}
        </div>
        {/* Corner accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3E0] via-sky-300 to-emerald-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-[#0A2540] leading-snug mb-2 group-hover:text-[#00A3E0] transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[#00A3E0] font-semibold text-sm group/link self-start"
        >
          <span className="border-b border-transparent group-hover/link:border-[#00A3E0] transition-all duration-200">
            View Details
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// ─── Featured Card (wider) ───────────────────────────────────────────────────
const FeaturedCard = ({ item, basePath, index = 0 }) => {
  const [ref, inView] = useInView(0.1);
  const href = `${basePath}/${item.slug}`;
  const title = item.title || item.name || "";
  const description = item.description || item.tagline || "";
  const imgSrc = item.hero?.image || item.image || "/images/placeholder.jpg";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={cls(
        "group relative rounded-2xl overflow-hidden bg-[#0A2540] border border-white/10",
        "shadow-xl hover:shadow-2xl hover:shadow-sky-900/30",
        "transition-all duration-500 ease-out hover:-translate-y-2",
        "flex flex-col md:flex-row",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      {/* Image half */}
      <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A2540]/60" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.category && <Badge label={item.category} variant="blue" />}
          {item.industry && <Badge label={item.industry} variant="green" />}
        </div>
      </div>
      {/* Content half */}
      <div className="flex flex-col justify-center p-8 md:w-1/2 relative">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00A3E0]/40 to-transparent hidden md:block" />
        <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured Project
        </span>
        <h3 className="text-2xl font-bold text-white leading-snug mb-3 group-hover:text-sky-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6 line-clamp-4 text-sm">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 self-start bg-[#00A3E0] hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:gap-3"
        >
          Explore Project
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// ─── Stats Bar ───────────────────────────────────────────────────────────────
const StatsBar = ({ stats }) => {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-8 mt-10">
      {stats.map((s, i) => (
        <div
          key={i}
          style={{ transitionDelay: `${i * 100}ms` }}
          className={cls(
            "text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <div className="text-3xl font-black text-white tracking-tight">
            {s.value}
          </div>
          <div className="text-xs text-sky-300 font-medium tracking-wider uppercase mt-0.5">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Section Divider ─────────────────────────────────────────────────────────
const Divider = ({ label }) => (
  <div className="flex items-center gap-4 my-12">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    {label && (
      <span className="text-xs font-bold tracking-widest uppercase text-gray-400 px-3">
        {label}
      </span>
    )}
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function ListingPageTemplate({
  title = "Our Services",
  subtitle = "Delivering world-class engineering solutions across industries.",
  data = [],
  basePath = "/services",
  stats,
  heroImage,
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [heroRef, heroInView] = useInView(0.05);

  // Simulate loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // Derive filter options
  const categories = [
    "All",
    ...Array.from(new Set(data.map((d) => d.category).filter(Boolean))),
  ];
  const industries = [
    "All",
    ...Array.from(new Set(data.map((d) => d.industry).filter(Boolean))),
  ];
  const hasCategories = categories.length > 1;
  const hasIndustries = industries.length > 1;

  // Split featured / regular
  const featuredItems = data.filter((d) => d.featured);
  const regularItems = data.filter((d) => !d.featured);

  // Filter regular items
  const filtered = regularItems.filter((item) => {
    const q = search.toLowerCase();
    const titleMatch = (item.title || item.name || "")
      .toLowerCase()
      .includes(q);
    const descMatch = (item.description || item.tagline || "")
      .toLowerCase()
      .includes(q);
    const catMatch =
      activeCategory === "All" || item.category === activeCategory;
    const indMatch =
      activeIndustry === "All" || item.industry === activeIndustry;
    return (titleMatch || descMatch) && catMatch && indMatch;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const sectionLabel = title.replace(/s$/, "");

  const defaultStats = stats || [
    { value: "500+", label: "Projects Delivered" },
    { value: "13+", label: "Years Experience" },
    { value: "300+", label: "Clients Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const resetFilters = useCallback(() => {
    setSearch("");
    setActiveCategory("All");
    setActiveIndustry("All");
  }, []);

  const activeFilterCount = [
    search,
    activeCategory !== "All" ? activeCategory : "",
    activeIndustry !== "All" ? activeIndustry : "",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#0A2540] min-h-[80svh] flex items-center"
      >
        {heroImage && (
          <Image
            src={heroImage}
            alt="her-image"
            fill
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover opacity-20"
            priority
          />
        )}
        <HeroPattern />
        <CircuitLines />

        {/* Glow orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00A3E0] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 rounded-full bg-emerald-500 opacity-8 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <nav
            className={cls(
              "flex items-center justify-center gap-2 text-sky-300/70 text-xs font-medium tracking-wide mb-8 transition-all duration-700",
              heroInView ? "opacity-100" : "opacity-0",
            )}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg
              className="w-3 h-3 text-sky-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-sky-200">{title}</span>
          </nav>

          {/* Title */}
          <div
            className={cls(
              "transition-all duration-700 delay-100 text-center flex flex-col items-center",
              heroInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6",
            )}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
              Hyaline Enviro Engineers Pvt. Ltd.
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              {title}
              <span className="block h-1 w-24 bg-gradient-to-r from-[#00A3E0] to-emerald-400 rounded-full mt-4 mx-auto" />
            </h1>

            <p className="text-lg text-sky-100/80 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Stats */}
          <StatsBar stats={defaultStats} />
        </div>
      </section>

      {/* ── FILTERS ──────────────────────────────────────────────────────── */}
      {(hasCategories || hasIndustries) && (
        <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${title.toLowerCase()}...`}
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/30 focus:border-[#00A3E0] transition-all placeholder-gray-400"
              />
            </div>

            <div className="flex flex-wrap gap-3 flex-1">
              {/* Category pills */}
              {hasCategories && (
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cls(
                        "px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border",
                        activeCategory === cat
                          ? "bg-[#00A3E0] text-white border-[#00A3E0] shadow-sm shadow-sky-200"
                          : "bg-white text-gray-500 border-gray-200 hover:border-[#00A3E0] hover:text-[#00A3E0]",
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {/* Industry pills */}
              {hasIndustries && (
                <div className="flex flex-wrap gap-1.5">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveIndustry(ind)}
                      className={cls(
                        "px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border",
                        activeIndustry === ind
                          ? "bg-emerald-500 text-white border-emerald-500 shadow-sm shadow-emerald-100"
                          : "bg-white text-gray-500 border-gray-200 hover:border-emerald-500 hover:text-emerald-600",
                      )}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Active filter count + reset */}
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-500 transition-colors font-medium shrink-0"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Clear ({activeFilterCount})
              </button>
            )}
          </div>
        </section>
      )}

      {/* ── FEATURED SECTION ─────────────────────────────────────────────── */}
      {featuredItems.length > 0 &&
        !search &&
        activeCategory === "All" &&
        activeIndustry === "All" && (
          <section className="max-w-7xl mx-auto px-6 pt-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00A3E0] to-emerald-400" />
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#00A3E0] mb-0.5">
                  Spotlight
                </p>
                <h2 className="text-2xl font-black text-[#0A2540]">
                  Featured {title}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {featuredItems.map((item, i) => (
                <FeaturedCard
                  key={item.slug}
                  item={item}
                  basePath={basePath}
                  index={i}
                />
              ))}
            </div>
            <Divider label={`All ${title}`} />
          </section>
        )}

      {/* ── MAIN GRID ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {!featuredItems.length ||
        search ||
        activeCategory !== "All" ||
        activeIndustry !== "All" ? (
          <div className="flex items-center justify-between mb-8 pt-16">
            <div className="flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00A3E0] to-emerald-400" />
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#00A3E0] mb-0.5">
                  Browse
                </p>
                <h2 className="text-2xl font-black text-[#0A2540]">
                  All {title}
                </h2>
              </div>
            </div>
            <span className="text-sm text-gray-400 font-medium">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-gray-400 font-medium">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Loading skeletons */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : visible.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((item, i) => (
                <PremiumCard
                  key={item.slug}
                  item={item}
                  basePath={basePath}
                  index={i}
                />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-white border-2 border-[#00A3E0] text-[#00A3E0] font-bold rounded-xl hover:bg-[#00A3E0] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-sky-200"
                >
                  <span>Load More {title}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Pagination hint */}
            {!hasMore && filtered.length > 6 && (
              <p className="text-center text-sm text-gray-400 mt-10">
                Showing all {filtered.length} results
              </p>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              <svg
                className="w-9 h-9 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.65 16.65"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0A2540] mb-2">
              No {title} Found
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              We could not find any results matching your filters. Try adjusting
              your search or clearing the filters.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00A3E0] text-white text-sm font-semibold rounded-lg hover:bg-sky-500 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A2540] py-20 px-6">
        <HeroPattern />
        <div className="absolute -top-24 right-0 w-80 h-80 rounded-full bg-[#00A3E0] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 rounded-full bg-emerald-500 opacity-10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Let is Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Looking for Customized
            <br />
            <span className="bg-gradient-to-r from-[#00A3E0] to-emerald-400 bg-clip-text text-transparent">
              {sectionLabel} Solutions?
            </span>
          </h2>
          <p className="text-sky-100/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Our team of expert engineers tailors every solution to your specific
            environmental and operational needs. Let is build something
            exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A3E0] hover:bg-sky-400 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-900/50 hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Request Consultation
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="tel:+917981123366"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 text-sm tracking-wide backdrop-blur-sm"
            >
              Talk to an expert
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-white/10">
            {[
              { icon: "🏆", text: "ISO 9001 Certified" },
              { icon: "🌿", text: "Eco-Compliant" },
              { icon: "⚡", text: "Fast Turnaround" },
              { icon: "🔒", text: "100% Confidential" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sky-200/60 text-xs font-medium"
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
