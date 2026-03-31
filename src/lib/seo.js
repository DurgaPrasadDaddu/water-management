import { defaultMetadata } from "./metadata";

export function generateSEO({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}) {
  return {
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,

    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: `${defaultMetadata.metadataBase}${path}`,
      images: [image],
    },

    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}