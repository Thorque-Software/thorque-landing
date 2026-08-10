"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "next-themes"
import { ArrowRight, Calendar } from "lucide-react"

/* ── Animated particles canvas ─── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let animId: number | null = null
    let onScreen = true
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Create particles. The link pass below is O(n²), so the count sets the frame cost.
    const count = Math.min(40, Math.floor(window.innerWidth / 32))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (canvas?.width ?? 1920),
        y: Math.random() * (canvas?.height ?? 1080),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 175, 58, ${p.opacity})`
        ctx.fill()
      }

      // Link nearby particles. One path for all the lines instead of a
      // beginPath/stroke pair per pair, and squared distances to skip the sqrt.
      const MAX = 120
      const MAX2 = MAX * MAX
      ctx.strokeStyle = "rgba(251, 175, 58, 0.05)"
      ctx.lineWidth = 0.5
      ctx.beginPath()
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          if (dx * dx + dy * dy < MAX2) {
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
          }
        }
      }
      ctx.stroke()

      animId = requestAnimationFrame(draw)
    }

    function start() {
      if (animId === null) draw()
    }
    function stop() {
      if (animId !== null) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }

    // Don't burn frames on a canvas nobody is looking at.
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        onScreen && !document.hidden ? start() : stop()
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    function onVisibility() {
      document.hidden || !onScreen ? stop() : start()
    }
    document.addEventListener("visibilitychange", onVisibility)

    start()
    return () => {
      stop()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-[2]" />
}

/* ── Typing effect for subtitle ─── */
function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    idx.current = 0
    setDisplayed("")
    setDone(false)
    const interval = setInterval(() => {
      idx.current++
      if (idx.current >= text.length) {
        setDisplayed(text)
        setDone(true)
        clearInterval(interval)
      } else {
        setDisplayed(text.slice(0, idx.current))
      }
    }, 20)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-[2px] h-5 bg-primary ml-0.5 align-middle"
        />
      )}
    </span>
  )
}

/* ── HERO ─── */
export function Hero() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.9], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.9], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.9])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background — the old coverr.co source 301s to their homepage and returns HTML,
          so every load paid a cross-origin round-trip and still fell back to this colour */}
      <div className="video-overlay absolute inset-0 bg-[#090918]" />

      {/* Particles */}
      <ParticleField />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="animate-float-slow absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#FBAF3A]/10 blur-[100px]" />
        <div className="animate-float-reverse absolute right-[15%] top-[40%] h-48 w-48 rounded-full bg-[#F8770B]/8 blur-[80px]" />
        <div className="animate-float-diagonal absolute bottom-[20%] left-[30%] h-56 w-56 rounded-full bg-[#FBAF3A]/6 blur-[120px]" />
      </div>

      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden opacity-[0.03]">
        <div
          className="absolute left-0 right-0 h-[2px] bg-primary"
          style={{ animation: "scan-line 8s linear infinite" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 flex min-h-screen items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}

            {/* Title with word-by-word stagger */}
            <motion.h1
              className="mb-8 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
            >
              {t("hero.title").split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                  {"\u00A0"}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle with typing effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              <TypingText text={t("hero.subtitle")} />
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-[#FBAF3A] px-10 py-4 text-sm font-bold text-[#0a0a1a] transition-all hover:shadow-[0_0_40px_rgba(251,175,58,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta_primary")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBAF3A] to-[#F8770B] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-foreground/5 px-10 py-4 text-sm font-bold text-foreground backdrop-blur-md transition-all hover:border-[#FBAF3A]/30 hover:bg-foreground/10"
              >
                <Calendar className="h-4 w-4" />
                {t("hero.cta_secondary")}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/20 p-1.5"
        >
          <motion.div className="h-2 w-1 rounded-full bg-[#FBAF3A]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
