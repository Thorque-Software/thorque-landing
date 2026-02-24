"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import {
  Server,
  Link2,
  ShieldCheck,
  Cloud,
  Boxes,
  GitBranch,
} from "lucide-react"

const icons = [Server, Link2, ShieldCheck, Cloud, Boxes, GitBranch]
const techStack = ["Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Vercel", "Docker", "OpenAI", "TypeScript", "Redis", "GraphQL", "Kubernetes"]

export function Architecture() {
  const { t, tArray } = useLanguage()
  const items = tArray("architecture.items")
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="architecture" className="noise-overlay relative overflow-hidden py-28 md:py-40">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(251,175,58,0.5) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="animate-float-slow absolute right-0 top-0 h-[700px] w-[700px] -translate-y-1/3 translate-x-1/3 rounded-full bg-primary/3 blur-[180px] dark:bg-primary/6" />
        <div className="animate-float-reverse absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-accent/2 blur-[150px] dark:bg-accent/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {t("architecture.badge")}
          </motion.span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("architecture.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("architecture.subtitle")}
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i] || Server
            const isLarge = i === 0 || i === 3
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className={`glow-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full border border-primary/5 transition-all duration-500 group-hover:border-primary/15 group-hover:scale-150" />
              </motion.div>
            )
          })}
        </div>

        {/* Infinite scrolling tech stack marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-2xl border border-border/30 bg-card/30 py-6 backdrop-blur-sm"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
