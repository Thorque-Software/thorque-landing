"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import {
  ClipboardList,
  UserX,
  Unplug,
  HandMetal,
  BarChart3,
  ServerCrash,
} from "lucide-react"

const icons = [ClipboardList, UserX, Unplug, HandMetal, BarChart3, ServerCrash]

function ProblemCard({
  item,
  index,
  Icon,
}: {
  item: { title: string; description: string }
  index: number
  Icon: React.ComponentType<{ className?: string }>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, type: "spring", stiffness: 400 } }}
      className="glow-card group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
    >
      <div className="relative z-10">
        {/* Icon with animated ring */}
        <div className="relative mb-5 inline-flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15 dark:bg-red-500/10 dark:text-red-400">
            <Icon className="h-5 w-5" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-destructive/20 dark:border-red-500/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
          />
        </div>

        {/* Number tag */}
        <span className="absolute right-5 top-5 text-5xl font-black text-foreground/[0.03]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mb-2 text-lg font-bold text-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Problems() {
  const { t, tArray } = useLanguage()
  const items = tArray("problems.items")
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="problems" className="noise-overlay relative overflow-hidden py-28 md:py-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/3 blur-[150px] dark:bg-red-500/5" />
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-5 py-2 text-sm font-medium text-destructive dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {t("problems.badge")}
          </motion.span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("problems.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("problems.subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="perspective-1000 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i] || ClipboardList
            return <ProblemCard key={i} item={item} index={i} Icon={Icon} />
          })}
        </div>
      </div>
    </section>
  )
}
