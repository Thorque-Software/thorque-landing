"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useTheme } from "next-themes"
import { useLanguage } from "@/hooks/use-language"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => { setMounted(true) }, [])
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20))

  const navLinks = [
    { label: t("nav.services"), href: "#solutions" },
    { label: t("nav.architecture"), href: "#architecture" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/70 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-background/10"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {mounted ? (
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              src={theme === "dark" ? "/thorque-light.svg" : "/thorque-dark.svg"}
              alt="Thorque Logo"
              className="h-11 w-auto"
            />
          ) : (
            <div className="h-11 w-40 animate-pulse bg-secondary/50 rounded-lg" />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground group"
            >
              <span className="relative z-10">{link.label}</span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-secondary/0"
                whileHover={{ backgroundColor: "var(--secondary)" }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-1">
          {/* CTA Button (desktop) */}
          <a
            href="#contact"
            className="mr-2 hidden items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 md:inline-flex"
          >
            {t("hero.cta_primary")}
          </a>

          <button
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-secondary hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-border/30 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground"
              >
                {t("hero.cta_primary")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
