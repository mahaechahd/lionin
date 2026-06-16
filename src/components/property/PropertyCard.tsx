import type { Property } from "@/data/property";
import Link from "next/link";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[var(--border-subtle)] bg-[var(--black-soft)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative h-52 bg-[linear-gradient(145deg,rgba(242,211,122,0.2),rgba(255,255,255,0.12)_34%,rgba(8,8,6,0.94))] sm:h-60">
        <span className="absolute left-4 top-4 bg-[var(--gold)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--black)]">
          {property.tag}
        </span>
        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2 opacity-90">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="h-8 border border-[rgba(242,211,122,0.24)] bg-[rgba(255,250,240,0.08)] sm:h-9"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            {property.location}
          </p>
          <span className="w-fit border border-[rgba(242,211,122,0.24)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-light)]">
            {property.category}
          </span>
        </div>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {property.title}
        </h3>
        <p className="mt-3 leading-6 text-[var(--text-secondary)]">
          {property.detail}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[var(--border-subtle)] py-4 text-sm text-[var(--text-secondary)]">
          <p>
            <span className="block text-xs uppercase tracking-[0.14em] text-[rgba(201,192,173,0.68)]">
              Surface
            </span>
            <span className="mt-1 block text-white">{property.surface}</span>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.14em] text-[rgba(201,192,173,0.68)]">
              Pièces
            </span>
            <span className="mt-1 block text-white">{property.rooms}</span>
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-[var(--gold-light)]">
            {property.price}
          </p>
          <Link
            href="/reservation"
            className="inline-flex h-11 items-center justify-center border border-[var(--gold-muted)] px-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[var(--black)] hover:text-[var(--gold-light)] sm:h-auto sm:border-0 sm:px-0"
          >
            Visiter
          </Link>
        </div>
      </div>
    </article>
  );
}
