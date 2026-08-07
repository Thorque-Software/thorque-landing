"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

const members = [
  { name: "Agustín Luzzini", photo: "/team/agustin.webp" },
  { name: "Mauro Ferrari", photo: "/team/mauro.webp" },
  { name: "Pedro Garrido", photo: "/team/pedro.webp" },
  { name: "Nazareno Necchi", photo: "/team/nazareno.webp" },
  { name: "Lautaro Teta Musa", photo: "/team/lautaro.webp" },
]

function MemberCard({
  member,
  role,
}: {
  member: { name: string; photo: string }
  role: string
}) {
  return (
    <div className="group mr-6 w-[260px] shrink-0 sm:w-[300px] lg:w-[340px]">
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40">
        {/* Portrait — light panel so the rim light on the shirts doesn't read as a halo */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#F6F4F1] via-[#EBE7E2] to-[#DAD5CE]">
          {/* Warm brand glow that blooms on hover */}
          <div className="absolute -bottom-20 left-1/2 h-3/4 w-[140%] -translate-x-1/2 rounded-full bg-primary/20 blur-[60px] transition-all duration-700 group-hover:bg-primary/40" />

          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            width={960}
            height={1280}
            className="relative h-full w-full object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Ground shadow so the cut-out sits on the panel */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Caption */}
        <div className="px-4 pb-5 pt-4 text-center">
          <h3 className="text-base font-bold leading-tight text-foreground">
            {member.name}
          </h3>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            {role}
          </p>
          <div className="mx-auto mt-3 h-px w-8 bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
    </div>
  )
}

export function Team() {
  const { t } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const rowRef = useRef<HTMLDivElement>(null)
  const rowInView = useInView(rowRef, { once: true, margin: "-80px" })

  // duplicated so the -50% marquee loop is seamless
  const lineup = [...members, ...members]

  return (
    <section id="team" className="noise-overlay relative overflow-hidden py-28 md:py-40">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -left-1/4 top-0 h-full w-[150%] bg-gradient-to-r from-accent/3 via-transparent to-primary/3 opacity-50" />
      </div>

      <div className="relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl px-6 text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            {t("team.badge")}
          </span>
          <h2 className="mb-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("team.title")}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("team.subtitle")}
          </p>
        </motion.div>

        {/* Line-up — scrolls sideways, pauses on hover */}
        <motion.div
          ref={rowRef}
          initial={{ opacity: 0, y: 40 }}
          animate={rowInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
        >
          <div
            className="animate-marquee flex w-max motion-reduce:animate-none hover:[animation-play-state:paused]"
            style={{ animationDuration: "50s" }}
          >
            {lineup.map((member, i) => (
              <MemberCard
                key={`${member.photo}-${i}`}
                member={member}
                role={t("team.role")}
              />
            ))}
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />
        </motion.div>
      </div>
    </section>
  )
}
