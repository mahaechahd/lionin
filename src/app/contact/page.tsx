import Button from "@/components/ui/Button";

const contactDetails = [
  {
    label: "Téléphone",
    value: "+212 6 00 00 00 00",
    note: "Disponible du lundi au vendredi",
  },
  {
    label: "Email",
    value: "contact@lionin.ma",
    note: "Pour demandes privées et partenariats",
  },
  {
    label: "Adresse",
    value: "Casablanca, Maroc",
    note: "Rendez-vous uniquement sur confirmation",
  },
];

const requestTypes = [
  "Recherche de location",
  "Demande de visite",
  "Confier un bien à louer",
  "Location entreprise / expatrié",
  "Autre demande",
];

export default function ContactPage() {
  return (
    <div className="bg-[var(--black)] text-[var(--text-primary)]">
      <section className="border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,var(--black),var(--black-soft)_58%,rgba(216,173,69,0.14))] px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)] sm:text-sm sm:tracking-[0.24em]">
              Contact LIONIN
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Parlons de votre recherche locative.
            </h1>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--text-secondary)]">
            Une question, une recherche à structurer ou un bien à confier ?
            Envoyez-nous les premiers éléments et nous reviendrons vers vous
            avec une réponse claire.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="grid gap-5">
            {contactDetails.map((detail) => (
              <article
                key={detail.label}
                className="border border-[var(--border-subtle)] bg-[var(--black-soft)] p-5 sm:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  {detail.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {detail.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {detail.note}
                </p>
              </article>
            ))}

            <article className="border border-[var(--gold-muted)] bg-[linear-gradient(145deg,rgba(216,173,69,0.16),rgba(255,255,255,0.05)_42%,rgba(8,8,6,0.94))] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold-light)]">
                Confidentialité
              </p>
              <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                Les informations partagées servent uniquement à qualifier votre
                demande et préparer un échange pertinent.
              </p>
            </article>
          </aside>

          <form className="border border-[var(--border-subtle)] bg-[rgba(20,19,15,0.86)] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.28)] sm:p-7 lg:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Nom complet
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Votre nom"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Téléphone
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+212 6 00 00 00 00"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="vous@email.com"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Sujet
                </span>
                <select
                  name="requestType"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisir un sujet
                  </option>
                  {requestTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Ville ou secteur
                </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Casablanca, Rabat, Marrakech..."
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Budget ou estimation
                </span>
                <input
                  type="text"
                  name="budget"
                  placeholder="Ex: 18 000 MAD / mois"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Décrivez votre demande, vos objectifs et les informations utiles pour vous répondre."
                  className="w-full resize-none border border-[var(--border-subtle)] bg-[var(--black)] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                Aucun envoi n&apos;est encore connecté. Le formulaire est prêt
                pour la logique à venir.
              </p>
              <Button type="submit">
                Envoyer le message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
