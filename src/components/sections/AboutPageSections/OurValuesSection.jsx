import { Users, Cpu, Gauge } from "lucide-react";
import SectionWrapper from "../../ui/SectionWrapper";

const values = [
  {
    icon: Users,
    title: "People",
    description:
      "Our people are the foundation of our success. With a team of skilled engineers, technicians, and professionals, we ensure innovation, quality, and reliability in every project we deliver. Together, we drive sustainable growth and excellence.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "We leverage advanced technologies in water and wastewater treatment systems to deliver efficient, innovative, and sustainable solutions. From design to execution, our focus is on precision, performance, and continuous improvement.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "We are committed to delivering high-performance solutions that ensure efficiency, compliance, and long-term reliability. Our proven track record reflects our dedication to quality execution and customer satisfaction.",
  },
];

export default function OurValuesSection() {
  return (
    <SectionWrapper className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--heading-title)] mb-10">
          Our Values
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((item, index) => (
            <ValueCard key={index} item={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ValueCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[var(--border)]">
      
      {/* Icon */}
      <div className="mb-5">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-[var(--heading-tag)] mb-3">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--heading-text)] text-sm md:text-base leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}