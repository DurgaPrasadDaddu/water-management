export const marketSegments = {
 
  // 🏭 INDUSTRIAL SECTOR
 
  industrial: {
    title: "Industrial Sector",
    slug: "industrial",
    image: "/images/marketsegments/industrial.webp",
    metaTitle:
      "Industrial Water Treatment Solutions | Hyaline Enviro Engineers",
    metaDescription:
      "Advanced water and wastewater treatment solutions for pharmaceutical, chemical, textile, manufacturing, and power industries.",

    description:
      "We deliver high-performance water and wastewater treatment solutions for diverse industrial sectors, ensuring regulatory compliance, operational efficiency, and sustainability.",

    industries: [
      {
        name: "Pharmaceutical",
        slug: "pharmaceutical",
        image: "/images/marketsegments/industries/pharmaceutical.webp",

        shortDescription:
          "High purity water systems for pharmaceutical manufacturing.",

        description:
          "Pharmaceutical industries require ultra-pure water systems and stringent wastewater treatment to comply with regulatory standards like WHO-GMP and USFDA.",

        problems: [
          "Strict regulatory compliance (WHO-GMP, USFDA)",
          "High COD/BOD wastewater",
          "Requirement for ultra-pure water",
          "Zero Liquid Discharge (ZLD)",
        ],

        solutions: [
          "RO + EDI + UF Systems",
          "Effluent Treatment Plant (ETP)",
          "ZLD Systems",
          "Clean-in-Place (CIP) Systems",
        ],

        relatedSolutions: ["ro-plant", "zld-system"],
        relatedServices: ["amc", "operation-maintenance"],
      },

      {
        name: "Chemical",
        slug: "chemical",
        image: "/images/marketsegments/industries/chemical.webp",

        shortDescription:
          "Robust systems for complex and hazardous effluents.",

        description:
          "Chemical industries generate highly toxic and complex wastewater requiring advanced multi-stage treatment systems.",

        problems: [
          "Toxic and hazardous discharge",
          "High TDS and salinity",
          "Corrosive chemicals",
          "Variable effluent composition",
        ],

        solutions: [
          "Neutralization Systems",
          "Multi-stage ETP",
          "Evaporation Systems",
          "Chemical dosing systems",
        ],

        relatedSolutions: ["etp", "evaporator"],
        relatedServices: ["amc"],
      },

      {
        name: "Textile",
        slug: "textile",
        image: "/images/marketsegments/industries/textile.webp",

        shortDescription:
          "Effluent treatment for dyeing and textile processing.",

        description:
          "Textile industries produce large volumes of colored wastewater requiring specialized treatment for reuse and compliance.",

        problems: [
          "Color removal challenges",
          "High chemical usage",
          "Large water consumption",
        ],

        solutions: [
          "Color removal systems",
          "Biological treatment",
          "ZLD Systems",
        ],
      },

      {
        name: "Manufacturing",
        slug: "manufacturing",
        image: "/images/marketsegments/industries/manufacturing.jpeg",

        shortDescription:
          "Water systems for industrial manufacturing processes.",

        description:
          "Manufacturing units require reliable water treatment systems for process, cooling, and wastewater management.",

        problems: [
          "Scaling and fouling",
          "Cooling water issues",
          "Wastewater discharge compliance",
        ],

        solutions: [
          "Cooling water treatment",
          "RO Systems",
          "Effluent treatment plants",
        ],
      },

      {
        name: "Food Processing",
        slug: "food-processing",
        image: "/images/marketsegments/industries/food.webp",

        shortDescription:
          "Hygienic water treatment for food & beverage industries.",

        description:
          "Food industries require hygienic water systems and efficient wastewater treatment to meet safety standards.",

        problems: [
          "High organic load",
          "Strict hygiene requirements",
          "Water reuse challenges",
        ],

        solutions: [
          "RO + UV systems",
          "Biological ETP",
          "Water recycling systems",
        ],
      },

      {
        name: "Power Plants",
        slug: "power-plants",
        image: "/images/marketsegments/industries/power.webp",

        shortDescription:
          "High efficiency water systems for power generation.",

        description:
          "Power plants require high-purity water for boilers and efficient wastewater management systems.",

        problems: [
          "Boiler scaling",
          "High water consumption",
          "Cooling tower efficiency",
        ],

        solutions: [
          "DM Plants",
          "RO Systems",
          "Cooling tower treatment",
        ],
      },
    ],
  },

 
  // 🏢 COMMERCIAL & INSTITUTIONAL
 
  commercial: {
    title: "Commercial & Institutional",
    image: "/images/marketsegments/commercial.webp",
    slug: "commercial",
    metaTitle:
      "Commercial Water Treatment Solutions | Hyaline Enviro Engineers",
    metaDescription:
      "Water treatment solutions for hospitals, schools, hotels, malls, offices, and apartments.",

    description:
      "We provide sustainable water and wastewater solutions for commercial buildings and institutional infrastructure.",

    industries: [
      {
        name: "Hospitals",
        slug: "hospitals",
        image: "/images/marketsegments/commercial/hospital.jpg",
        shortDescription:
          "Safe and compliant water systems for healthcare facilities.",
      },
      {
        name: "Schools",
        slug: "schools",
        image: "/images/marketsegments/commercial/school.jpg",
        shortDescription:
          "Clean water solutions for educational institutions.",
      },
      {
        name: "Hotels",
        slug: "hotels",
        image: "/images/marketsegments/commercial/hotel.jpg",
        shortDescription:
          "Water recycling and treatment systems for hospitality.",
      },
      {
        name: "Malls",
        slug: "malls",
        image: "/images/marketsegments/commercial/mall.jpg",
        shortDescription:
          "Efficient water management for large commercial spaces.",
      },
      {
        name: "Restaurants",
        slug: "restaurants",
        image: "/images/marketsegments/commercial/restaurant.png",
        shortDescription:
          "Compact water treatment systems for food businesses.",
      },
      {
        name: "Offices",
        slug: "offices",
        image: "/images/marketsegments/commercial/office.jpg",
        shortDescription:
          "Smart water solutions for corporate spaces.",
      },
      {
        name: "Apartments",
        slug: "apartments",
        image: "/images/marketsegments/commercial/apartment.webp",
        shortDescription:
          "STP and water recycling systems for residential complexes.",
      },
    ],
  },

 
  // 🏛 GOVERNMENT & MUNICIPAL
 
  government: {
    title: "Government & Municipal",
    image: "/images/marketsegments/government.webp",
    slug: "government",
    metaTitle:
      "Municipal Water Treatment Solutions | Hyaline Enviro Engineers",
    metaDescription:
      "Large-scale water and wastewater solutions for municipalities, smart cities, and public infrastructure.",

    description:
      "We design and implement large-scale water treatment infrastructure for government bodies and municipal corporations.",

    industries: [
      {
        name: "Municipal Corporations",
        slug: "municipal-corporations",
        image: "/images/marketsegments/government/municipal.webp",
        shortDescription:
          "End-to-end municipal water and wastewater treatment.",
      },
      {
        name: "Smart Cities",
        slug: "smart-cities",
        image: "/images/marketsegments/government/smart-city.webp",
        shortDescription:
          "Advanced water infrastructure for smart city projects.",
      },
      {
        name: "Water Authorities",
        slug: "water-authorities",
        image: "/images/marketsegments/government/water-authority.webp",
        shortDescription:
          "Bulk water supply and treatment systems.",
      },
      {
        name: "Public Infrastructure",
        slug: "public-infrastructure",
        image: "/images/marketsegments/government/infrastructure.jpg",
        shortDescription:
          "Water systems for large public infrastructure projects.",
      },
    ],
  },
};