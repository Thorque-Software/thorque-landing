import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Thorque Software | Infraestructura Digital para Empresas',
  description:
    'Automatizamos procesos, integramos sistemas y desarrollamos software a medida para empresas que necesitan escalar su operación digital.',
  keywords: [
    'desarrollo de software',
    'automatización empresarial',
    'integraciones CRM',
    'bots para empresas',
    'soluciones tecnológicas',
    'integraciones API',
    'software a medida',
    'inteligencia artificial empresarial',
  ],
  openGraph: {
    title: 'Thorque Software | Infraestructura Digital para Empresas',
    description:
      'Automatizamos procesos, integramos sistemas y desarrollamos software a medida para empresas.',
    url: 'https://thorque.com.ar',
    siteName: 'Thorque Software',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thorque Software | Infraestructura Digital',
    description:
      'Automatizamos la infraestructura digital de empresas.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBAF3A' },
    { media: '(prefers-color-scheme: dark)', color: '#131325' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
