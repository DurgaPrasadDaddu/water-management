// import { projects } from "@/data/projects";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export default async function ProjectDetail({ params }) {
//   const { slug } = await params; 

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) return notFound();

//   return (
//     <div className="bg-white">
//       {/* Hero */}
//       <div className="relative h-[400px]">
//         <div className="relative w-full h-[250px]">
//           <Image
//             src={project.image}
//             alt="Project Image"
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/50 flex items-center">
//           <div className="max-w-5xl mx-auto px-6 text-white">
//             <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
//             <p className="mt-2">
//               {project.industry} • {project.location}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* Client */}
//         <div className="flex items-center gap-4 mb-8">
//           <Image
//             src={project.client.logo}
//             alt={project.client.name}
//             width={48}
//             height={48}
//             className="object-cover"
//           />
//           <div>
//             <p className="font-semibold">{project.client.name}</p>
//             <p className="text-sm text-gray-500">Client</p>
//           </div>
//         </div>

//         {/* Info Grid */}
//         <div className="grid md:grid-cols-2 gap-6 mb-10 bg-gray-50 p-6 rounded-xl">
//           <p>
//             <strong>Industry:</strong> {project.industry}
//           </p>
//           <p>
//             <strong>Location:</strong> {project.location}
//           </p>
//           <p>
//             <strong>Capacity:</strong> {project.capacity}
//           </p>
//           <p>
//             <strong>Technology:</strong> {project.technology.join(", ")}
//           </p>
//         </div>

//         {/* Description */}
//         <div className="mb-10">
//           <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
//           <p className="text-gray-700 leading-relaxed">{project.description}</p>
//         </div>

//         {/* Results */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Key Results</h2>

//           <ul className="grid md:grid-cols-2 gap-4">
//             {project.results.map((item, i) => (
//               <li
//                 key={i}
//                 className="bg-green-50 border border-green-200 p-4 rounded-lg"
//               >
//                 ✔ {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectTemplate from "@/components/templates/ProjectTemplate";

// ✅ Force static rendering
export const dynamic = "force-static";

// ================= STATIC PARAMS =================
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// ================= METADATA =================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Projects | Hyaline Enviro Engineers`,
    description: project.description,

    // ✅ Open Graph
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.hyalineenviro.com/projects/${slug}`,
      siteName: "Hyaline Enviro Engineers",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "article",
    },

    // ✅ Twitter SEO
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

// ================= PAGE =================
export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  // ================= SCHEMA =================

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image,
    author: {
      "@type": "Organization",
      name: "Hyaline Enviro Engineers Pvt. Ltd.",
      url: "https://www.hyalineenviro.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      {/* ✅ Structured Data (SEO Boost) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      {/* ✅ Page UI */}
      <ProjectTemplate project={project} />
    </>
  );
}