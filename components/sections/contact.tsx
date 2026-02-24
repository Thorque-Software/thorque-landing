"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { Send, Mail, Linkedin, ArrowUpRight, MessageSquare, Calendar, Facebook, Instagram } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()
  const [focused, setFocused] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })


  const inputClasses = (name: string) =>
    `w-full rounded-xl border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:outline-none ${focused === name
      ? "border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30"
      : "border-border hover:border-muted-foreground/30"
    }`

  return (
    <section id="contact" className="noise-overlay relative overflow-hidden py-28 md:py-40">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute bottom-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 translate-y-1/4 rounded-full bg-primary/4 blur-[180px] dark:bg-primary/8" />
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
            {t("contact.badge")}
          </motion.span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("contact.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 lg:pt-0"
          >
            <form
              action="https://formspree.io/f/mvgowbgg"
              method="POST"
              className="glow-card h-full rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("contact.name_placeholder")}
                    className={inputClasses("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("contact.email_placeholder")}
                    className={inputClasses("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={t("contact.message_placeholder")}
                    className={`resize-none ${inputClasses("message")}`}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-primary px-10 py-4 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_rgba(251,175,58,0.25)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t("contact.form.submit")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FBAF3A] to-[#F8770B] opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {/* WhatsApp card */}
            <a
              href="https://wa.me/5493416009423"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="relative z-10 min-w-0">
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="truncate text-sm text-muted-foreground">+54 9 3416 00-9423</p>
              </div>
              <ArrowUpRight className="relative z-10 ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* Calendly card */}
            <a
              href="https://calendly.com/thorque/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="relative z-10 min-w-0">
                <p className="text-sm font-semibold text-foreground">{t("hero.cta_secondary")}</p>
                <p className="truncate text-sm text-muted-foreground">Calendly 30min</p>
              </div>
              <ArrowUpRight className="relative z-10 ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* Email card */}
            <a
              href="mailto:contacto@thorque.com.ar"
              className="glow-card group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <Mail className="h-5 w-5" />
              </div>
              <div className="relative z-10 min-w-0">
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="truncate text-sm text-muted-foreground">contacto@thorque.com.ar</p>
              </div>
              <ArrowUpRight className="relative z-10 ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


