// // import { blogs } from "@/data/blog";
// // import Image from "next/image";
// // import Link from "next/link";

// // export default async function BlogDetail({ params }) {
// //   const { slug } = await params;

// //   const blog = blogs.find((b) => b.slug === slug);

// //   if (!blog) {
// //     return <div className="text-center py-20">Blog not found</div>;
// //   }

// //   const shareUrl = `https://yourdomain.com/blog/${slug}`;

// //   return (
// //     <div>
// //       {/* HERO */}
// //       <section className="bg-gray-50 py-16 text-center">
// //         <p className="text-sm text-gray-500 mb-2">
// //           Home / Blog / {blog.title}
// //         </p>
// //         <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
// //           {blog.title}
// //         </h1>
// //       </section>

// //       {/* MAIN */}
// //       <section className="max-w-7xl mx-auto px-6 py-16">
// //         <div>

// //           {/* LEFT CONTENT */}
// //           <div className="space-y-8">

// //             {/* MEDIA */}
// //             <div>
// //               {/* IMAGE */}
// //               {blog.media.type === "image" && (
// //                 <div className="relative w-full h-[400px]">
// //                   <Image
// //                     src={blog.media.data}
// //                     alt={blog.title}
// //                     fill
// //                     className="object-cover rounded-lg"
// //                     priority
// //                   />
// //                 </div>
// //               )}

// //               {/* VIDEO */}
// //               {blog.media.type === "video" && (
// //                 <iframe
// //                   src={blog.media.data}
// //                   className="w-full h-[400px] rounded-lg"
// //                   allowFullScreen
// //                 />
// //               )}

// //               {/* CAROUSEL */}
// //               {blog.media.type === "carousel" && (
// //                 <div className="flex gap-4 overflow-x-auto">
// //                   {blog.media.data.map((img, i) => (
// //                     <div key={i} className="relative min-w-[300px] h-[200px]">
// //                       <Image
// //                         src={img}
// //                         alt={`blog-${i}`}
// //                         fill
// //                         className="object-cover rounded-lg"
// //                       />
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* META */}
// //             <div className="flex flex-wrap gap-4 text-sm text-gray-500">
// //               <span>By {blog.author}</span>
// //               <span>{blog.date}</span>
// //               <span>{blog.comments} Comments</span>
// //             </div>

// //             {/* CONTENT */}
// //             <div className="space-y-6">
// //               {blog.content?.map((block, i) => {
// //                 if (block.type === "heading") {
// //                   const Tag = `h${block.level}`;
// //                   return (
// //                     <Tag key={i} className="text-2xl font-semibold">
// //                       {block.text}
// //                     </Tag>
// //                   );
// //                 }

// //                 if (block.type === "paragraph") {
// //                   return (
// //                     <p key={i} className="text-gray-700 leading-7">
// //                       {block.text}
// //                     </p>
// //                   );
// //                 }

// //                 if (block.type === "list") {
// //                   return (
// //                     <ul key={i} className="list-disc pl-5 space-y-2">
// //                       {block.items.map((item, idx) => (
// //                         <li key={idx}>{item}</li>
// //                       ))}
// //                     </ul>
// //                   );
// //                 }

// //                 return null;
// //               })}
// //             </div>

// //             {/* TAGS / INTERNAL LINKS */}
// //             {blog.relatedLinks && (
// //               <div>
// //                 <h3 className="font-semibold mb-2">Related Topics</h3>
// //                 <div className="flex gap-3 flex-wrap">
// //                   {blog.relatedLinks.map((link, i) => (
// //                     <Link
// //                       key={i}
// //                       href={link.url}
// //                       className="bg-gray-100 px-4 py-2 rounded text-sm hover:bg-orange-100 transition"
// //                     >
// //                       {link.title}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             {/* SHARE SECTION (NO JS EVENTS) */}
// //             <div>
// //               <h3 className="font-semibold mb-3">Share</h3>

// //               <div className="flex flex-wrap gap-3">

// //                 {/* WhatsApp */}
// //                 <a
// //                   href={`https://wa.me/?text=${encodeURIComponent(blog.title + " " + shareUrl)}`}
// //                   target="_blank"
// //                   className="bg-green-500 text-white px-4 py-2 rounded"
// //                 >
// //                   WhatsApp
// //                 </a>

// //                 {/* LinkedIn */}
// //                 <a
// //                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
// //                   target="_blank"
// //                   className="bg-blue-600 text-white px-4 py-2 rounded"
// //                 >
// //                   LinkedIn
// //                 </a>

// //                 {/* Copy Link (temporary simple fallback) */}
// //                 <a
// //                   href={shareUrl}
// //                   className="bg-gray-200 px-4 py-2 rounded"
// //                 >
// //                   Copy Link
// //                 </a>

// //               </div>
// //             </div>

// //             {/* CTA */}
// //             <div className="bg-blue-50 p-6 rounded-lg">
// //               <h3 className="text-xl font-semibold mb-2">
// //                 Need a Water Treatment Solution?
// //               </h3>
// //               <p className="text-gray-600 mb-4">
// //                 Contact our experts for customized solutions tailored to your industry.
// //               </p>
// //               <Link
// //                 href="/contact"
// //                 className="bg-blue-600 text-white px-5 py-2 rounded"
// //               >
// //                 Get Consultation
// //               </Link>
// //             </div>

// //           </div>

// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import { blogs } from "@/data/blog";
// import Image from "next/image";
// import Link from "next/link";

// export default async function BlogDetail({ params }) {
//   const { slug } = await params;

//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center bg-[#F4F6F8]">
//         <div className="text-center">
//           <p className="text-6xl font-bold text-[#00A3E0]/20 mb-4" style={{ fontFamily: "var(--font-heading)" }}>404</p>
//           <p className="text-[#4B5563] text-lg">Blog not found</p>
//           <Link href="/blog" className="mt-6 inline-block text-[#00A3E0] font-semibold text-sm hover:underline">← Back to Blog</Link>
//         </div>
//       </div>
//     );
//   }

//   const shareUrl = `https://yourdomain.com/blog/${slug}`;

//   return (
//     <div className="bg-[#F4F6F8] min-h-screen">

//       {/* ═══════════════════════════════
//           HERO — Dark banner with breadcrumb
//       ═══════════════════════════════ */}
//       <section className="relative bg-gradient-to-br from-[#0D1B2E] via-[#0a2540] to-[#0D1B2E] py-20 overflow-hidden">

//         {/* Grid texture */}
//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />
//         {/* Brand accent lines */}
//         <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00A3E0] to-transparent opacity-70" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E0]/40 to-transparent" />

//         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

//           {/* Breadcrumb */}
//           <nav className="flex items-center justify-center gap-2 text-xs text-white/40 font-medium mb-7 tracking-wide">
//             <Link href="/" className="hover:text-[#00A3E0] transition-colors duration-200">Home</Link>
//             <span className="text-white/20">/</span>
//             <Link href="/blog" className="hover:text-[#00A3E0] transition-colors duration-200">Blog</Link>
//             <span className="text-white/20">/</span>
//             <span className="text-white/60 line-clamp-1">{blog.title}</span>
//           </nav>

//           {/* Category pill */}
//           <div className="mb-5">
//             <span className="bg-[#8DC63F] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-lg shadow-[#8DC63F]/30">
//               {blog.category}
//             </span>
//           </div>

//           <h1
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             {blog.title}
//           </h1>

//           {/* Meta inline */}
//           <div className="flex items-center justify-center flex-wrap gap-5 text-xs text-white/50 font-medium">
//             <span className="flex items-center gap-2">
//               <span className="w-5 h-5 rounded-full bg-[#00A3E0]/20 flex items-center justify-center">
//                 <svg className="w-2.5 h-2.5 text-[#00A3E0]" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               By {blog.author}
//             </span>
//             <span className="w-px h-4 bg-white/15" />
//             <span className="flex items-center gap-2">
//               <svg className="w-3.5 h-3.5 text-[#00A3E0]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               {blog.date}
//             </span>
//             <span className="w-px h-4 bg-white/15" />
//             <span className="flex items-center gap-2">
//               <svg className="w-3.5 h-3.5 text-[#8DC63F]" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" />
//               </svg>
//               {blog.comments} Comments
//             </span>
//           </div>
//         </div>

//         {/* Bottom wave */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
//             <path d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 36 1440 24V48H0Z" fill="#F4F6F8" />
//           </svg>
//         </div>
//       </section>

//       {/* ═══════════════════════════════
//           MAIN CONTENT
//       ═══════════════════════════════ */}
//       <section className="max-w-4xl mx-auto px-6 py-14">
//         <div className="space-y-10">

//           {/* ── MEDIA ── */}
//           <div>
//             {/* IMAGE */}
//             {blog.media.type === "image" && (
//               <div className="relative w-full h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-200/60">
//                 <Image
//                   src={blog.media.data}
//                   alt={blog.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 {/* Subtle bottom gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/30 via-transparent to-transparent pointer-events-none" />
//               </div>
//             )}

//             {/* VIDEO */}
//             {blog.media.type === "video" && (
//               <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-200/60">
//                 <iframe
//                   src={blog.media.data}
//                   className="w-full h-[460px]"
//                   allowFullScreen
//                 />
//               </div>
//             )}

//             {/* CAROUSEL */}
//             {blog.media.type === "carousel" && (
//               <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
//                 {blog.media.data.map((img, i) => (
//                   <div key={i} className="relative min-w-[320px] h-[220px] rounded-2xl overflow-hidden flex-shrink-0 shadow-md border border-slate-200/60">
//                     <Image
//                       src={img}
//                       alt={`blog-${i}`}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/25 to-transparent pointer-events-none" />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ── ARTICLE BODY ── */}
//           <div className="bg-white rounded-2xl border border-slate-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.05)] overflow-hidden">

//             {/* Top brand bar */}
//             <div className="h-1 bg-gradient-to-r from-[#00A3E0] via-[#0284C7] to-[#8DC63F]" />

//             <div className="p-8 md:p-12 space-y-7">
//               {blog.content?.map((block, i) => {
//                 if (block.type === "heading") {
//                   const Tag = `h${block.level}`;
//                   const sizeMap = { 2: "text-2xl", 3: "text-xl", 4: "text-lg" };
//                   return (
//                     <Tag
//                       key={i}
//                       className={`${sizeMap[block.level] || "text-xl"} font-bold text-[#1F2937] leading-snug tracking-tight pt-2`}
//                       style={{ fontFamily: "var(--font-heading)" }}
//                     >
//                       <span className="border-l-[3px] border-[#00A3E0] pl-4">{block.text}</span>
//                     </Tag>
//                   );
//                 }

//                 if (block.type === "paragraph") {
//                   return (
//                     <p
//                       key={i}
//                       className="text-[#4B5563] leading-[1.85] text-[15px]"
//                       style={{ fontFamily: "var(--font-body)" }}
//                     >
//                       {block.text}
//                     </p>
//                   );
//                 }

//                 if (block.type === "list") {
//                   return (
//                     <ul key={i} className="space-y-3 pl-1">
//                       {block.items.map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-start gap-3 text-[#4B5563] text-[15px] leading-relaxed"
//                           style={{ fontFamily: "var(--font-body)" }}
//                         >
//                           <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#00A3E0] to-[#8DC63F] flex-shrink-0" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   );
//                 }

//                 return null;
//               })}
//             </div>
//           </div>

//           {/* ── RELATED TOPICS ── */}
//           {blog.relatedLinks && (
//             <div className="bg-white rounded-2xl border border-slate-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.05)] p-8">
//               <h3
//                 className="text-xs font-bold uppercase tracking-[0.22em] text-[#00A3E0] mb-5 flex items-center gap-3"
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 <span className="h-px flex-1 bg-gradient-to-r from-[#00A3E0]/40 to-transparent" />
//                 Related Topics
//                 <span className="h-px flex-1 bg-gradient-to-l from-[#00A3E0]/40 to-transparent" />
//               </h3>
//               <div className="flex gap-2.5 flex-wrap">
//                 {blog.relatedLinks.map((link, i) => (
//                   <Link
//                     key={i}
//                     href={link.url}
//                     className="border border-slate-200 hover:border-[#00A3E0] hover:bg-[#00A3E0]/6 hover:text-[#00A3E0] text-[#4B5563] bg-[#F4F6F8] px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
//                   >
//                     {link.title}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ── SHARE ── */}
//           <div className="bg-white rounded-2xl border border-slate-200/70 shadow-[0_2px_20px_rgba(0,0,0,0.05)] p-8">
//             <h3
//               className="text-xs font-bold uppercase tracking-[0.22em] text-[#00A3E0] mb-5 flex items-center gap-3"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               <span className="h-px flex-1 bg-gradient-to-r from-[#00A3E0]/40 to-transparent" />
//               Share This Article
//               <span className="h-px flex-1 bg-gradient-to-l from-[#00A3E0]/40 to-transparent" />
//             </h3>

//             <div className="flex flex-wrap gap-3">

//               {/* WhatsApp */}
//               <a
//                 href={`https://wa.me/?text=${encodeURIComponent(blog.title + " " + shareUrl)}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-full shadow-md shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//                   <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.849L0 24l6.335-1.511A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.49-5.19-1.348l-.372-.22-3.762.897.947-3.658-.242-.376A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
//                 </svg>
//                 WhatsApp
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2.5 bg-[#0A66C2] hover:bg-[#0052a3] text-white text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-full shadow-md shadow-[#0A66C2]/25 hover:shadow-[#0A66C2]/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//                 LinkedIn
//               </a>

//               {/* Copy Link */}
//               <a
//                 href={shareUrl}
//                 className="inline-flex items-center gap-2.5 bg-[#F4F6F8] hover:bg-slate-200 border border-slate-200 hover:border-slate-300 text-[#4B5563] text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                 </svg>
//                 Copy Link
//               </a>
//             </div>
//           </div>

//           {/* ── CTA ── */}
//           <div className="relative overflow-hidden bg-gradient-to-br from-[#0D1B2E] via-[#0a2540] to-[#0D1B2E] rounded-2xl shadow-[0_20px_60px_rgba(0,163,224,0.18)] border border-[#00A3E0]/15 p-10">
//             {/* Decorative circles */}
//             <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#00A3E0]/8 pointer-events-none" />
//             <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#8DC63F]/8 pointer-events-none" />
//             <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E0]/40 to-transparent" />

//             <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//               <div>
//                 <span className="inline-block bg-[#8DC63F] text-white text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-4 shadow-md shadow-[#8DC63F]/30">
//                   Expert Support
//                 </span>
//                 <h3
//                   className="text-2xl font-bold text-white leading-snug mb-2"
//                   style={{ fontFamily: "var(--font-heading)" }}
//                 >
//                   Need a Water Treatment Solution?
//                 </h3>
//                 <p className="text-white/55 text-sm leading-relaxed max-w-md" style={{ fontFamily: "var(--font-body)" }}>
//                   Contact our experts for customized solutions tailored to your industry.
//                 </p>
//               </div>

//               <Link
//                 href="/contact"
//                 className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00A3E0] to-[#0284C7] hover:from-[#0284C7] hover:to-[#00A3E0] text-white text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full shadow-lg shadow-[#00A3E0]/35 hover:shadow-[#00A3E0]/55 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
//               >
//                 Get Consultation
//                 <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }