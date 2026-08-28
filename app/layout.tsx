import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
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

// Organization / ProfessionalService — grafo global del sitio.
// Su @id (#organization) es referenciado por el FAQPage de /preguntas-frecuentes.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://thorque.com.ar/#organization',
  name: 'Thorque Software',
  url: 'https://thorque.com.ar/',
  description:
    'Empresa argentina de desarrollo de software a medida, automatización de procesos, integración de sistemas y agentes con inteligencia artificial para empresas en crecimiento.',
  slogan: 'Automatizamos la infraestructura digital de tu empresa',
  areaServed: [
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Place', name: 'LATAM' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mendoza 1125',
    addressLocality: 'Rosario',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
  },
  telephone: '+5493416009423',
  email: 'contacto@thorque.com.ar',
  knowsAbout: [
    'Desarrollo de software a medida',
    'Automatización de procesos empresariales',
    'Integración de sistemas y APIs',
    'Agentes de inteligencia artificial',
    'Bots de WhatsApp con IA',
    'Dashboards estratégicos',
    'Next.js',
    'Node.js',
    'Python',
    'TypeScript',
    'PostgreSQL',
    'AWS',
    'Kubernetes',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo de software a medida' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización de procesos' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integración de sistemas y APIs' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bots inteligentes con IA' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dashboards estratégicos' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Arquitectura escalable en la nube' } },
  ],
  sameAs: [
    'https://linkedin.com/company/thorque-software',
    'https://www.instagram.com/thorque_software/',
    'https://www.facebook.com/profile.php?id=61579726687034',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '828150772893555');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=828150772893555&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
