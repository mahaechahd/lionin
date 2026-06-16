import PropertyCard from "@/components/property/PropertyCard";
import { properties } from "@/data/property";

const categories = [
  "Tous",
  ...Array.from(new Set(properties.map((property) => property.category))),
];
const locations = [
  "Tous les secteurs",
  ...Array.from(new Set(properties.map((property) => property.location))),
];
const quickFilters = ["Budget premium", "Visite privée", "Nouveautés", "Exclusif"];

export default function CataloguePage() {
  return (
    <div className="-m-6 bg-[var(--black)] text-[var(--text-primary)]">
      <section className="border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,var(--black),var(--black-soft)_62%,rgba(216,173,69,0.12))] px-5 py-8 sm:px-8 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-light)]">
                Catalogue LIONIN
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Rechercher un bien
              </h1>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              {properties.length} biens visibles
            </p>
          </div>

          <div className="grid gap-5 border border-[var(--border-subtle)] bg-[rgba(8,8,6,0.62)] p-5 backdrop-blur sm:p-6 lg:grid-cols-[minmax(280px,1fr)_minmax(160px,200px)_minmax(180px,240px)_auto] lg:items-end">
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                Recherche
              </span>
              <input
                type="search"
                name="search"
                placeholder="Villa, quartier, ville..."
                className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                Type
              </span>
              <select
                name="category"
                className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                Secteur
              </span>
              <select
                name="location"
                className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
              >
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className="h-12 bg-[var(--gold)] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[var(--black)] transition-colors hover:bg-[var(--gold-light)] lg:min-w-32"
            >
              Filtrer
            </button>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="shrink-0 border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--gold-muted)] hover:text-[var(--gold-light)]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                Sélection actuelle
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Tous les biens
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--text-secondary)]">
              Une base claire pour identifier les biens à visiter et avancer
              vers une sélection plus confidentielle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
