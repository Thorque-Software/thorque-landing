"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import {
  Globe,
  Mail,
  MapPin,
  Target,
  Eye,
  Linkedin,
  Menu,
  X,
  Facebook,
  ArrowRight,
  Rocket,
  Code,
  Settings,
  CalendarCheck,
  Instagram
} from "lucide-react"
import { Particles } from "@/components/particles"
import Image from 'next/image';
import { translations } from "@/components/constants/translations"
import { projects } from "@/components/constants/projects"

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = translations[language]
  const aboutItems = [
    {
      icon: Target,
      title: t.about.mission.title,
      content: t.about.mission.content,
      gradient: "from-thorque to-thorqueBold",
      bgGradient: "from-orange-950/20 to-red-950/20",
    },
    {
      icon: Eye,
      title: t.about.vision.title,
      content: t.about.vision.content,
      gradient: "from-thorqueBold to-thorque",
      bgGradient: "from-red-950/20 to-orange-950/20",
    },
    {
      icon: Rocket,
      title: t.about.valueProposition.title,
      content: t.about.valueProposition.content,
      gradient: "from-thorque to-thorqueBold",
      bgGradient: "from-orange-950/20 to-red-950/20",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden text-gray-200">
      {/* Particles Background */}
      <Particles />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between">
          <Image
              src="/thorque_claro.png"
              alt="Thorque Software Logo"
              width={180}
              height={50}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="relative text-sm font-semibold text-gray-300 hover:text-orange-400 transition-all duration-300 group"
              >
                {value}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="relative overflow-hidden group hover:bg-gray-800 transition-all duration-300 rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Globe className="h-5 w-5 text-gray-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="ml-1 text-xs font-bold text-gray-300">{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden group rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-300 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 text-gray-300 transition-transform duration-300 group-hover:scale-110" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-2xl">
            <nav className="container py-6 space-y-4">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block py-3 px-4 text-sm font-semibold text-gray-300 hover:text-orange-400 hover:bg-gray-800 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {value}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-32 lg:py-48 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative mb-12">
              <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem] font-black mb-8 leading-none tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
              <div className="absolute -top-8 -right-8 md:-top-16 md:-right-16 opacity-20">
                <Code className="h-16 w-16 md:h-24 md:w-24 text-orange-500 animate-pulse" />
              </div>
              <div className="absolute -bottom-8 -left-8 md:-bottom-16 md:-left-16 opacity-20">
                <Settings
                  className="h-12 w-12 md:h-20 md:w-20 text-red-500 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-gray-200 mb-8  leading-relaxed drop-shadow-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                size="lg"
                onClick={() => (window.location.href = "https://chat.thorque.com.ar")}
                className="relative overflow-hidden group bg-gradient-to-r from-thorque to-thorqueBold text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Button>

              <Button
                size="lg"
                onClick={() => (window.location.href = "#contact")}
                variant="outline"
                className="relative overflow-hidden group border-2 border-gray-600 hover:border-orange-400 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 bg-gray-900/80 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white">
                  {t.hero.learnMore}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              <p className="text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed font-light">
                {t.about.inspiration}
              </p>
            </div>

            {/* Carrusel */}
            <div className="relative flex items-center justify-center h-[450px]">
              {aboutItems.map((item, index) => {
                const position = (index - currentIndex + aboutItems.length) % aboutItems.length
                let style = ""

                if (position === 0) style = "z-20 scale-110 opacity-100 translate-x-0"
                else if (position === 1) style = "z-10 scale-90 opacity-60 translate-x-72"
                else if (position === aboutItems.length - 1) style = "z-10 scale-90 opacity-60 -translate-x-72"
                else style = "opacity-0 scale-75"

                return (
                  <Card
                    key={index}
                    className={`absolute transition-all duration-700 ease-in-out transform 
                      ${style} bg-gradient-to-br ${item.bgGradient} 
                      backdrop-blur-2xl border-0 shadow-2xl w-[300px] sm:w-[350px] max-w-xl`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                    <CardHeader className="relative p-8 text-center">
                      <div className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${item.gradient} mb-6 shadow-2xl`}>
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-black text-white mb-4">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative p-8 pt-0">
                      <p className="text-gray-300 leading-relaxed text-lg font-medium">
                        {item.content}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="py-32 relative">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-[400px]">
              <Image
                src="/thorqui.png"
                alt="Demo Thorque Software"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t.services.service1.title}
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t.services.service1.description}
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 mb-16 relative">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t.services.service2.title}
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t.services.service2.description}
              </p>
            </div>
            <div className="relative w-full h-[400px]">
              <Image
                src="/iPhone-14-Pro-Max.webp"
                alt="Demo Thorque Software"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
      id="clients"
      className="py-32 relative bg-gradient-to-r from-gray-900/80 to-gray-800/80"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Nuestros Clientes
        </h2>

        {isMobile ? (
          // 📱 MOBILE: coverflow simple, 1 slide por vez
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full max-w-7xl"
          >
            {projects.map((project: any, index: number) => (
              <SwiperSlide
                key={index}
                className="rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              >
                <div className="relative w-full h-64 sm:h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-black/50 p-6 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 break-words">
                    {language === "es" ? project.title : project.title_en}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed break-words overflow-auto max-h-48">
                    {language === "es"
                      ? project.description
                      : project.description_en}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // 🖥 DESKTOP: más ancho, simétrico con coverflow
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full max-w-7xl"
          >
            {projects.map((project: any, index: number) => (
              <SwiperSlide
                key={index}
                className="!w-[600px] lg:!w-[800px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              >
                <div className="relative w-full h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-black/50 p-6 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-3xl font-bold text-white mb-4 break-words">
                    {language === "es" ? project.title : project.title_en}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed break-words overflow-auto max-h-48">
                    {language === "es"
                      ? project.description
                      : project.description_en}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p className="text-3xl text-gray-400 font-light mb-6">{t.contact.subtitle}</p>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto font-medium">
                {t.contact.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 px-2 sm:px-4">
              <Card className="relative overflow-hidden bg-gray-900/90 backdrop-blur-2xl border-0 shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5" />
                <CardHeader className="relative p-10">
                  <CardTitle className="text-3xl font-black text-white">
                    {t.contact.send_mesage}
                  </CardTitle>
                </CardHeader>
                <form action="https://formspree.io/f/mvgowbgg" method="POST">
                  <CardContent className="relative space-y-8 p-10 pt-0">
                    <div>
                      <label className="text-sm font-bold mb-4 block text-gray-300 uppercase tracking-wide">
                        {t.contact.form.name}
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="w-full px-6 py-4 border-2 border-gray-700 rounded-2xl bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg text-white"
                        placeholder={t.contact.form.name}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold mb-4 block text-gray-300 uppercase tracking-wide">
                        {t.contact.form.email}
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="w-full px-6 py-4 border-2 border-gray-700 rounded-2xl bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg text-white"
                        placeholder={t.contact.form.email}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold mb-4 block text-gray-300 uppercase tracking-wide">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        name="textarea"
                        rows={6}
                        className="w-full px-6 py-4 border-2 border-gray-700 rounded-2xl bg-gray-800/80 backdrop-blur-sm resize-none focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg text-white"
                        placeholder={t.contact.form.message}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-br from-thorque to-thorqueBold text-white py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                      {t.contact.form.send}
                    </Button>
                  </CardContent>
                </form>
              </Card>

              <div className="space-y-12">
                <a
                  href={t.contact.info.phone_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-8 p-8 rounded-3xl bg-gray-900/80 backdrop-blur-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 hover:scale-105 no-underline block"
                >
                  <div className="flex-shrink-0 p-5 rounded-3xl bg-gradient-to-r from-thorqueBold to-thorque shadow-2xl group-hover:scale-125 transition-transform duration-500">
                    <Image src="/whatsapp.svg" alt="WhatsApp" width={8} height={8} className="w-8 h-8 invert" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-white">{t.contact.info_titles.phone}</h3>
                    <p className="text-gray-400 text-base sm:text-xl font-medium">{t.contact.info.phone}</p>
                  </div>
                </a>
                {[
                  { icon: Mail, title: t.contact.info_titles.email, info: t.contact.info.email, gradient: "from-thorque to-thorqueBold" ,customStyle: "break-all overflow-hidden"},
                  { icon: MapPin, title: t.contact.info_titles.address, info: t.contact.info.address, gradient: "from-thorqueBold to-thorque" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-8 p-8 rounded-3xl bg-gray-900/80 backdrop-blur-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <div className={`flex-shrink-0 p-5 rounded-3xl bg-gradient-to-r ${contact.gradient} shadow-2xl group-hover:scale-125 transition-transform duration-500`}>
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-white">{contact.title}</h3>
                      <p className={`text-gray-400 text-base sm:text-xl font-medium ${contact.customStyle ?? ""}`}>{contact.info}</p>
                    </div>
                  </div>
                ))}
                <a
                  href="https://calendly.com/thorque/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-8 p-8 rounded-3xl bg-gray-900/80 backdrop-blur-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 hover:scale-105 no-underline block"
                >
                  <div className="flex-shrink-0 p-5 rounded-3xl bg-gradient-to-r from-thorque to-thorqueBold shadow-2xl group-hover:scale-125 transition-transform duration-500">
                    <CalendarCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-white">{t.contact.info.meeting}</h3>
                    <p className="text-gray-400 text-base sm:text-xl font-medium">{t.contact.info_titles.meeting}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 bg-gradient-to-r from-gray-950 via-black to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-red-900/10" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <Image src="/thorque_claro.png" alt="Thorque Software Logo" width={250} height={50} className="mb-6 md:mb-0" />
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/company/thorque-software" target="_blank" rel="noopener noreferrer" className="p-2 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.instagram.com/thorque_software/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579726687034" target="_blank" rel="noopener noreferrer" className="p-2 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href={t.contact.info.phone_link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={6} height={6} className="w-6 h-6 invert" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right mt-6 md:mt-0">
              <p className="text-gray-300 mb-3 text-xl font-medium">{t.footer.description}</p>
              <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} Thorque Software. {t.footer.rights}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
