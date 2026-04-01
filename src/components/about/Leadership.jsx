// // components/about/Leadership.jsx

// export default function Leadership() {
//   return (
//     <section className="py-20 max-w-6xl mx-auto px-6 text-center">
//       <h2 className="text-3xl font-bold mb-6">Our Leadership</h2>

//       <p className="text-[var(--heading-text)] max-w-3xl mx-auto">
//         Our leadership team consists of experienced engineers, project managers,
//         and industry specialists delivering technical excellence and innovation.
//       </p>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";

const team = [
  {
    name: "Naresh Reddy Tumu",
    role: "Chief Executive Officer",
    image: "/images/leaders/NRT.jpg",
    bg: "bg-[#EDE6D6]",
  },
  {
    name: "Yashwanth Reddy Nomula",
    role: "Director",
    image: "/images/leaders/YRN.jpg",
    bg: "bg-[#DCE3EA]",
  },
  {
    name: "G. Hari Prasad",
    role: "Director",
    image: "/images/leaders/GHP.png",
    bg: "bg-[#EDE6D6]",
  },
];

export default function LeadershipSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
        variant="product"
          tag="Our Team"
          title="Meet Our Leadership"
          description="Driven by expertise and innovation, our leadership team ensures excellence in delivering sustainable water and engineering solutions."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function TeamCard({ member }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Background */}
      <div className={`${member.bg} h-[340px] md:h-[380px] relative`}>
        {/* Image */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top group-hover:scale-105 transition duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-5 text-white">
          <h3 className="text-lg md:text-xl font-semibold leading-tight">
            {member.name}
          </h3>
          <p className="text-sm opacity-90">{member.role}</p>
        </div>
      </div>
    </div>
  );
}
