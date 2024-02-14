import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://nextlanding.rdev.pro"

export const siteConfig: SiteConfig = {
  name: "Flarenotes",
  author: "Zetafy",
  description:
    "Modern note taking & sharing app. Take notes, and share with others.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Landing Page",
    "Template",
    "Starter",
  ],
  url: {
    base: baseUrl,
    author: "https://redpangilinan.live",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "janreynald.pangilinan@gmail.com",
}
