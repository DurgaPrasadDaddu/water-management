// // "use client";

// // import Link from "next/link";
// // import { blogs } from "@/data/blog";

// // export default function BlogPage() {
// //   const categories = [...new Set(blogs.map((b) => b.category))];
// //   const tags = [...new Set(blogs.flatMap((b) => b.tags))];

// //   return (
// //     <div>

// //       {/* HERO */}
// //       <section className="bg-gray-50 py-20 text-center">
// //         <h1 className="text-4xl font-bold mb-4">
// //           Insights & Industry Knowledge
// //         </h1>
// //         <p className="text-gray-600 max-w-2xl mx-auto">
// //           Explore expert articles on water treatment, wastewater solutions,
// //           and industrial engineering.
// //         </p>
// //       </section>

// //       {/* MAIN LAYOUT */}
// //       <section className="max-w-7xl mx-auto px-6 py-16">
// //         <div className="grid lg:grid-cols-3 gap-10">

// //           {/* BLOG LIST */}
// //           <div className="lg:col-span-2 space-y-10">

// //             {blogs.map((blog) => (
// //               <div key={blog.id} className=" rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

// //                 {/* MEDIA */}
// //                 <div className="relative">

// //                   {/* DATE BADGE */}
// //                   <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-md text-center z-10">
// //                     <p className="text-lg font-bold">
// //                       {new Date(blog.date).getDate()}
// //                     </p>
// //                     <p className="text-xs">
// //                       {new Date(blog.date).toLocaleString("default", { month: "short" })}
// //                     </p>
// //                   </div>

// //                   {/* IMAGE */}
// //                   {blog.media.type === "image" && (
// //                     <img
// //                       src={blog.media.data}
// //                       className="w-full h-[300px] object-cover"
// //                       alt={blog.title}
// //                     />
// //                   )}

// //                   {/* VIDEO */}
// //                   {blog.media.type === "video" && (
// //                     <iframe
// //                       src={blog.media.data}
// //                       className="w-full h-[300px]"
// //                       allowFullScreen
// //                     />
// //                   )}

// //                   {/* CAROUSEL */}
// //                   {blog.media.type === "carousel" && (
// //                     <div className="flex overflow-x-auto">
// //                       {blog.media.data.map((img, i) => (
// //                         <img
// //                           key={i}
// //                           src={img}
// //                           className="w-full h-[300px] object-cover"
// //                         />
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* CONTENT */}
// //                 <div className="p-6">

// //                   {/* META */}
// //                   <div className="flex gap-4 text-sm text-gray-500 mb-3">
// //                     <span>By {blog.author}</span>
// //                     <span>{blog.comments} Comments</span>
// //                   </div>

// //                   {/* TITLE */}
// //                   <h2 className="text-xl font-semibold mb-3">
// //                     {blog.title}
// //                   </h2>

// //                   {/* EXCERPT */}
// //                   <p className="text-gray-600 mb-4">
// //                     {blog.excerpt}
// //                   </p>

// //                   <Link
// //                     href={`/blog/${blog.slug}`}
// //                     className="text-orange-500 font-semibold"
// //                   >
// //                     Read More →
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}

// //           </div>

// //           {/* SIDEBAR */}
// //           <div className="space-y-8">

// //             {/* SEARCH */}
// //             <div className="border p-5 rounded-lg flex gap-2">
// //               <input
// //                 type="text"
// //                 placeholder="Enter your keyword"
// //                 className="w-full border px-3 py-2 rounded"
// //               />
// //               <button className="bg-orange-500 text-white px-4 rounded">
// //                 Search
// //               </button>
// //             </div>

// //             {/* POSTS */}
// //             <div className="border p-5 rounded-lg">
// //               <h3 className="font-semibold mb-4">Posts</h3>

// //               <div className="space-y-4">
// //                 {blogs.slice(0, 3).map((blog) => (
// //                   <div key={blog.id} className="flex gap-3">
// //                     <img
// //                       src={
// //                         blog.media.type === "image"
// //                           ? blog.media.data
// //                           : "/images/blog/default.jpg"
// //                       }
// //                       className="w-16 h-16 object-cover rounded"
// //                     />
// //                     <div>
// //                       <p className="text-xs text-orange-500">
// //                         {blog.date}
// //                       </p>
// //                       <p className="text-sm font-medium">
// //                         {blog.title}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* CATEGORIES */}
// //             <div className="border p-5 rounded-lg">
// //               <h3 className="font-semibold mb-4">Post Categories</h3>

// //               <ul className="space-y-2">
// //                 {categories.map((cat) => {
// //                   const count = blogs.filter((b) => b.category === cat).length;

// //                   return (
// //                     <li key={cat} className="flex justify-between">
// //                       <span>{cat}</span>
// //                       <span className="text-orange-500">{count}</span>
// //                     </li>
// //                   );
// //                 })}
// //               </ul>
// //             </div>

// //             {/* NEWSLETTER */}
// //             <div className="border p-5 rounded-lg">
// //               <h3 className="font-semibold mb-3">Newsletter</h3>
// //               <p className="text-sm text-gray-600 mb-3">
// //                 Enter your e-mail and subscribe to our newsletter.
// //               </p>

// //               <div className="flex gap-2">
// //                 <input
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   className="w-full border px-3 py-2 rounded"
// //                 />
// //                 <button className="bg-orange-500 text-white px-4 rounded">
// //                   Submit
// //                 </button>
// //               </div>
// //             </div>

// //             {/* KEYWORDS */}
// //             <div className="border p-5 rounded-lg">
// //               <h3 className="font-semibold mb-3">Keyword</h3>

// //               <div className="flex flex-wrap gap-2">
// //                 {tags.map((tag) => (
// //                   <span
// //                     key={tag}
// //                     className="bg-gray-100 px-3 py-1 rounded text-sm"
// //                   >
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>

// //           </div>

// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { blogs } from "@/data/blog";

// // export default function BlogPage() {
// //   const categories = [...new Set(blogs.map((b) => b.category))];
// //   const tags = [...new Set(blogs.flatMap((b) => b.tags))];

// //   return (
// //     <div className="bg-[#F7F6F3] min-h-screen font-[system-ui]">

// //       {/* HERO */}
// //       <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2420] to-[#1A1A1A] py-28 text-center overflow-hidden">
// //         {/* Decorative grain/texture overlay */}
// //         <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />
// //         {/* Accent ring */}
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-500/10 pointer-events-none" />
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-orange-500/5 pointer-events-none" />

// //         <div className="relative z-10">
// //           <span className="inline-block text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5 border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 rounded-full">
// //             Knowledge Hub
// //           </span>
// //           <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
// //             Insights &amp; Industry
// //             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
// //               Knowledge
// //             </span>
// //           </h1>
// //           <p className="text-[#9A9590] max-w-xl mx-auto text-base leading-relaxed">
// //             Explore expert articles on water treatment, wastewater solutions,
// //             and industrial engineering.
// //           </p>
// //         </div>
// //       </section>

// //       {/* MAIN LAYOUT */}
// //       <section className="max-w-7xl mx-auto px-6 py-20">
// //         <div className="grid lg:grid-cols-3 gap-12">

// //           {/* BLOG LIST */}
// //           <div className="lg:col-span-2 space-y-10">

// //             {blogs.map((blog) => (
// //               <article
// //                 key={blog.id}
// //                 className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out border border-black/[0.04]"
// //               >

// //                 {/* MEDIA */}
// //                 <div className="relative overflow-hidden">

// //                   {/* DATE BADGE */}
// //                   <div className="absolute top-4 left-4 z-20 bg-orange-500 backdrop-blur-sm text-white px-3 py-2.5 rounded-xl text-center shadow-lg shadow-orange-500/30">
// //                     <p className="text-xl font-bold leading-none">
// //                       {new Date(blog.date).getDate()}
// //                     </p>
// //                     <p className="text-[10px] font-semibold tracking-widest uppercase mt-0.5">
// //                       {new Date(blog.date).toLocaleString("default", { month: "short" })}
// //                     </p>
// //                   </div>

// //                   {/* IMAGE */}
// //                   {blog.media.type === "image" && (
// //                     <div className="relative overflow-hidden h-[300px]">
// //                       <img
// //                         src={blog.media.data}
// //                         className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
// //                         alt={blog.title}
// //                       />
// //                       {/* Overlay gradient */}
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
// //                     </div>
// //                   )}

// //                   {/* VIDEO */}
// //                   {blog.media.type === "video" && (
// //                     <div className="relative overflow-hidden h-[300px]">
// //                       <iframe
// //                         src={blog.media.data}
// //                         className="w-full h-full"
// //                         allowFullScreen
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
// //                     </div>
// //                   )}

// //                   {/* CAROUSEL */}
// //                   {blog.media.type === "carousel" && (
// //                     <div className="relative overflow-hidden h-[300px]">
// //                       <div className="flex overflow-x-auto h-full">
// //                         {blog.media.data.map((img, i) => (
// //                           <img
// //                             key={i}
// //                             src={img}
// //                             className="w-full h-full object-cover flex-shrink-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
// //                           />
// //                         ))}
// //                       </div>
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* CONTENT */}
// //                 <div className="p-8">

// //                   {/* META */}
// //                   <div className="flex items-center gap-5 text-xs text-[#9A9590] mb-4 font-medium">
// //                     <span className="flex items-center gap-1.5">
// //                       <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
// //                       By {blog.author}
// //                     </span>
// //                     <span className="w-px h-3.5 bg-black/10" />
// //                     <span>{blog.comments} Comments</span>
// //                   </div>

// //                   {/* TITLE */}
// //                   <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-snug tracking-tight group-hover:text-orange-600 transition-colors duration-300">
// //                     {blog.title}
// //                   </h2>

// //                   {/* EXCERPT */}
// //                   <p className="text-[#6B6560] text-sm leading-relaxed mb-6">
// //                     {blog.excerpt}
// //                   </p>

// //                   <Link
// //                     href={`/blog/${blog.slug}`}
// //                     className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group/link"
// //                   >
// //                     <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-500 after:transition-all after:duration-300 group-hover/link:after:w-full">
// //                       Read More
// //                     </span>
// //                     <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
// //                   </Link>
// //                 </div>
// //               </article>
// //             ))}

// //           </div>

// //           {/* SIDEBAR */}
// //           <div className="space-y-6">

// //             {/* SEARCH */}
// //             <div className="bg-white border border-black/[0.05] p-6 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
// //               <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A9590] mb-4">Search</h3>
// //               <div className="flex gap-2">
// //                 <input
// //                   type="text"
// //                   placeholder="Enter your keyword..."
// //                   className="w-full border border-black/10 bg-[#F7F6F3] px-4 py-2.5 rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#B0ABA6] focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all duration-200"
// //                 />
// //                 <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-orange-500/20">
// //                   ↗
// //                 </button>
// //               </div>
// //             </div>

// //             {/* POSTS */}
// //             <div className="bg-white border border-black/[0.05] p-6 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
// //               <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A9590] mb-5">Recent Posts</h3>

// //               <div className="space-y-5">
// //                 {blogs.slice(0, 3).map((blog) => (
// //                   <div key={blog.id} className="flex gap-4 group/post cursor-pointer">
// //                     <div className="relative overflow-hidden rounded-xl flex-shrink-0 w-16 h-16">
// //                       <img
// //                         src={
// //                           blog.media.type === "image"
// //                             ? blog.media.data
// //                             : "/images/blog/default.jpg"
// //                         }
// //                         className="w-full h-full object-cover transition-transform duration-300 group-hover/post:scale-110"
// //                         alt={blog.title}
// //                       />
// //                     </div>
// //                     <div className="flex-1 min-w-0">
// //                       <p className="text-[10px] font-semibold text-orange-500 tracking-widest uppercase mb-1">
// //                         {blog.date}
// //                       </p>
// //                       <p className="text-sm font-semibold text-[#1A1A1A] leading-snug line-clamp-2 group-hover/post:text-orange-600 transition-colors duration-200">
// //                         {blog.title}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* CATEGORIES */}
// //             <div className="bg-white border border-black/[0.05] p-6 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
// //               <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A9590] mb-5">Post Categories</h3>

// //               <ul className="space-y-1">
// //                 {categories.map((cat) => {
// //                   const count = blogs.filter((b) => b.category === cat).length;

// //                   return (
// //                     <li
// //                       key={cat}
// //                       className="flex justify-between items-center py-2.5 px-3 rounded-xl hover:bg-orange-50 cursor-pointer group/cat transition-all duration-200"
// //                     >
// //                       <span className="text-sm text-[#3A3530] font-medium group-hover/cat:text-orange-600 transition-colors duration-200 flex items-center gap-2">
// //                         <span className="w-1 h-1 rounded-full bg-orange-300 group-hover/cat:bg-orange-500 transition-colors duration-200 flex-shrink-0" />
// //                         {cat}
// //                       </span>
// //                       <span className="text-xs font-bold text-orange-500 bg-orange-50 group-hover/cat:bg-orange-100 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200">
// //                         {count}
// //                       </span>
// //                     </li>
// //                   );
// //                 })}
// //               </ul>
// //             </div>

// //             {/* NEWSLETTER */}
// //             <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2D2620] p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
// //               <div className="relative z-10">
// //                 <h3 className="font-bold text-white mb-2">Newsletter</h3>
// //                 <p className="text-sm text-[#9A9590] mb-5 leading-relaxed">
// //                   Enter your e-mail and subscribe to our newsletter.
// //                 </p>

// //                 <div className="flex gap-2">
// //                   <input
// //                     type="email"
// //                     placeholder="Enter your email"
// //                     className="w-full bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400/50 transition-all duration-200"
// //                   />
// //                   <button className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex-shrink-0 shadow-lg shadow-orange-500/30">
// //                     →
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* KEYWORDS */}
// //             <div className="bg-white border border-black/[0.05] p-6 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
// //               <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A9590] mb-5">Keywords</h3>

// //               <div className="flex flex-wrap gap-2">
// //                 {tags.map((tag) => (
// //                   <span
// //                     key={tag}
// //                     className="bg-[#F7F6F3] hover:bg-orange-50 hover:text-orange-600 border border-black/[0.06] hover:border-orange-200 text-[#4A4540] px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
// //                   >
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>

// //           </div>

// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { blogs } from "@/data/blog";

// export default function BlogPage() {
//   const categories = [...new Set(blogs.map((b) => b.category))];
//   const tags = [...new Set(blogs.flatMap((b) => b.tags))];

//   return (
//     <div className="bg-[#F4F6F8] min-h-screen">

//       {/* ═══════════════════════════════
//           HERO — Full bleed Next/Image background
//       ═══════════════════════════════ */}
//       <section className="relative h-[480px] flex items-center justify-center overflow-hidden">

//         {/* Background Image via Next/Image */}
//         <Image
//           src="/images/blog/hero-bg.jpg"
//           alt="Water treatment facility"
//           fill
//           priority
//           className="object-cover object-center"
//           sizes="100vw"
//         />

//         {/* Multi-layer overlay for industrial depth */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#00A3E0]/25 to-[#0a1628]/80" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/75 via-transparent to-[#0a1628]/35" />

//         {/* Vertical brand accent lines */}
//         <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00A3E0] to-transparent opacity-70" />
//         <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#8DC63F] to-transparent opacity-50" />

//         {/* Subtle grid texture */}
//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Hero Content */}
//         <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
//           {/* Eyebrow */}
//           <div className="inline-flex items-center gap-3 mb-6">
//             <span className="h-px w-10 bg-[#8DC63F]" />
//             <span className="text-[#8DC63F] text-[11px] font-bold tracking-[0.3em] uppercase">
//               Knowledge Hub
//             </span>
//             <span className="h-px w-10 bg-[#8DC63F]" />
//           </div>

//           <h1
//             className="text-white text-5xl md:text-[3.5rem] font-bold leading-tight tracking-tight mb-5"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             Insights &amp;{" "}
//             <span className="text-[#00A3E0]">Industry</span>{" "}
//             Knowledge
//           </h1>

//           <p className="text-white/65 text-base leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
//             Explore expert articles on water treatment, wastewater solutions,
//             and industrial engineering.
//           </p>

//           {/* Decorative bottom accent */}
//           <div className="mt-8 flex items-center justify-center gap-3">
//             <span className="h-px w-16 bg-white/15" />
//             <span className="w-2 h-2 rounded-full bg-[#00A3E0] shadow-lg shadow-[#00A3E0]/60" />
//             <span className="w-1 h-1 rounded-full bg-[#8DC63F]" />
//             <span className="h-px w-16 bg-white/15" />
//           </div>
//         </div>

//         {/* Bottom SVG wave into page bg */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
//             <path d="M0 56V28C360 0 720 56 1080 28C1260 14 1380 42 1440 28V56H0Z" fill="#F4F6F8" />
//           </svg>
//         </div>
//       </section>

//       {/* ═══════════════════════════════
//           MAIN LAYOUT
//       ═══════════════════════════════ */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid lg:grid-cols-3 gap-10">

//           {/* ─── BLOG LIST ─── */}
//           <div className="lg:col-span-2 space-y-8">

//             {blogs.map((blog) => (
//               <article
//                 key={blog.id}
//                 className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,163,224,0.12)] hover:-translate-y-1.5 transition-all duration-400 ease-out"
//               >

//                 {/* MEDIA */}
//                 <div className="relative overflow-hidden">

//                   {/* DATE BADGE */}
//                   <div className="absolute top-5 left-5 z-20 bg-[#00A3E0] text-white px-3.5 py-3 rounded-xl text-center shadow-xl shadow-[#00A3E0]/40">
//                     <p className="text-2xl font-bold leading-none" style={{ fontFamily: "var(--font-heading)" }}>
//                       {new Date(blog.date).getDate()}
//                     </p>
//                     <p className="text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5 opacity-90">
//                       {new Date(blog.date).toLocaleString("default", { month: "short" })}
//                     </p>
//                   </div>

//                   {/* Category pill top-right */}
//                   <div className="absolute top-5 right-5 z-20">
//                     <span className="bg-[#8DC63F] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg shadow-[#8DC63F]/30">
//                       {blog.category}
//                     </span>
//                   </div>

//                   {/* IMAGE */}
//                   {blog.media.type === "image" && (
//                     <div className="relative h-[300px] overflow-hidden">
//                       <img
//                         src={blog.media.data}
//                         className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                         alt={blog.title}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/45 via-transparent to-transparent" />
//                     </div>
//                   )}

//                   {/* VIDEO */}
//                   {blog.media.type === "video" && (
//                     <div className="relative h-[300px] overflow-hidden">
//                       <iframe
//                         src={blog.media.data}
//                         className="w-full h-full"
//                         allowFullScreen
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/45 via-transparent to-transparent pointer-events-none" />
//                     </div>
//                   )}

//                   {/* CAROUSEL */}
//                   {blog.media.type === "carousel" && (
//                     <div className="relative h-[300px] overflow-hidden">
//                       <div className="flex overflow-x-auto h-full">
//                         {blog.media.data.map((img, i) => (
//                           <img
//                             key={i}
//                             src={img}
//                             className="w-full h-full object-cover flex-shrink-0 transition-transform duration-700 ease-out group-hover:scale-105"
//                             alt=""
//                           />
//                         ))}
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/45 via-transparent to-transparent pointer-events-none" />
//                     </div>
//                   )}
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-8">

//                   {/* META */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="flex items-center gap-2 text-xs text-slate-500 font-medium">
//                       <span className="w-5 h-5 rounded-full bg-[#00A3E0]/10 flex items-center justify-center flex-shrink-0">
//                         <svg className="w-2.5 h-2.5 text-[#00A3E0]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       By {blog.author}
//                     </span>
//                     <span className="w-px h-4 bg-slate-200" />
//                     <span className="flex items-center gap-2 text-xs text-slate-500 font-medium">
//                       <span className="w-5 h-5 rounded-full bg-[#8DC63F]/10 flex items-center justify-center flex-shrink-0">
//                         <svg className="w-2.5 h-2.5 text-[#8DC63F]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       {blog.comments} Comments
//                     </span>
//                   </div>

//                   {/* TITLE */}
//                   <h2
//                     className="text-xl font-bold text-[#1F2937] mb-3 leading-snug tracking-tight group-hover:text-[#00A3E0] transition-colors duration-300"
//                     style={{ fontFamily: "var(--font-heading)" }}
//                   >
//                     {blog.title}
//                   </h2>

//                   {/* Animated brand divider */}
//                   <div className="w-10 h-[3px] bg-gradient-to-r from-[#00A3E0] to-[#8DC63F] rounded-full mb-4 group-hover:w-20 transition-all duration-500 ease-out" />

//                   {/* EXCERPT */}
//                   <p className="text-[#4B5563] text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
//                     {blog.excerpt}
//                   </p>

//                   <Link
//                     href={`/blog/${blog.slug}`}
//                     className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00A3E0] to-[#0284C7] hover:from-[#0284C7] hover:to-[#00A3E0] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2.5 rounded-full shadow-md shadow-[#00A3E0]/25 hover:shadow-[#00A3E0]/45 hover:shadow-lg transition-all duration-300 group/btn"
//                   >
//                     Read More
//                     <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </Link>
//                 </div>
//               </article>
//             ))}

//           </div>

//           {/* ─── SIDEBAR ─── */}
//           <div className="space-y-6">

//             {/* SEARCH */}
//             <div className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
//               <h3
//                 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00A3E0] mb-4 flex items-center gap-2"
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#00A3E0]/40 to-transparent" />
//                 Search
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#00A3E0]/40 to-transparent" />
//               </h3>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Enter your keyword..."
//                   className="w-full border border-slate-200 bg-[#F4F6F8] px-4 py-2.5 rounded-xl text-sm text-[#1F2937] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/25 focus:border-[#00A3E0] transition-all duration-200"
//                 />
//                 <button className="bg-[#00A3E0] hover:bg-[#0284C7] active:scale-95 text-white w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-md shadow-[#00A3E0]/25">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* RECENT POSTS */}
//             <div className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
//               <h3
//                 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00A3E0] mb-5 flex items-center gap-2"
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#00A3E0]/40 to-transparent" />
//                 Posts
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#00A3E0]/40 to-transparent" />
//               </h3>

//               <div className="space-y-5">
//                 {blogs.slice(0, 3).map((blog) => (
//                   <div key={blog.id} className="flex gap-3.5 group/post cursor-pointer">
//                     <div className="relative flex-shrink-0 w-[68px] h-[68px] rounded-xl overflow-hidden border border-slate-100">
//                       <img
//                         src={
//                           blog.media.type === "image"
//                             ? blog.media.data
//                             : "/images/blog/default.jpg"
//                         }
//                         className="w-full h-full object-cover transition-transform duration-400 group-hover/post:scale-110"
//                         alt={blog.title}
//                       />
//                       <div className="absolute inset-0 bg-[#00A3E0]/0 group-hover/post:bg-[#00A3E0]/15 transition-colors duration-300" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-[10px] font-bold text-[#8DC63F] tracking-[0.15em] uppercase mb-1">
//                         {blog.date}
//                       </p>
//                       <p
//                         className="text-sm font-semibold text-[#1F2937] leading-snug line-clamp-2 group-hover/post:text-[#00A3E0] transition-colors duration-200"
//                         style={{ fontFamily: "var(--font-heading)" }}
//                       >
//                         {blog.title}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CATEGORIES */}
//             <div className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
//               <h3
//                 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00A3E0] mb-5 flex items-center gap-2"
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#00A3E0]/40 to-transparent" />
//                 Post Categories
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#00A3E0]/40 to-transparent" />
//               </h3>

//               <ul className="space-y-1.5">
//                 {categories.map((cat) => {
//                   const count = blogs.filter((b) => b.category === cat).length;
//                   return (
//                     <li
//                       key={cat}
//                       className="flex justify-between items-center py-2.5 px-3.5 rounded-xl hover:bg-[#00A3E0]/5 border border-transparent hover:border-[#00A3E0]/12 cursor-pointer group/cat transition-all duration-200"
//                     >
//                       <span
//                         className="text-sm text-[#4B5563] font-medium group-hover/cat:text-[#00A3E0] transition-colors duration-200 flex items-center gap-2.5"
//                         style={{ fontFamily: "var(--font-body)" }}
//                       >
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] flex-shrink-0" />
//                         {cat}
//                       </span>
//                       <span className="text-[10px] font-bold text-white bg-[#00A3E0] group-hover/cat:bg-[#0284C7] w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm shadow-[#00A3E0]/20">
//                         {count}
//                       </span>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>

//             {/* NEWSLETTER */}
//             <div className="relative overflow-hidden bg-gradient-to-br from-[#0D1B2E] via-[#0a2540] to-[#0D1B2E] p-6 rounded-2xl shadow-[0_8px_40px_rgba(0,163,224,0.18)] border border-[#00A3E0]/15">
//               <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#00A3E0]/10 pointer-events-none" />
//               <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#8DC63F]/8 pointer-events-none" />
//               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E0]/40 to-transparent" />

//               <div className="relative z-10">
//                 <div className="flex items-center gap-2.5 mb-1">
//                   <span className="w-6 h-6 rounded-full bg-[#00A3E0] flex items-center justify-center shadow-md shadow-[#00A3E0]/40 flex-shrink-0">
//                     <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                     </svg>
//                   </span>
//                   <h3
//                     className="font-bold text-white"
//                     style={{ fontFamily: "var(--font-heading)" }}
//                   >
//                     Newsletter
//                   </h3>
//                 </div>
//                 <p className="text-sm text-white/55 mb-5 leading-relaxed pl-[34px]" style={{ fontFamily: "var(--font-body)" }}>
//                   Enter your e-mail and subscribe to our newsletter.
//                 </p>

//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full bg-white/8 border border-white/12 px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]/45 focus:border-[#00A3E0]/50 transition-all duration-200"
//                   />
//                   <button className="bg-[#00A3E0] hover:bg-[#0284C7] active:scale-95 text-white px-4 rounded-xl font-bold text-sm transition-all duration-200 flex-shrink-0 shadow-lg shadow-[#00A3E0]/35">
//                     →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* KEYWORDS */}
//             <div className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
//               <h3
//                 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00A3E0] mb-5 flex items-center gap-2"
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#00A3E0]/40 to-transparent" />
//                 Keyword
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#00A3E0]/40 to-transparent" />
//               </h3>

//               <div className="flex flex-wrap gap-2">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="border border-slate-200 hover:border-[#00A3E0] hover:bg-[#00A3E0]/6 hover:text-[#00A3E0] text-[#4B5563] bg-[#F4F6F8] px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import { useState } from "react";

const BlogPage = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600  to-cyan-400 text-white px-6">
      
      <div className="max-w-2xl text-center">
        
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur">
          🚀 Blog Launching Soon
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Our Blog is <span className="text-white">Coming Soon</span>
        </h1>

        {/* Description */}
        <p className="text-gray-800 text-lg mb-8">
          We’re working on high-quality articles about technology, development,
          and real-world projects. Stay tuned!
        </p>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium">
            Notify Me
          </button>
        </div>

        {/* Extra Info */}
        <p className="text-sm text-gray-800 mt-6">
          No spam. Only valuable content.
        </p>

      </div>
    </section>
  );
};

export default BlogPage;