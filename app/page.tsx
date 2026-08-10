"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Problems } from "@/components/sections/problems"
import { Solutions } from "@/components/sections/solutions"
import { Architecture } from "@/components/sections/architecture"
import { Process } from "@/components/sections/process"
import { Portfolio } from "@/components/sections/portfolio"
import { Team } from "@/components/sections/team"
import { Differentiator } from "@/components/sections/differentiator"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="relative flex h-20 w-20 items-center justify-center"
        >
          <img src="/thorque.svg" alt="Thorque" className="h-full w-full" />
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-[#FBAF3A]/40"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>

        {/* Loading bar */}
        <div className="h-[2px] w-32 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FBAF3A] to-[#F8770B]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const MIN_MS = 400 // let the logo animation land instead of flashing
    const MAX_MS = 1500 // never hold the page hostage to a slow asset
    const start = performance.now()
    let settle: ReturnType<typeof setTimeout>

    const finish = () => {
      settle = setTimeout(
        () => setLoading(false),
        Math.max(0, MIN_MS - (performance.now() - start))
      )
    }

    if (document.readyState === "complete") finish()
    else window.addEventListener("load", finish, { once: true })

    const cap = setTimeout(() => setLoading(false), MAX_MS)
    return () => {
      window.removeEventListener("load", finish)
      clearTimeout(settle)
      clearTimeout(cap)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <Header />
        <main>
          <Hero />
          <Problems />
          <Solutions />
          <Architecture />
          <Process />
          <Portfolio />
          <Team />
          <Differentiator />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
