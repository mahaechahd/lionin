import {
  heroStats,
  homeServices,
  marketHighlights,
  processSteps,
  testimonials,
  trustPoints,
} from "@/data/home";
import { featuredProperties, properties } from "@/data/property";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/cta/ContactCTA";
import PropertyCard from "@/components/property/PropertyCard";
import SearchBar from "@/components/search/SearchBar";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[var(--black)] text-[var(--text-primary)]">
      <section className="relative min-h-[calc(100svh-76px)] px-4 py-10 sm:px-10 sm:py-14 lg:px-16">
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

        <div className="relative mx-auto flex min-h-[calc(100svh-156px)] max-w-7xl flex-col justify-between gap-10 sm:gap-14">
          <div className="max-w-3xl pt-6 lg:pt-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)] sm:mb-5 sm:text-sm sm:tracking-[0.28em]">
              Locations premium au Maroc
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] text-balance text-white sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              Louer une adresse élégante, avec un accompagnement exigeant.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#f4ead5] sm:mt-7 sm:text-lg sm:leading-8">
              Villas, appartements et studios haut standing au Maroc, filtrés
              avec sérieux pour vous faire gagner du temps avant chaque visite.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Button href="/catalogue" size="lg">
                Voir les biens
              </Button>
              <Button href="/reservation" size="lg" variant="secondary">
                Demander une visite
              </Button>
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

      <section className="relative z-10 -mt-8 px-4 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SearchBar properties={properties} />
        </div>
      </section>

      <section className="bg-white px-4 py-7 text-[var(--black)] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-dark)] sm:text-sm sm:tracking-[0.18em]">
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

      <section className="px-4 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Locations disponibles"
            title="Une première sélection pour sentir le niveau."
            description="Des biens prêts à visiter, avec prix mensuel, secteur et critères clés visibles immédiatement."
            action={
              <Button href="/catalogue" variant="ghost">
                Voir tous les biens
              </Button>
            }
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-[var(--black)] sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            dark={false}
            eyebrow="Services"
            title="Une agence conçue pour louer vite, mais correctement."
            description="Une méthode simple pour cadrer la recherche, filtrer les options et préparer chaque visite avec sérieux."
          />
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
              Location premium, information claire, décision plus sereine.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {homeServices.map((service, index) => (
                <article
                  key={service.title}
                  className="border border-[rgba(8,8,6,0.14)] p-5 sm:p-6"
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

      <section className="border-y border-[var(--border-subtle)] bg-[var(--black-soft)] px-4 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] sm:text-sm sm:tracking-[0.22em]">
              Méthode
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Trois étapes pour transformer une recherche en visite utile.
            </h2>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 border border-[var(--border-subtle)] bg-[var(--black)] p-5 sm:grid-cols-[72px_1fr] sm:gap-5 sm:p-6"
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

      <section className="px-4 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Opportunités"
            title="Des recherches alignées avec votre mode de vie."
            description="Nous mettons en avant les biens qui combinent emplacement, confort, budget et disponibilité réelle."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {marketHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="border border-[var(--gold-muted)] bg-[linear-gradient(145deg,rgba(216,173,69,0.14),rgba(255,255,255,0.05)_42%,rgba(8,8,6,0.94))] p-5 sm:p-7"
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

      <section className="bg-white px-4 py-14 text-[var(--black)] sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            dark={false}
            eyebrow="Témoignages"
            title="La confiance se construit dans les détails."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="border border-[rgba(8,8,6,0.14)] p-5 sm:p-6"
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

      <ContactCTA
        title="Prêt à trouver votre prochaine adresse à louer ?"
        description="Parlez-nous de votre recherche. LIONIN prépare une sélection claire, réaliste et alignée avec votre budget."
        primaryLabel="Demander une visite"
        primaryHref="/reservation"
        secondaryLabel="Voir les biens"
        secondaryHref="/catalogue"
      />
    </div>
  );
}
