// import { projects } from "@/data/projects";
// import { generateSEO } from "@/lib/seo";
// import ProjectsClient from "@/app/projects/ProjectsClient";

// export const metadata = generateSEO({
//   title: "Our Projects | Hyaline Enviro Engineers",
//   description:
//     "Explore our completed projects in water treatment, industrial fabrication, RO plants, STP, ETP, and infrastructure solutions across India.",
//   path: "/projects",
// });

// export default function ProjectsPage() {

//   /*ItemList Schema */
//   const projectsSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: projects.map((project, index) => ({
//       "@type": "ListItem",
//       position: index + 1,
//       name: project.title,
//       url: `https://www.hyalineenviro.com/projects/${project.slug}`,
//     })),
//   };

//   return (
//     <>
//       {/*ItemList Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(projectsSchema),
//         }}
//       />


//       <div className="py-20 bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold">Our Projects</h1>
//             <p className="text-gray-600 mt-3">
//               Explore our engineering solutions across industries
//             </p>
//           </div>

//           {/*Client Component (filters + UI) */}
//           <ProjectsClient projects={projects} />

//         </div>
//       </div>
//     </>
//   );
// }

import { projects } from "@/data/projects";
import { generateSEO } from "@/lib/seo";
import ProjectsClient from "@/app/projects/ProjectsClient";

export const metadata = generateSEO({
  title: "Our Projects | Hyaline Enviro Engineers",
  description:
    "Explore our completed projects in water treatment, industrial fabrication, RO plants, STP, ETP, and infrastructure solutions across India.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `https://www.hyalineenviro.com/projects/${project.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema),
        }}
      />

      <div className="min-h-screen">
        

          <ProjectsClient projects={projects} />
      
      </div>
    </>
  );
}