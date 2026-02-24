"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Linkedin, Mail, ArrowUpRight, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const navLinks = [
    { label: t("nav.services"), href: "#solutions" },
    { label: t("nav.architecture"), href: "#architecture" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              {mounted ? (
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={theme === "dark" ? "/thorque-light.svg" : "/thorque-dark.svg"}
                  alt="Thorque Logo"
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="h-10 w-32 animate-pulse bg-secondary/50 rounded-lg" />
              )}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:contacto@thorque.com.ar"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/thorque-software"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/thorque_software/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579726687034"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              {t("footer.links_title")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-px group-hover:translate-x-px" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              {t("footer.contact_title")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@thorque.com.ar"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                contacto@thorque.com.ar
              </a>
              <span className="text-sm text-muted-foreground">
                {t("footer.location")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Thorque Software. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground/60">{t("footer.operational")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
