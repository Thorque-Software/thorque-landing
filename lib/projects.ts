export type Project = {
  slug: string
  name: string
  logo: string
  /** keys under portfolio.services in the message files */
  services: string[]
  ownProduct?: boolean
  /** for pure-white wordmarks, which would vanish on the light logo panel */
  invertLogo?: boolean
  /** screenshots for the detail page. `caption` takes a message key, or plain text if it isn't one. */
  gallery?: { src: string; caption?: string }[]
  /** public site, when the project has one */
  url?: string
  /** message key for the link button; defaults to portfolio.visit_site */
  urlLabel?: string
  /** "pair" puts two tall screenshots side by side instead of stacking them */
  galleryLayout?: "stack" | "pair"
}

export const projects: Project[] = [
  {
    slug: "arroyo-fitness",
    name: "Arroyo Fitness",
    logo: "/empresas/arroyofitness.webp",
    services: ["stock", "crm", "ecommerce", "ai_agent"],
    url: "https://arroyofitness.com.ar/",
    gallery: [
      { src: "/empresas/arroyoFitness/ecommerce.webp", caption: "portfolio.services.ecommerce" },
      { src: "/empresas/arroyoFitness/stock.webp", caption: "portfolio.services.stock" },
      { src: "/empresas/arroyoFitness/chatwoot.webp", caption: "Chatwoot" },
    ],
  },
  {
    slug: "credimundo",
    url: "https://www.instagram.com/credimundoo/",
    urlLabel: "portfolio.visit_instagram",
    name: "Credimundo",
    logo: "/empresas/credimundo.webp",
    services: ["crm", "ai"],
    gallery: [{ src: "/empresas/credimundo/chatwoot.webp", caption: "Chatwoot" }],
  },
  {
    slug: "rba-residents",
    url: "https://rbaresidences.com/",
    name: "RBA Residents",
    logo: "/empresas/rbaresidents.webp",
    services: ["management_system", "integration"],
    invertLogo: true,
    gallery: [
      { src: "/empresas/rbaresidents/sistema1.webp" },
      { src: "/empresas/rbaresidents/sistema2.webp" },
      { src: "/empresas/rbaresidents/sistema3.webp" },
      { src: "/empresas/rbaresidents/sistema4.webp" },
    ],
  },
  {
    slug: "agribusiness",
    url: "https://agriecuador.com/",
    name: "Agribusiness",
    logo: "/empresas/agribusiness.webp",
    services: ["management_system", "app"],
    invertLogo: true,
    galleryLayout: "pair",
    gallery: [
      { src: "/empresas/agribusiness/sistema1.webp" },
      { src: "/empresas/agribusiness/sistema2.webp" },
    ],
  },
  { slug: "grid", name: "Grid", logo: "/empresas/grid.webp", services: ["app"] },
  {
    slug: "hopeslab",
    url: "https://hopeslab.com",
    name: "HopesLab",
    logo: "/empresas/hopeslab.webp",
    services: ["app"],
    galleryLayout: "pair",
    gallery: [
      { src: "/empresas/hopeslab/app1.webp" },
      { src: "/empresas/hopeslab/app2.webp" },
    ],
  },
  {
    slug: "ocularis",
    url: "https://ocularis.com.ar/",
    name: "Ocularis",
    logo: "/empresas/ocularis.webp",
    services: ["alerts"],
    gallery: [{ src: "/empresas/ocularis/sistema.webp" }],
  },
  {
    slug: "wade",
    url: "https://wade.thorque.com.ar",
    name: "Wade",
    logo: "/empresas/wade.webp",
    services: ["ai", "integration"],
    ownProduct: true,
    gallery: [
      { src: "/empresas/wade/sistema.webp" },
      { src: "/empresas/wade/sistema2.webp" },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
