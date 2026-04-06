// import Image from "next/image";
// import SectionWrapper from "../../ui/SectionWrapper";
// import SectionHeading from "../../ui/SectionHeading";

// const team = [
//   {
//     name: "Naresh Reddy Tumu",
//     role: "Chief Executive Officer",
//     image: "/images/leaders/NRT.webp",
//     bg: "bg-[#EDE6D6]",
//   },
//   {
//     name: "Yashwanth Reddy Nomula",
//     role: "Director",
//     image: "/images/leaders/YRN.webp",
//     bg: "bg-[#DCE3EA]",
//   },
//   {
//     name: "G. Hari Prasad",
//     role: "Director",
//     image: "/images/leaders/GHP.webp",
//     bg: "bg-[#EDE6D6]",
//   },
// ];

// export default function LeadershipSection() {
//   return (
//     <SectionWrapper className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <SectionHeading
//         variant="product"
//           tag="Our Team"
//           title="Meet Our Leadership"
//           description="Driven by expertise and innovation, our leadership team ensures excellence in delivering sustainable water and engineering solutions."
//         />

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <TeamCard key={index} member={member} />
//           ))}
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }

// function TeamCard({ member }) {
//   return (
//     <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
//       {/* Background */}
//       <div className={`${member.bg} h-[340px] md:h-[380px] relative`}>
//         {/* Image */}
//         <Image
//           src={member.image}
//           alt={member.name}
//           fill
//           priority
//           sizes="(max-width: 768px) 100vw, 50vw"
//           className="object-cover object-top group-hover:scale-105 transition duration-500"
//         />

//         {/* Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

//         {/* Content */}
//         <div className="absolute bottom-0 left-0 p-5 text-white">
//           <h3 className="text-lg md:text-xl font-semibold leading-tight">
//             {member.name}
//           </h3>
//           <p className="text-sm opacity-90">{member.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import SectionWrapper from "../../ui/SectionWrapper";
import SectionHeading from "../../ui/SectionHeading";

export default function LeadershipSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          variant="product"
          tag="Our Team"
          title="A Team Driven by Expertise & Innovation"
          description="Our strength lies in a highly experienced and dedicated team committed to delivering efficient, reliable, and sustainable engineering solutions across industries."
        />

        {/* Team Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Experienced Professionals
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Our team brings years of industry experience in water treatment, environmental engineering, and industrial solutions.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Innovative Approach
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We adopt modern technologies and innovative strategies to deliver optimized and sustainable results.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Client-Centric Execution
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Every solution is tailored to meet client requirements with a focus on efficiency, compliance, and long-term performance.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Strong Technical Team
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Our engineers and specialists ensure precision in design, execution, and maintenance of systems.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Quality & Compliance
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We strictly adhere to industry standards and environmental regulations in all our projects.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800">
              Reliable Delivery
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Timely execution and consistent performance make us a trusted partner for industrial clients.
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}