import { properties } from "@/data/property";
import Button from "@/components/ui/Button";

const visitTypes = [
  "Visite privée",
  "Appel de qualification",
  "Dossier locataire",
  "Confier un bien à louer",
  "Relocation entreprise",
];

const timeSlots = ["Matin", "Après-midi", "Soirée"];

export default function ReservationPage() {
  return (
    <div className="bg-[var(--black)] text-[var(--text-primary)]">
      <section className="border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,var(--black),var(--black-soft)_58%,rgba(216,173,69,0.14))] px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)] sm:text-sm sm:tracking-[0.24em]">
              Réservation LIONIN
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Planifier une visite ou un premier échange locatif.
            </h1>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--text-secondary)]">
            Partagez vos disponibilités et les grandes lignes de votre projet.
            L&apos;équipe prépare ensuite une réponse claire avec les prochaines
            étapes adaptées à votre recherche.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="border border-[var(--border-subtle)] bg-[var(--black-soft)] p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
              Préparation
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Ce formulaire reste simple pour démarrer vite.
            </h2>
            <div className="mt-7 grid gap-4 text-sm leading-6 text-[var(--text-secondary)]">
              <p>
                Indiquez le bien, le type de rendez-vous et le créneau qui vous
                convient le mieux.
              </p>
              <p>
                Pour une recherche confidentielle, choisissez &quot;À définir
                avec LIONIN&quot; dans la liste des biens.
              </p>
            </div>
            <div className="mt-8 border-t border-[var(--border-subtle)] pt-6">
              <p className="text-sm font-semibold text-[var(--gold-light)]">
                Réponse habituelle sous 24h ouvrées.
              </p>
            </div>
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
                  Type de rendez-vous
                </span>
                <select
                  name="visitType"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisir une option
                  </option>
                  {visitTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Bien souhaité
                </span>
                <select
                  name="property"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Sélectionner un bien
                  </option>
                  <option>À définir avec LIONIN</option>
                  {properties.map((property) => (
                    <option key={property.id}>{property.title}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Date souhaitée
                </span>
                <input
                  type="date"
                  name="preferredDate"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Créneau
                </span>
                <select
                  name="timeSlot"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisir un créneau
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Budget indicatif
                </span>
                <input
                  type="text"
                  name="budget"
                  placeholder="Ex: 18 000 MAD / mois"
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Ville ou secteur
                </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Casablanca, Anfa, Bouskoura..."
                  className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet, vos critères et toute contrainte de disponibilité."
                  className="w-full resize-none border border-[var(--border-subtle)] bg-[var(--black)] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                Aucun envoi n&apos;est encore connecté. Le formulaire est prêt pour
                la logique à venir.
              </p>
              <Button type="submit">
                Envoyer la demande
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
