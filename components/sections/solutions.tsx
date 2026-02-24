"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import {
  Zap,
  MessageSquare,
  Bot,
  Layers,
  BarChart3,
  Workflow,
} from "lucide-react"

const icons = [Zap, MessageSquare, Bot, Layers, BarChart3, Workflow]

/* 3D tilt card */
function TiltCard({
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
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
    >
      {/* Hover spotlight effect */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/0 blur-[60px] transition-all duration-700 group-hover:bg-primary/8" />

      {/* Animated border shimmer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="animate-shimmer-border absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="relative" style={{ transform: "translateZ(30px)" }}>
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-lg group-hover:shadow-primary/10">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Solutions() {
  const { t, tArray } = useLanguage()
  const items = tArray("solutions.items")
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="solutions" className="noise-overlay relative overflow-hidden py-28 md:py-40">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -left-1/4 top-0 h-full w-[150%] bg-gradient-to-r from-primary/3 via-transparent to-accent/3 opacity-50" />
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
            {t("solutions.badge")}
          </motion.span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("solutions.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("solutions.subtitle")}
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="perspective-1000 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i] || Zap
            return <TiltCard key={i} item={item} index={i} Icon={Icon} />
          })}
        </div>
      </div>
    </section>
  )
}
