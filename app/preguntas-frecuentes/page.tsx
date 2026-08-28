import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { faqItems, faqSections, faqIntro, slugify } from '@/data/faq'

const PAGE_URL = 'https://thorque.com.ar/preguntas-frecuentes'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre software a medida | Thorque Software',
  description:
    '59 preguntas frecuentes sobre desarrollo de software a medida en Argentina: costos, plazos, propiedad del código, automatización con IA e integraciones. Respondidas por Thorque Software (Rosario, Santa Fe).',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Preguntas frecuentes sobre software a medida | Thorque Software',
    description:
      '59 preguntas frecuentes sobre desarrollo de software a medida en Argentina: costos, plazos, propiedad del código, automatización con IA e integraciones. Respondidas por Thorque Software (Rosario, Santa Fe).',
    url: PAGE_URL,
    siteName: 'Thorque Software',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preguntas frecuentes sobre software a medida | Thorque Software',
    description:
      '59 preguntas frecuentes sobre desarrollo de software a medida en Argentina, respondidas por Thorque Software.',
  },
}

// FAQPage schema — generado desde la MISMA fuente que el HTML visible (data/faq.ts),
// de modo que name/text coinciden palabra por palabra con lo renderizado.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  inLanguage: 'es-AR',
  url: PAGE_URL,
  name: 'Preguntas frecuentes sobre desarrollo de software a medida | Thorque Software',
  about: { '@id': 'https://thorque.com.ar/#organization' },
  publisher: { '@id': 'https://thorque.com.ar/#organization' },
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    '@id': `${PAGE_URL}#${slugify(item.pregunta)}`,
    name: item.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.respuesta,
    },
  })),
}

export default function PreguntasFrecuentesPage() {
  return (
    <div lang="es-AR" className="min-h-screen bg-background">
      <Header />

      <main className="relative pt-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <article className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          {/* Encabezado */}
          <header className="faq-measure">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Thorque Software
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Preguntas frecuentes sobre software a medida
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {faqIntro}
            </p>
          </header>

          {/* Navegación por secciones */}
          <nav aria-label="Secciones de preguntas frecuentes" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {faqSections.map((section) => (
                <li key={section.slugSeccion}>
                  <a
                    href={`#${section.slugSeccion}`}
                    className="inline-flex rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                  >
                    {section.seccion}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secciones con preguntas */}
          <div className="mt-14 flex flex-col gap-14">
            {faqSections.map((section) => (
              <section
                key={section.slugSeccion}
                id={section.slugSeccion}
                className="scroll-mt-28"
              >
                <h2 className="mb-5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {section.seccion}
                </h2>

                <div className="flex flex-col gap-3">
                  {faqItems
                    .filter((item) => item.slugSeccion === section.slugSeccion)
                    .map((item) => (
                      <details
                        key={slugify(item.pregunta)}
                        id={slugify(item.pregunta)}
                        className="faq-item scroll-mt-28 rounded-xl border border-border/50 bg-card/40 px-5"
                      >
                        <summary className="faq-summary flex cursor-pointer items-center justify-between gap-4 py-4 text-left">
                          <h3 className="text-base font-semibold text-foreground">
                            {item.pregunta}
                          </h3>
                        </summary>
                        <div className="faq-answer pb-5">
                          <p className="faq-measure text-[15px] leading-relaxed text-muted-foreground">
                            {item.respuesta}
                          </p>
                        </div>
                      </details>
                    ))}
                </div>
              </section>
            ))}
          </div>

          {/* Cierre / CTA */}
          <section className="mt-16 rounded-2xl border border-border/50 bg-secondary/30 p-8 text-center">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="faq-measure mx-auto mt-3 text-base leading-relaxed text-muted-foreground">
              Escribinos y coordinamos una reunión de diagnóstico sin costo para entender tu
              proceso y qué se puede automatizar.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/5493416009423"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Escribinos por WhatsApp
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Ir al formulario de contacto
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
