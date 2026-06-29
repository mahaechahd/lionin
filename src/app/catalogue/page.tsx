"use client";

import { useMemo, useState } from "react";

import PropertyCard from "@/components/property/PropertyCard";
import ContactCTA from "@/components/cta/ContactCTA";
import FilterBar from "@/components/search/FilterBar";
import SectionTitle from "@/components/ui/SectionTitle";
import { properties } from "@/data/property";


const quickFilters = [
  "Vide",
  "Meublé",
  "Caution",
  "Longue durée",
<<<<<<< HEAD
=======
  "1AN+",
>>>>>>> 96f443e (update: enregistrement des changements)
];




export default function CataloguePage() {
  const [filtered, setFiltered] = useState(properties);

  return (
    <div className="bg-[var(--black)] text-[var(--text-primary)]">

      <section className="border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,var(--black),var(--black-soft)_62%,rgba(216,173,69,0.12))] px-4 py-8 sm:px-8 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)] sm:text-sm sm:tracking-[0.24em]">
                Catalogue LIONIN
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Rechercher une location premium
              </h1>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              {properties.length} biens visibles
            </p>
          </div>

          <div className="mt-6">
            <FilterBar properties={properties} onChange={setFiltered} />

            <div className="mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {quickFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    // simple “cases” filters based on property fields
                    const normalize = (s: string) => s.trim().toLowerCase();
                    const has = (p: string, needle: string) =>
                      normalize(p).includes(normalize(needle));

                    if (filter === "Vide") {
                      setFiltered(
                        properties.filter((p) => !has(p.detail, "meubl") && !has(p.title, "meubl") && !has(p.tag, "meubl"))
                      );
                      return;
                    }
                    if (filter === "Meublé") {
                      setFiltered(
                        properties.filter((p) => has(p.detail, "meubl") || has(p.title, "meubl") || has(p.tag, "meubl"))
                      );
                      return;
                    }
                    if (filter === "Caution") {
                      // fallback: we treat “Caution” as presence of “contrat”/“longue durée” wording
                      setFiltered(
                        properties.filter((p) => has(p.detail, "contrat") || has(p.detail, "caution"))
                      );
                      return;
                    }
                    if (filter === "Longue durée") {
                      setFiltered(
                        properties.filter((p) => has(p.detail, "longue") || has(p.detail, "durée") || has(p.tag, "Disponible"))
                      );
                      return;
                    }
                    if (filter === "1AN+") {
                      setFiltered(
                        properties.filter((p) => has(p.detail, "contrat") || has(p.detail, "longue"))
                      );
                      return;
                    }
                  }}
                  className="shrink-0 border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--gold-muted)] hover:text-[var(--gold-light)] sm:px-4"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Sélection actuelle"
            title="Tous les biens à louer"
            description="Une base claire pour identifier les biens à visiter et avancer vers une sélection plus confidentielle."
          />

<<<<<<< HEAD
          <div className="grid gap-6 md:grid-cols-3 2xl:grid-cols-3">
            {properties.map((property) => (
=======
          <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {filtered.map((property) => (

>>>>>>> 96f443e (update: enregistrement des changements)
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Besoin d'une short-list ?"
        title="Vous cherchez un bien précis ou confidentiel ?"
        description="Envoyez vos critères et LIONIN vous prépare une sélection locative plus ciblée."
        primaryLabel="Demander une visite"
        primaryHref="/reservation"
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />
    </div>
  );
}
