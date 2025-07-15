"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Globe,
  Mail,
  Phone,
  MapPin,
  Zap,
  Target,
  Eye,
  Heart,
  Database,
  Smartphone,
  Server,
  Brain,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Shield,
  Rocket,
  Code,
  Settings,
  CalendarCheck
} from "lucide-react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/particles"
import Image from 'next/image';

const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      quote: '"Dame una palanca y moveré el mundo"',
      author: "- Arquímedes",
      title: "Thorque Software",
      subtitle: "Tu punto de apoyo tecnológico hacia el futuro",
      description:
        "Desarrollamos soluciones de software inteligentes que potencian la eficiencia operativa mediante IA y automatización.",
      cta: "Comenzar ahora",
      learnMore: "Conocer más",
    },
    about: {
      title: "Sobre Nosotros",
      inspiration:
        "Inspirados por Arquímedes y su célebre frase, nos posicionamos como ese punto de apoyo tecnológico que ayuda a nuestros clientes a mover sus organizaciones hacia el futuro.",
      mission: {
        title: "Misión",
        content:
          "Desarrollar soluciones de software inteligentes que potencien la eficiencia operativa de las empresas mediante el análisis de datos y la automatización.",
      },
      vision: {
        title: "Visión",
        content:
          "Posicionarse como una empresa líder en automatización y potenciar al máximo la eficiencia operativa de las empresas en la región.",
      },
      valueProposition: {
        title: "Propuesta de Valor",
        content:
          "Desarrollamos soluciones de software impulsadas por IA que automatizan procesos críticos, optimizan recursos y reducen significativamente los costos operativos de las empresas.",
      },
    },
    values: {
      title: "Nuestros Valores",
      efficiency: {
        title: "Eficiencia",
        description: "Optimizamos cada proceso para maximizar resultados",
      },
      simplicity: {
        title: "Simplicidad",
        description: "Soluciones elegantes para problemas complejos",
      },
      innovation: {
        title: "Innovación",
        description: "Tecnología de vanguardia en cada proyecto",
      },
      adaptability: {
        title: "Adaptabilidad",
        description: "Flexibles ante los cambios del mercado",
      },
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Stack Tecnológico",
      frontend: {
        title: "Frontend",
        description: "Interfaces modernas y responsivas",
      },
      backend: {
        title: "Backend",
        description: "Arquitecturas robustas y escalables",
      },
      ai: {
        title: "IA y Automatizaciones",
        description: "Inteligencia artificial aplicada",
      },
      infrastructure: {
        title: "Infraestructura",
        description: "Despliegue y gestión de servidores",
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Hablemos sobre tu próximo proyecto",
      description: "Estamos listos para ayudarte a transformar tu empresa con tecnología de vanguardia.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar mensaje",
      },
      info: {
        email: "contacto@thorque.com.ar",
        phone: "+54 9 341 722-9559",
        address: "Dorrego 737, Rosario, Argentina",
        meeting: "Agendá una reunión",
      },
      send_mesage: "Envíanos un mensaje",
      info_titles: {
        email: "Email",
        phone: "Teléfono",
        address: "Dirección",
        meeting: "Gratuita de 30 minutos",
      }
    },
    footer: {
      rights: "Todos los derechos reservados.",
      description: "Soluciones de software inteligentes para el futuro.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      quote: '"Give me a lever and I will move the world"',
      author: "- Archimedes",
      title: "Thorque Software",
      subtitle: "Your technological leverage point to the future",
      description:
        "We develop intelligent software solutions that enhance operational efficiency through AI and automation.",
      cta: "Get started",
      learnMore: "Learn more",
    },
    about: {
      title: "About Us",
      inspiration:
        "Inspired by Archimedes and his famous phrase, we position ourselves as that technological support point that helps our clients move their organizations towards the future.",
      mission: {
        title: "Mission",
        content:
          "Develop intelligent software solutions that enhance business operational efficiency through data analysis and automation.",
      },
      vision: {
        title: "Vision",
        content:
          "Position ourselves as a leading company in automation and maximize the operational efficiency of companies in the region.",
      },
      valueProposition: {
        title: "Value Proposition",
        content:
          "We develop AI-powered software solutions that automate critical processes, optimize resources and significantly reduce operational costs for businesses.",
      },
    },
    values: {
      title: "Our Values",
      efficiency: {
        title: "Efficiency",
        description: "We optimize every process to maximize results",
      },
      simplicity: {
        title: "Simplicity",
        description: "Elegant solutions for complex problems",
      },
      innovation: {
        title: "Innovation",
        description: "Cutting-edge technology in every project",
      },
      adaptability: {
        title: "Adaptability",
        description: "Flexible to market changes",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Technology Stack",
      frontend: {
        title: "Frontend",
        description: "Modern and responsive interfaces",
      },
      backend: {
        title: "Backend",
        description: "Robust and scalable architectures",
      },
      ai: {
        title: "AI & Automation",
        description: "Applied artificial intelligence",
      },
      infrastructure: {
        title: "Infrastructure",
        description: "Server deployment and management",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk about your next project",
      description: "We are ready to help you transform your company with cutting-edge technology.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
      },
      info: {
        email: "contacto@thorque.com.ar",
        phone: "+54 9 341 722-9559",
        address: "Dorrego 737, Rosario, Argentina",
        meeting: "Schedule a Meeting",
      },
      send_mesage: "Send us a message",
      info_titles: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        meeting: "Free 30-minute session",
      }
    },
    footer: {
      rights: "All rights reserved.",
      description: "Intelligent software solutions for the future.",
    },
  },
}

export default function LandingPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Particles Background */}
      <Particles />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/10 to-orange-400/10 dark:from-red-500/20 dark:to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-orange-400/5 via-red-400/5 to-orange-400/5 dark:from-orange-500/10 dark:via-red-500/10 dark:to-orange-500/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-black/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-20 items-center justify-between">
          <Image
              src= {theme === "dark" ? "/thorque_claro.png" : "/thorque_oscuro.png"}
              alt="Thorque Software Logo"
              width={180}
              height={50}
              className="mb-6 md:mb-0"
            />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="relative text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 group"
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
              onClick={toggleTheme}
              className="relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Globe className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="ml-1 text-xs font-bold text-gray-700 dark:text-gray-300">{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden group rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-black/95 backdrop-blur-2xl">
            <nav className="container py-6 space-y-4">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
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
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Floating Quote */}
            <div className="mb-16 relative">
              <div className="inline-block p-8 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-4 font-light leading-relaxed">
                  {t.hero.quote}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">{t.hero.author}</p>
              </div>
              <div className="absolute -top-6 -right-6 animate-bounce">
                <Sparkles className="h-12 w-12 text-orange-500 opacity-70" />
              </div>
            </div>

            {/* Main Title */}
            <div className="relative mb-12">
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
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

            <p className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 font-light leading-relaxed">
              {t.hero.subtitle}
            </p>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                size="lg"
                onClick={() => window.location.href = "https://chat.thorque.com.ar"}
                className="relative overflow-hidden group bg-gradient-to-r from-thorque to-thorqueBold  text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = "#about"}
                variant="outline"
                className="relative overflow-hidden group border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-400 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-gray-900 dark:text-white">{t.hero.learnMore}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed font-light">
                {t.about.inspiration}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {[
                {
                  icon: Target,
                  title: t.about.mission.title,
                  content: t.about.mission.content,
                  gradient: "from-thorque to-thorqueBold",
                  bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
                },
                {
                  icon: Eye,
                  title: t.about.vision.title,
                  content: t.about.vision.content,
                  gradient: "from-thorqueBold to-thorque",
                  bgGradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20",
                },
                {
                  icon: Rocket,
                  title: t.about.valueProposition.title,
                  content: t.about.valueProposition.content,
                  gradient: "from-thorque to-thorqueBold",
                  bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden group hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br ${item.bgGradient} backdrop-blur-2xl border-0 shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  />
                  <CardHeader className="relative p-8">
                    <div
                      className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${item.gradient} mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-8 pt-0">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80" />
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t.values.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Zap,
                  title: t.values.efficiency.title,
                  description: t.values.efficiency.description,
                  gradient: "from-thorque to-thorqueBold",
                },
                {
                  icon: Heart,
                  title: t.values.simplicity.title,
                  description: t.values.simplicity.description,
                  gradient: "from-thorqueBold to-thorque",
                },
                {
                  icon: Brain,
                  title: t.values.innovation.title,
                  description: t.values.innovation.description,
                  gradient: "from-thorque to-thorqueBold",
                },
                {
                  icon: Shield,
                  title: t.values.adaptability.title,
                  description: t.values.adaptability.description,
                  gradient: "from-thorqueBold to-thorque",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative p-10 rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}
                  />
                  <div className="relative text-center">
                    <div
                      className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${value.gradient} mb-8 shadow-2xl group-hover:scale-125 transition-transform duration-500`}
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-6 text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t.services.title}
              </h2>
              <p className="text-3xl text-gray-600 dark:text-gray-400 font-light">{t.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Smartphone,
                  title: t.services.frontend.title,
                  description: t.services.frontend.description,
                  techs: ["React", "React Native"],
                  gradient: "from-thorque to-thorqueBold",
                  bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
                },
                {
                  icon: Server,
                  title: t.services.backend.title,
                  description: t.services.backend.description,
                  techs: ["Node.js", "Golang"],
                  gradient: "from-thorqueBold to-thorque",
                  bgGradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20",
                },
                {
                  icon: Brain,
                  title: t.services.ai.title,
                  description: t.services.ai.description,
                  techs: ["Python"],
                  gradient: "from-thorque to-thorqueBold",
                  bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
                },
                {
                  icon: Database,
                  title: t.services.infrastructure.title,
                  description: t.services.infrastructure.description,
                  techs: ["Docker", "PostgreSQL"],
                  gradient: "from-thorqueBold to-thorque",
                  bgGradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-110 bg-gradient-to-br ${service.bgGradient} backdrop-blur-2xl border-0 shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  />
                  <CardHeader className="relative text-center p-8">
                    <div
                      className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${service.gradient} mb-6 shadow-2xl group-hover:scale-125 transition-transform duration-500`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative text-center p-8 pt-0">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {service.techs.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300 px-4 py-2 text-sm font-semibold"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p className="text-3xl text-gray-600 dark:text-gray-400 font-light mb-6">{t.contact.subtitle}</p>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-medium">
                {t.contact.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
              {/* Contact Form */}
              <Card className="relative overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border-0 shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5" />
                <CardHeader className="relative p-10">
                  <CardTitle className="text-3xl font-black text-gray-900 dark:text-white">
                    {t.contact.send_mesage}
                  </CardTitle>
                </CardHeader>
                <form action="https://formspree.io/f/mvgowbgg"method="POST">
                <CardContent className="relative space-y-8 p-10 pt-0">               
                  <div>
                    <label className="text-sm font-bold mb-4 block text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      {t.contact.form.name}
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                      placeholder={t.contact.form.name}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-4 block text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      {t.contact.form.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                      placeholder={t.contact.form.email}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-4 block text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="textarea"
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm resize-none focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                      placeholder={t.contact.form.message}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-br from-thorque to-thorqueBold text-white py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    {t.contact.form.send}
                  </Button>
                </CardContent>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-12">
                {[
                  { icon: Mail, title: t.contact.info_titles.email, info: t.contact.info.email, gradient: "from-thorque to-thorqueBold" },
                  {
                    icon: Phone,
                    title: t.contact.info_titles.phone,
                    info: t.contact.info.phone,
                    gradient: "from-thorqueBold to-thorque",
                  },
                  {
                    icon: MapPin,
                    title: t.contact.info_titles.address,
                    info: t.contact.info.address,
                    gradient: "from-thorque to-thorqueBold",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-8 p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                  >
                    <div
                      className={`flex-shrink-0 p-5 rounded-3xl bg-gradient-to-r ${contact.gradient} shadow-2xl group-hover:scale-125 transition-transform duration-500`}
                    >
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">{contact.info}</p>
                    </div>
                  </div>
                ))}
                <a
                  href="https://calendly.com/thorque/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-8 p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 no-underline block"
                >
                  <div
                    className={`flex-shrink-0 p-5 rounded-3xl bg-gradient-to-r from-thorqueBold to-thorque shadow-2xl group-hover:scale-125 transition-transform duration-500`}
                  >
                    <CalendarCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white">{t.contact.info.meeting}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">{t.contact.info_titles.meeting}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:from-gray-950 dark:via-black dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-red-900/10" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/thorque_claro.png"
              alt="Thorque Software Logo"
              width={250}
              height={50}
              className="mb-6 md:mb-0"
            />
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-3 text-xl font-medium">{t.footer.description}</p>
              <p className="text-gray-500 text-sm font-medium">© 2025 Thorque Software. {t.footer.rights}</p>
              <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm font-medium" href="https://www.linkedin.com/company/thorque-software" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
