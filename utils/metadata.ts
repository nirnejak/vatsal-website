import type { Metadata } from "next"

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

export const config = {
  baseUrl: "https://vatsal.website", // Don't include slash at the end
  applicationName: "Vatsal Dhameliya",
  creator: "Vatsal Dhameliya",
  twitter: "@vats_al_",
  keywords: [
    "Vatsal",
    "Dhameliya",
    "Artificial Intelligence",
    "AI",
    "Machine Learning",
    "ML",
    "LLM",
    "Large Language Model",
    "Transformers",
    "Applied Scientist",
    "Scientist",
  ],
}

const getMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${config.baseUrl}/cover.png`

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    applicationName: config.applicationName,
    creator: config.creator,
    authors: [
      { name: "Vatsal Dhameliya", url: "https://nirnejak.com/" },
      { name: "Jitendra Nirnejak", url: "https://vatsal.website/" },
    ],
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    keywords: config.keywords,

    icons: {
      icon: "/favicon.ico",
      shortcut: "/icons/icon-512x512.png",
      apple: "/icons/icon-512x512.png",
    },
    manifest: `${config.baseUrl}/manifest.json`,

    openGraph: {
      type: "website",
      url: `${config.baseUrl}${path}`,
      siteName: config.applicationName,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
      // videos: "",  // INFO: og video option
    },

    twitter: {
      card: "summary_large_image",
      site: config.twitter,
      creator: config.twitter,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    appleWebApp: {
      capable: true,
      title: config.applicationName,
      startupImage: metaImage,
      statusBarStyle: "black-translucent",
    },

    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },

    appLinks: {},
  }
  return metadata
}

export default getMetadata
