"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

function ProcessStep({
  step,
  index,
  total,
}: {
  step: { step: string; title: string; description: string }
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex gap-8 pb-16 last:pb-0 md:gap-0 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Center node */}
      <div className="absolute left-6 top-0 z-10 flex -translate-x-1/2 flex-col items-center md:left-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/10"
        >
          <span className="text-sm font-black text-primary">{step.step}</span>
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, delay: index * 0.7 }}
          />
        </motion.div>

        {/* Connecting line */}
        {index < total - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
            className="w-px bg-gradient-to-b from-primary/40 to-primary/0"
          />
        )}
      </div>

      {/* Content card */}
      <div
        className={`ml-16 md:ml-0 md:w-1/2 ${
          index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
        }`}
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="glow-card rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
        >
          <div className="relative z-10">
            <h3 className="mb-3 text-xl font-bold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  )
}

export function Process() {
  const { t, tArray } = useLanguage()
  const steps = tArray("process.steps")
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="process" className="noise-overlay relative overflow-hidden py-28 md:py-40">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(251,175,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,175,58,0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {t("process.badge")}
          </motion.span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("process.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("process.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
