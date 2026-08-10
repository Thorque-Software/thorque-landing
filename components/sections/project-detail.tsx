"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import type { Project } from "@/lib/projects"
import { projects } from "@/lib/projects"

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage()

  // t() echoes the key back when a string is missing, so copy that hasn't been
  // written yet simply doesn't render instead of printing "portfolio.projects.x".
  const optional = (key: string) => {
    const value = t(key)
    return value === key ? null : value
  }

  const summary = optional(`portfolio.projects.${project.slug}.summary`)
  const story = (["challenge", "solution", "result"] as const)
    .map((block) => ({ block, text: optional(`portfolio.projects.${project.slug}.${block}`) }))
    .filter((b): b is { block: (typeof b)["block"]; text: string } => b.text !== null)

  const gallery = project.gallery ?? []
  const hasGallery = gallery.length > 0

  // With no challenge/solution/result there is nothing to fill the left column,
  // so the summary moves out of the full-width intro and into it instead.
  const summaryInColumn = Boolean(summary) && story.length === 0 && hasGallery

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Header />
      <main className="relative pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/#portfolio"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("portfolio.back")}
          </Link>

          {/* Title bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* small brand chip — a pill rather than a square, since several
                    of these wordmarks are 3:1 or wider */}
                <span className="flex h-14 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-b from-[#F6F4F1] to-[#E4E0DA] px-4">
                  <img
                    src={project.logo}
                    alt=""
                    aria-hidden="true"
                    className={`h-7 w-auto max-w-[130px] object-contain ${
                      project.invertLogo ? "invert" : ""
                    }`}
                  />
                </span>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                  {project.name}
                </h1>
                {project.ownProduct && (
                  <span className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                    {t("portfolio.own_product")}
                  </span>
                )}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_rgba(251,175,58,0.3)]"
                >
                  {t(project.urlLabel ?? "portfolio.visit_site")}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>

            {summary && !summaryInColumn && (
              <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {summary}
              </p>
            )}
          </motion.div>

          {/* Copy on the left, screenshots on the right */}
          <div
            className={`mt-14 gap-12 lg:gap-16 ${
              hasGallery ? "grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]" : ""
            }`}
          >
            <div className="flex flex-col gap-12">
              {summaryInColumn && summary && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="text-pretty text-lg leading-relaxed text-muted-foreground"
                >
                  {summary}
                </motion.p>
              )}

              {story.map(({ block, text }, i) => (
                <motion.section
                  key={block}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <h2 className="mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    <span className="h-px w-6 bg-primary/50" />
                    {t(`portfolio.${block}`)}
                  </h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </motion.section>
              ))}

              {project.services.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    <span className="h-px w-6 bg-primary/50" />
                    {t("portfolio.what_we_built")}
                  </h2>
                  <ul className="flex flex-col gap-2.5">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/50 px-5 py-3.5"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">
                          {t(`portfolio.services.${service}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>

            {hasGallery && (
              <div
                className={
                  project.galleryLayout === "pair"
                    ? "grid grid-cols-2 gap-4 self-start"
                    : "flex flex-col gap-8"
                }
              >
                {gallery.map(({ src, caption }) => {
                  // a caption is either a message key or the label itself
                  const label = caption ? optional(caption) ?? caption : null
                  return (
                    <motion.figure
                      key={src}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col gap-2.5"
                    >
                      <img
                        src={src}
                        alt={label ?? ""}
                        loading="lazy"
                        className="w-full rounded-2xl border border-border/50 shadow-lg shadow-background/20"
                      />
                      {label && (
                        <figcaption className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                          {label}
                        </figcaption>
                      )}
                    </motion.figure>
                  )
                })}
              </div>
            )}
          </div>

          {/* Next project + CTA */}
          <div className="mt-20 flex flex-col gap-4 border-t border-border/30 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/portfolio/${next.slug}`}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("portfolio.next_project")}
              <span className="font-bold text-foreground">{next.name}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-border/50 px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              {t("differentiator.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="h-24" />
      </main>
      <Footer />
    </>
  )
}
