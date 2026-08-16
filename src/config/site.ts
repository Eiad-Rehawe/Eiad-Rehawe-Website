/**
 * Central site configuration.
 * Edit this file to update contact info, socials, branding, and CTA copy —
 * no UI component needs to change.
 */

export const siteConfig = {
  name: "Eiad Rehawe",
  firstName: "Eiad",
  title: "Software Engineer",
  tagline: "I turn ideas, business processes, and complex problems into reliable software.",
  shortBio:
    "From idea to production — I design and build scalable web applications, business systems, mobile apps, and intelligent software.",

  email: "eng.eiadrehawe@gmail.com",
  location: "Syria", // PLACEHOLDER — update with your real city/country
  resumeUrl: "", // PLACEHOLDER — add a link to a hosted CV/resume PDF

  // WhatsApp number in international format, no spaces, no leading "+".
  // Example: "9627XXXXXXXX"
  WHATSAPP_NUMBER: "963946158906", // PLACEHOLDER — replace with your real WhatsApp number

  // Context-specific opening messages used across the site via createWhatsAppLink().
  whatsappMessages: {
    default: "Hello Eiad, I would like to discuss a software project with you.",
    hero: "Hello Eiad, I would like to discuss a software project with you.",
    service: (serviceTitle: string) =>
      `Hello Eiad, I'm interested in "${serviceTitle}". I'd like to discuss my project.`,
    project: (projectName: string) =>
      `Hello Eiad, I saw your "${projectName}" project and I'd like to discuss something similar.`,
    process: "Hello Eiad, I have a project in mind and would like to know how we can get started.",
    finalCta: "Hello Eiad, I'm ready to talk about my project. Here's what I'm trying to build:",
  },

  social: {
    github: "https://github.com/Eiad-Rehawe", // PLACEHOLDER
    // linkedin: "https://linkedin.com/in/eiadrehawe", // PLACEHOLDER
    twitter: "", // PLACEHOLDER
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
