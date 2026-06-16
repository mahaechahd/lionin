import {
  finalCta,
  heroStats,
  homeServices,
  marketHighlights,
  processSteps,
  testimonials,
  trustPoints,
} from "@/data/home";
import { featuredProperties } from "@/data/property";
import PropertyCard from "@/components/property/PropertyCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="-m-6 overflow-hidden bg-[var(--black)] text-[var(--text-primary)]">
      <section className="relative min-h-[calc(100vh-76px)] px-6 py-14 sm:px-10 lg:px-16">
        <Image
          src="/images/lionin-hero-villa.png"
          alt="Villa premium avec piscine au coucher du soleil"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,6,0.96)_0%,rgba(8,8,6,0.82)_36%,rgba(8,8,6,0.38)_70%,rgba(8,8,6,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(8,8,6,0),var(--black))]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-188px)] max-w-7xl flex-col justify-between gap-14">
          <div className="max-w-3xl pt-8 lg:pt-16">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold-light)]">
              Immobilier premium au Maroc
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-balance text-white sm:text-6xl lg:text-7xl">
              LIONIN révèle les biens qui méritent une vraie décision.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f4ead5]">
              Une sélection privée, une lecture claire du marché et un
              accompagnement exigeant pour acheter, vendre ou investir avec
              confiance.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reservation"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--gold)] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[var(--black)] transition-colors hover:bg-[var(--gold-light)]"
              >
                Réserver une visite
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-[var(--gold-light)] bg-[rgba(8,8,6,0.28)] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--black)] hover:text-[var(--gold-light)]"
              >
                Explorer le catalogue
              </Link>
            </div>
          </div>

          <div className="grid gap-3 border border-[rgba(242,211,122,0.24)] bg-[rgba(8,8,6,0.62)] p-4 backdrop-blur md:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="border border-[rgba(255,250,240,0.08)] bg-[rgba(255,250,240,0.04)] p-4"
              >
                <p className="text-3xl font-semibold text-[var(--gold-light)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#f4ead5]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-7 text-[var(--black)] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
            Standards LIONIN
          </p>
          <div className="flex flex-wrap gap-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="border border-[rgba(8,8,6,0.14)] px-4 py-2 text-sm font-semibold"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                Aperçu catalogue
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                Une première sélection pour sentir le niveau.
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="w-fit text-sm font-bold uppercase tracking-[0.16em] text-[var(--gold-light)] hover:text-[var(--gold)]"
            >
              Voir tous les biens
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[var(--black)] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold-dark)]">
            Services
          </p>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
              Une agence conçue pour avancer vite, mais correctement.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {homeServices.map((service, index) => (
                <article
                  key={service.title}
                  className="border border-[rgba(8,8,6,0.14)] p-6"
                >
                  <span className="text-sm font-bold text-[var(--gold-dark)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#4d473b]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-[var(--black-soft)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
              Méthode
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Trois étapes pour transformer une intention en décision.
            </h2>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-5 border border-[var(--border-subtle)] bg-[var(--black)] p-6 sm:grid-cols-[72px_1fr]"
              >
                <span className="text-3xl font-semibold text-[var(--gold-light)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
              Opportunités
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Des recherches alignées avec votre stratégie.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {marketHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="border border-[var(--gold-muted)] bg-[linear-gradient(145deg,rgba(216,173,69,0.14),rgba(255,255,255,0.05)_42%,rgba(8,8,6,0.94))] p-7"
              >
                <h3 className="text-xl font-semibold text-white">
                  {highlight.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[var(--black)] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold-dark)]">
            Témoignages
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            La confiance se construit dans les détails.
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="border border-[rgba(8,8,6,0.14)] p-6"
              >
                <blockquote className="text-lg leading-8">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-[rgba(8,8,6,0.14)] pt-5">
                  <p className="font-semibold text-[var(--gold-dark)]">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-[#5f5748]">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border border-[var(--gold)] bg-[linear-gradient(135deg,var(--black-soft),var(--black)_58%,rgba(216,173,69,0.18))] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold-light)]">
                Consultation privée
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                {finalCta.title}
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-[var(--text-secondary)]">
                {finalCta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-[var(--gold)] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[var(--black)] transition-colors hover:bg-[var(--gold-light)]"
              >
                {finalCta.primaryLabel}
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex h-12 items-center justify-center border border-[var(--gold-muted)] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[var(--gold-light)] transition-colors hover:bg-[var(--black-elevated)]"
              >
                {finalCta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
