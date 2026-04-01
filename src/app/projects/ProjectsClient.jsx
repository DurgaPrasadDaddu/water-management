// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function ProjectsClient({ projects }) {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const industries = ["All", ...new Set(projects.map((p) => p.industry))];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((p) => p.industry === activeFilter);

//   return (
//     <>
//       {/* Filters */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {industries.map((industry) => (
//           <button
//             key={industry}
//             onClick={() => setActiveFilter(industry)}
//             className={`px-4 py-2 rounded-full border ${
//               activeFilter === industry ? "bg-blue-600 text-white" : "bg-white"
//             }`}
//           >
//             {industry}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project) => (
//           <Link href={`/projects/${project.slug}`} key={project.slug}>
//             <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={400}
//                 height={200}
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 className="object-center"
//               />

//               <div className="p-5">
//                 <h3 className="font-bold">{project.title}</h3>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Phone,
  SlidersHorizontal,
  X,
  Droplets,
  Zap,
  ChevronRight,
  Building2,
  Search,
} from "lucide-react";

// ─── Scroll-triggered reveal hook ───────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Category color map ──────────────────────────────────────────────────────
const CATEGORY_STYLES = {
  WTP:         { pill: "bg-cyan-50 text-cyan-700 border-cyan-200",     dot: "bg-cyan-500" },
  STP:         { pill: "bg-teal-50 text-teal-700 border-teal-200",     dot: "bg-teal-500" },
  ETP:         { pill: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  RO:          { pill: "bg-blue-50 text-blue-700 border-blue-200",     dot: "bg-blue-500" },
  ZLD:         { pill: "bg-indigo-50 text-indigo-700 border-indigo-200", dot: "bg-indigo-500" },
  MEE:         { pill: "bg-violet-50 text-violet-700 border-violet-200", dot: "bg-violet-500" },
  ATFD:        { pill: "bg-purple-50 text-purple-700 border-purple-200", dot: "bg-purple-500" },
  Fabrication: { pill: "bg-slate-100 text-slate-700 border-slate-300", dot: "bg-slate-500" },
};
const catStyle = (cat) => CATEGORY_STYLES[cat] || { pill: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-500" };

// ─── Stat numbers for hero ───────────────────────────────────────────────────
const HERO_STATS = [
  { value: "100+", label: "Plants Delivered" },
  { value: "13+",  label: "Years of Expertise" },
  { value: "10+",   label: "Industry Sectors" },
  { value: "PAN India", label: "Project Footprint" },
];

// ════════════════════════════════════════════════════════════════════════════
export default function ProjectsClient({ projects = [] }) {

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry]  = useState("All");
  const [searchQuery,    setSearchQuery]      = useState("");
  const [filtersOpen,    setFiltersOpen]      = useState(false);

  // Derive filter lists from data
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))], [projects]);
  const industries  = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.industry).filter(Boolean)))],  [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchInd = activeIndustry  === "All" || p.industry  === activeIndustry;
      const q        = searchQuery.trim().toLowerCase();
      const matchQ   = !q || p.title?.toLowerCase().includes(q) || p.industry?.toLowerCase().includes(q) || p.location?.toLowerCase().includes(q);
      return matchCat && matchInd && matchQ;
    });
  }, [projects, activeCategory, activeIndustry, searchQuery]);

  const activeFilterCount = (activeCategory !== "All" ? 1 : 0) + (activeIndustry !== "All" ? 1 : 0) + (searchQuery.trim() ? 1 : 0);

  const clearFilters = () => { setActiveCategory("All"); setActiveIndustry("All"); setSearchQuery(""); };

  // Featured = first 2 projects (or mark manually via data)
  const featured = filtered.slice(0, 2);
  const rest      = filtered.slice(2);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 55%, #0284C7 100%)" }}>
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow orb */}
        <div className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20" style={{ background: "#00A3E0" }} />
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#8DC63F" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-white/50 font-medium mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/30" />
            <span className="text-white/80">Projects</span>
          </nav>

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold mb-5"
              style={{ borderColor: "rgba(141,198,63,0.4)", color: "#8DC63F", background: "rgba(141,198,63,0.08)" }}
            >
              <Droplets size={12} />
              Engineering Portfolio
            </div>

            <h1
              className="text-white font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "var(--font-heading)" }}
            >
              Our Projects
            </h1>
            <p className="text-blue-200 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              Over two decades of delivering water treatment plants, effluent systems, and industrial fabrication works across India is most demanding sectors.
            </p>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10">
            {HERO_STATS.map((s, i) => (
              <div key={i} className="text-center py-5 px-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                <p className="text-2xl font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</p>
                <p className="text-xs text-blue-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FILTER BAR
      ══════════════════════════════════════════════════════════════ */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">

          {/* Mobile toggle */}
          <div className="flex items-center justify-between sm:hidden mb-3">
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full text-xs text-white flex items-center justify-center font-bold" style={{ background: "#00A3E0" }}>
                  {activeFilterCount}
                </span>
              )}
            </button>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                <X size={12} /> Clear
              </button>
            )}
          </div>

          {/* Desktop filters always visible; mobile conditionally */}
          <div className={`${filtersOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap`}>

            {/* Search */}
            <div className="relative flex-shrink-0 w-full sm:w-56">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-colors"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-slate-200 flex-shrink-0" />

            {/* Category chips */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Category</span>
              {categories.map((cat) => {
                const active = activeCategory === cat;
                const cs = cat !== "All" ? catStyle(cat) : null;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                      px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                      ${active
                        ? cat === "All"
                          ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                          : `${cs?.pill} shadow-sm scale-105`
                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"
                      }
                    `}
                  >
                    {cat !== "All" && cs && (
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${cs.dot}`} />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            {industries.length > 1 && <div className="hidden sm:block w-px h-6 bg-slate-200 flex-shrink-0" />}

            {/* Industry chips */}
            {industries.length > 1 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Industry</span>
                {industries.map((ind) => {
                  const active = activeIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => setActiveIndustry(ind)}
                      className={`
                        px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                        ${active
                          ? "text-white border-transparent shadow-sm"
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"
                        }
                      `}
                      style={active ? { background: "#00A3E0", borderColor: "#00A3E0" } : {}}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Clear button (desktop) */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="hidden sm:flex items-center gap-1 text-xs text-slate-400 hover:text-red-500 transition-colors ml-auto"
              >
                <X size={12} /> Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PROJECTS GRID
      ══════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {filtered.length === 0 ? (
          /* Empty state */
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
              <Droplets size={28} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              No projects found
            </h3>
            <p className="text-sm text-slate-400 mb-6">Try adjusting your filters or search query.</p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "#00A3E0" }}
            >
              <X size={14} /> Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Results count */}
            <Reveal>
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-slate-500">
                  Showing <span className="font-bold text-slate-800">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
                  {activeFilterCount > 0 && <span className="text-slate-400"> · filtered</span>}
                </p>
              </div>
            </Reveal>

            {/* ── FEATURED ROW (first 2) ──────────────────────────────── */}
            {featured.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {featured.map((project, i) => (
                  <Reveal key={project.slug} delay={i * 80}>
                    <ProjectCard project={project} featured />
                  </Reveal>
                ))}
              </div>
            )}

            {/* ── REST GRID (3 columns) ──────────────────────────────── */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((project, i) => (
                  <Reveal key={project.slug} delay={(i % 3) * 70}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 55%, #0284C7 100%)" }}>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20" style={{ background: "#00A3E0" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold mb-6"
                style={{ borderColor: "rgba(141,198,63,0.4)", color: "#8DC63F", background: "rgba(141,198,63,0.08)" }}
              >
                <Zap size={12} />
                Engineering Consultation
              </div>

              <h2
                className="text-white font-bold mb-4 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontFamily: "var(--font-heading)" }}
              >
                Looking for a Similar Solution?
              </h2>
              <p className="text-blue-200 mb-10 leading-relaxed">
                Our engineering team has delivered 100+ projects across India. Tell us your requirement — we will engineer the right solution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                  style={{ background: "#00A3E0", boxShadow: "0 8px 32px rgba(0,163,224,0.35)", fontFamily: "var(--font-heading)" }}
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border transition-all hover:bg-white/10 w-full sm:w-auto justify-center"
                  style={{ borderColor: "rgba(255,255,255,0.25)" }}
                >
                  <Phone size={15} /> Contact Us
                </Link>
              </div>

              <p className="text-blue-300/40 text-xs mt-10">
                Hyaline Enviro Engineers Pvt. Ltd. · Complete Water Treatment &amp; Engineering Solutions
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PROJECT CARD
// ════════════════════════════════════════════════════════════════════════════
function ProjectCard({ project, featured = false }) {
  const { slug, title, shortResult, industry, location, category, image, client } = project;
  const cs = catStyle(category);
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="rounded-2xl overflow-hidden bg-white border border-slate-200 flex flex-col h-full"
        style={{
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,163,224,0.08)"
            : "0 2px 12px rgba(0,0,0,0.06)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* ── IMAGE ────────────────────────────────────────────────── */}
        <div className={`relative overflow-hidden flex-shrink-0 ${featured ? "h-64" : "h-52"}`}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes={featured ? "(max-width:640px) 100vw, 50vw" : "(max-width:640px) 100vw, 33vw"}
              className="object-cover transition-transform duration-500 ease-out"
              style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
            />
          ) : (
            // Placeholder
            <div
              className="absolute inset-0 transition-transform duration-500"
              style={{
                background: "linear-gradient(135deg, #1a3a5c 0%, #0f2744 60%, #0284C7 100%)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
            </div>
          )}

          {/* Hover overlay gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          />

          {/* Always-on bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

          {/* Category + Industry badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-sm ${cs.pill}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cs.dot}`} />
              {category}
            </span>
            {industry && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/20 bg-black/30 text-white backdrop-blur-sm">
                {industry}
              </span>
            )}
          </div>

          {/* Arrow reveal on hover */}
          <div
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: "#00A3E0",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1) translateX(0)" : "scale(0.6) translateX(8px)",
            }}
          >
            <ArrowRight size={14} className="text-white" />
          </div>
        </div>

        {/* ── CONTENT ──────────────────────────────────────────────── */}
        <div className="flex flex-col flex-1 p-5">

          {/* Short result highlight */}
          {shortResult && (
            <div className="flex items-center gap-1.5 mb-3">
              <Zap size={12} className="text-emerald-500 flex-shrink-0" />
              <span className="text-[11px] font-semibold text-emerald-600 leading-snug">{shortResult}</span>
            </div>
          )}

          {/* Title */}
          <h3
            className="font-bold text-slate-900 leading-snug mb-3 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: featured ? "1.05rem" : "0.95rem",
              color: hovered ? "#00A3E0" : undefined,
            }}
          >
            {title}
          </h3>

          {/* Location */}
          {location && (
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
              <MapPin size={11} className="flex-shrink-0" />
              {location}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Client branding + CTA row */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            {/* Client */}
            <div className="flex items-center gap-2 min-w-0">
              {client?.logo ? (
                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-100 flex-shrink-0 bg-slate-50">
                  <Image
                    src={client.logo}
                    alt={client.name || "Client"}
                    fill
                    className="object-contain p-1"
                    sizes="32px"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Building2 size={13} className="text-slate-400" />
                </div>
              )}
              {client?.name && (
                <span className="text-xs font-medium text-slate-500 truncate max-w-[110px]">{client.name}</span>
              )}
            </div>

            {/* View link */}
            <span
              className="text-xs font-bold flex items-center gap-1 transition-all duration-200"
              style={{ color: hovered ? "#00A3E0" : "#64748b" }}
            >
              View Case
              <ChevronRight
                size={13}
                style={{
                  transform: hovered ? "translateX(3px)" : "translateX(0)",
                  transition: "transform 0.2s ease",
                }}
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}