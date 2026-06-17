import { heroStats, processSteps, trustPoints } from "@/data/home";
import ContactCTA from "@/components/cta/ContactCTA";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  {
    title: "Exigence",
    description:
      "Chaque location est analysée pour son emplacement, sa cohérence de loyer, sa qualité réelle et sa disponibilité.",
  },
  {
    title: "Clarté",
    description:
      "Nous privilégions des avis directs, des informations utiles et un accompagnement lisible à chaque étape.",
  },
  {
    title: "Discrétion",
    description:
      "Les projets sensibles demandent de la retenue, une sélection maîtrisée et des échanges confidentiels.",
  },
];

const commitments = [
  "Qualification sérieuse des besoins avant toute visite",
  "Lecture réaliste du marché locatif et des loyers",
  "Accompagnement locataire, expatrié et propriétaire bailleur",
  "Suivi clair jusqu'au bail et à l'installation",
];

export default function AProposPage() {
  return (
    <div className="bg-[var(--black)] text-[var(--text-primary)]">
      <section className="border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,var(--black),var(--black-soft)_58%,rgba(216,173,69,0.14))] px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)] sm:text-sm sm:tracking-[0.24em]">
              À propos de LIONIN
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Une agence pensée pour les locations immobilières importantes.
            </h1>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--text-secondary)]">
            LIONIN accompagne les locataires, expatriés, familles et
            propriétaires bailleurs qui veulent avancer avec une sélection plus
            lisible, des conseils réalistes et une expérience sobrement premium.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="border border-[var(--border-subtle)] bg-[var(--black-soft)] p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
              Notre posture
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Moins de bruit, plus de jugement.
            </h2>
            <div className="mt-7 grid gap-4 text-sm leading-6 text-[var(--text-secondary)]">
              <p>
                Nous ne cherchons pas à multiplier les options. Nous filtrons,
                comparons et mettons en avant les locations qui méritent
                vraiment votre attention.
              </p>
              <p>
                L&apos;objectif est simple : vous aider à décider avec calme,
                précision et confiance.
              </p>
            </div>
          </aside>

          <div className="grid gap-5 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <article
                key={stat.value}
                className="border border-[var(--gold-muted)] bg-[linear-gradient(145deg,rgba(216,173,69,0.16),rgba(255,255,255,0.05)_42%,rgba(8,8,6,0.94))] p-5 sm:p-6"
              >
                <p className="text-3xl font-semibold text-[var(--gold-light)]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-[var(--black-soft)] px-4 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Valeurs"
            title="Une façon de travailler précise, discrète et orientée décision."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-[var(--border-subtle)] bg-[var(--black)] p-5 sm:p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] sm:text-sm sm:tracking-[0.22em]">
              Méthode
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Un cadre clair pour passer de la recherche à la visite.
            </h2>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 border border-[var(--border-subtle)] bg-[var(--black-soft)] p-5 sm:grid-cols-[72px_1fr] sm:gap-5 sm:p-6"
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

      <section className="bg-white px-4 py-12 text-[var(--black)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)] sm:text-sm sm:tracking-[0.22em]">
              Engagements
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Des standards simples, tenus sérieusement.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <article
                key={commitment}
                className="border border-[rgba(8,8,6,0.14)] p-5 sm:p-6"
              >
                <p className="leading-7 text-[#4d473b]">{commitment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Démarrer"
        title="Vous cherchez à louer ou vous avez un bien à confier ?"
        description="LIONIN peut vous aider à clarifier les critères, préparer une sélection ou présenter votre bien à des profils qualifiés."
        primaryLabel="Demander une visite"
        primaryHref="/reservation"
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />

      <section className="border-t border-[var(--border-subtle)] px-4 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="border border-[var(--border-subtle)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)]"
            >
              {point}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
