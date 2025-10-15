import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"
import { ThemeProvider } from "@/components/theme-provider"
import FBPixel from "@/components/constants/FBpixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thorque Software - IA y Automatizaciones",   
  description:
    "Impulsá tu negocio con soluciones de software a medida, inteligencia artificial y automatización de procesos. Hacemos que la tecnología trabaje para vos.",
  keywords: [
    "software a medida",
    "automatización",
    "inteligencia artificial",
    "desarrollo web",
    "Thorque Software",
    "IA para empresas",
    "bots empresariales",
  ],
  metadataBase: new URL("https://www.thorque.com.ar"),
  openGraph: {
    title: "Thorque Software - IA y Automatizaciones",
    description:
      "Soluciones inteligentes que optimizan tus procesos con IA y automatización. Transformá tu negocio hoy.",
    url: "https://www.thorque.com.ar",
    siteName: "Thorque Software",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Thorque Software - IA y Automatizaciones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thorque Software - IA y Automatizaciones",
    description:
      "Potenciá tu empresa con automatización e inteligencia artificial a medida.",
    images: ["/og-image.jpg"], // podés usar el mismo que en OG
  },
  alternates: {
    canonical: "https://www.thorque.com.ar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>
        <FBPixel /> 
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
