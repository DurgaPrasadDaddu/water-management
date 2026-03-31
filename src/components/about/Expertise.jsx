// components/about/Expertise.jsx

const items = [
  "WTP", "ETP", "STP", "RO Systems", "ZLD Systems", "MEE", "ATFD",
  "MS & SS Fabrication", "Industrial Tanks", "Platforms", "Custom Equipment"
];

export default function Expertise() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Expertise</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}