import { HeroHeader, ContentSection } from "@/types/contents"


/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `FlareNotes`,
  subheader: ``,
  image: `/hero-img.webp`,
}

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What makes Next Landing possible`,
  content: []
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Features Available`,
  image: `/features-img.webp`,
  content: [
    {
      text: `Community`,
      subtext: `Collective Chats & Solo Conversations`,
      icon: "fileSearch",
      id: 1,
    },
    {
      text: `Notes`,
      subtext: `Publish Your Notes & Get endorsed`,
      icon: "barChart",
      id: 2,
    },
    {
      text: `Text Editor`,
      subtext: `Craft Your Digital Notebook!`,
      icon: "settings",
      id: 3
    },
  ],
}
