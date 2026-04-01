const baseUrl = "https://www.hyalineenviro.com";

//  ORGANIZATION (GLOBAL)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hyaline Enviro Engineers Pvt Ltd",
  url: baseUrl,
  logo: `${baseUrl}/logo.webp`,
  sameAs: [
    "https://www.instagram.com/hyalineenviro",
    "https://www.youtube.com/@hyalineenviroengineerspvtl5146",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9390701234",
    contactType: "customer support",
  },
};

//  LOCAL BUSINESS

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringCompany",
  name: "Hyaline Enviro Engineers Pvt Ltd",
  url: baseUrl,
  telephone: "+91-9390701234",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Green Park Road, Jeedimetla",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500067",
    addressCountry: "IN",
  },
};

//  ABOUT PAGE

export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Hyaline Enviro Engineers",
  description:
    "Engineering company specializing in water treatment and industrial fabrication.",
};

//  SERVICE PAGE

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Hyaline Enviro Engineers",
  },
});

//  PRODUCT PAGE

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: "Hyaline Enviro Engineers",
  },
});

//  SOLUTION PAGE

export const solutionSchema = (solution) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: solution.name,
  description: solution.description,
});

//  FABRICATION PAGE

export const fabricationSchema = (item) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: item.title,
  description: item.description,
});

//  PROJECTS / CASE STUDY

export const projectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.name,
  description: project.description,
  locationCreated: project.location,
});

//  BLOG PAGE

export const blogSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: post.image,
  author: {
    "@type": "Organization",
    name: "Hyaline Enviro Engineers",
  },
  publisher: {
    "@type": "Organization",
    name: "Hyaline Enviro Engineers",
  },
});

//  CONTACT PAGE

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Hyaline Enviro Engineers",
};

//  BREADCRUMB

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${baseUrl}${item.href}`,
  })),
});

//  FAQ (OPTIONAL BUT POWERFUL)

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
