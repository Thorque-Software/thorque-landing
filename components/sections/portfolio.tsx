"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { projects, type Project } from "@/lib/projects"

// a dot colour per kind of work, so the tags read as categories at a glance
const serviceColors: Record<string, string> = {
  stock: "#3BBEEF",
  crm: "#3BBEEF",
  leads: "#3BBEEF",
  properties: "#3BBEEF",
  management_system: "#3BBEEF",
  ecommerce: "#88BF36",
  app: "#88BF36",
  internal_app: "#88BF36",
  ai: "#A78BFA",
  ai_agent: "#A78BFA",
  anses: "#A78BFA",
  alerts: "#FBAF3A",
  portals: "#FBAF3A",
  field_staff: "#FBAF3A",
  integration: "#FBAF3A",
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  // t() echoes the key back when the string is missing
  const taglineKey = `portfolio.projects.${project.slug}.tagline`
  const tagline = t(taglineKey) === taglineKey ? null : t(taglineKey)

  // chips sit over the logo, so prefer a terse label when one exists
  const chipLabel = (service: string) => {
    const short = `portfolio.services_short.${service}`
    return t(short) === short ? t(`portfolio.services.${service}`) : t(short)
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 transition-colors duration-300 hover:border-primary/40"
      >
        {/* Logo on a light panel, so every brand keeps its own colours */}
        <div className="relative h-56 shrink-0 overflow-hidden bg-gradient-to-b from-[#F6F4F1] to-[#E4E0DA]">
          <div className="absolute -bottom-16 left-1/2 h-2/3 w-[130%] -translate-x-1/2 rounded-full bg-primary/0 blur-[60px] transition-all duration-700 group-hover:bg-primary/25" />
          <img
            src={project.logo}
            alt={project.name}
            loading="lazy"
            className={`relative h-full w-full object-contain px-8 pt-8 pb-14 transition-transform duration-500 group-hover:scale-[1.04] ${
              project.invertLogo ? "invert" : ""
            }`}
          />

          {/* Tags sit over the logo. Dark pills so they read on the light panel
              in either theme — the panel colour doesn't follow the theme. */}
          <ul className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 p-4">
            {project.services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-1.5 rounded-md bg-[#16161A]/85 px-2 py-1 text-[11px] text-white/90"
              >
                <span
                  className="h-2 w-2 rounded-[2px]"
                  style={{ backgroundColor: serviceColors[service] ?? "#FBAF3A" }}
                />
                {chipLabel(service)}
              </li>
            ))}
            {project.ownProduct && (
              <li className="flex items-center rounded-md bg-primary px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-primary-foreground">
                {t("portfolio.own_product")}
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="min-h-[2rem] text-lg font-bold leading-tight text-foreground">
            {project.name}
          </h3>

          {/* Divider + blurb. The min-height keeps every card's button on the same line. */}
          <div className="my-5 flex min-h-[6.5rem] flex-col">
            <div className="mb-5 h-px w-full bg-border/60" />
            {tagline && (
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {tagline}
              </p>
            )}
          </div>

          <span className="mt-auto flex w-full items-center justify-between gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-primary-foreground transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(251,175,58,0.3)]">
            {t("portfolio.view_case")}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export function Portfolio() {
  const { t } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="noise-overlay relative overflow-hidden py-16 md:py-24">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(251,175,58,0.5) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            {t("portfolio.badge")}
          </span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("portfolio.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        {/* Grid — items-stretch so every card in a row is the same height */}
        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
