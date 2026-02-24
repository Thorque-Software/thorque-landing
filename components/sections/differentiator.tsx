"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight } from "lucide-react"

export function Differentiator() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border/20 bg-card"
        >
          {/* Animated background */}
          <div className="pointer-events-none absolute inset-0">
            {/* Moving gradient blobs */}
            <motion.div
              style={{ y: bgY }}
              className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20"
            />
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
              className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px] dark:bg-accent/15"
            />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(rgba(251,175,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,175,58,0.4) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Scanning light effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(251,175,58,0.03) 50%, transparent 100%)",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 px-8 py-20 md:px-20 md:py-28">
            <div className="mx-auto max-w-4xl text-center">
              {/* Main statement */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
              >
                {t("differentiator.title")}
              </motion.h2>

              {/* Highlight with gradient text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mb-10 text-pretty text-2xl font-bold md:text-3xl lg:text-4xl"
                style={{
                  background: "linear-gradient(135deg, #FBAF3A 0%, #F8770B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("differentiator.highlight")}
              </motion.p>

              {/* Animated divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "120px" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="mx-auto mb-10 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-primary px-10 py-5 text-base font-bold text-primary-foreground transition-all hover:shadow-[0_0_50px_rgba(251,175,58,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {t("differentiator.cta")}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FBAF3A] to-[#F8770B] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
