import type { Property } from "@/data/property";
import Link from "next/link";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-[var(--border-subtle)] bg-[var(--black-soft)] shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-muted)]">
      <div className="relative h-52 overflow-hidden bg-[linear-gradient(145deg,rgba(242,211,122,0.22),rgba(255,255,255,0.12)_34%,rgba(8,8,6,0.94))] sm:h-60">
        <div className="absolute inset-0 opacity-70 transition-transform duration-500 group-hover:scale-105">
          <div className="absolute left-[8%] top-[18%] h-[62%] w-[84%] border border-[rgba(242,211,122,0.26)] bg-[rgba(255,250,240,0.05)]" />
          <div className="absolute left-[15%] top-[30%] h-[26%] w-[22%] border border-[rgba(242,211,122,0.22)] bg-[rgba(255,250,240,0.08)]" />
          <div className="absolute left-[41%] top-[30%] h-[26%] w-[22%] border border-[rgba(242,211,122,0.22)] bg-[rgba(255,250,240,0.08)]" />
          <div className="absolute left-[67%] top-[30%] h-[26%] w-[18%] border border-[rgba(242,211,122,0.22)] bg-[rgba(255,250,240,0.08)]" />
          <div className="absolute bottom-[18%] left-[14%] h-[2px] w-[72%] bg-[rgba(242,211,122,0.28)]" />
        </div>
        <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] bg-[var(--gold)] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[var(--black)] sm:left-4 sm:top-4 sm:px-3 sm:tracking-[0.14em]">
          {property.tag}
        </span>
        <span className="absolute bottom-4 left-4 bg-[rgba(8,8,6,0.76)] px-3 py-2 text-sm font-semibold text-[var(--gold-light)] backdrop-blur">
          {property.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)] sm:text-sm sm:tracking-[0.18em]">
            {property.location}
          </p>
          <span className="w-fit max-w-full border border-[rgba(242,211,122,0.24)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--gold-light)] sm:tracking-[0.14em]">
            {property.category}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
          {property.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
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
          <p className="font-semibold leading-6 text-[var(--gold-light)]">
            {property.price}
          </p>
          <Link
            href="/reservation"
            className="inline-flex min-h-11 items-center justify-center border border-[var(--gold-muted)] px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[var(--black)] hover:text-[var(--gold-light)] sm:min-h-0 sm:border-0 sm:px-0 sm:py-0 sm:tracking-[0.14em]"
          >
            Demander une visite
          </Link>
        </div>
      </div>
    </article>
  );
}
