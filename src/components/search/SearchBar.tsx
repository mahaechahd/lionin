import Button from "@/components/ui/Button";
import type { Property } from "@/data/property";

type SearchBarProps = {
  properties: Property[];
  compact?: boolean;
};

const budgetOptions = [
  "Budget",
  "Moins de 8 000 MAD",
  "8 000 - 15 000 MAD",
  "15 000 - 30 000 MAD",
  "30 000 MAD et plus",
];

const roomOptions = ["Pièces", "Studio", "2 pièces", "3 pièces", "4+ pièces"];

export default function SearchBar({ properties, compact = false }: SearchBarProps) {
  const cities = [
    "Ville ou secteur",
    ...Array.from(new Set(properties.map((property) => property.location))),
  ];
  const types = [
    "Type de bien",
    ...Array.from(new Set(properties.map((property) => property.category))),
  ];

  return (
    <form
      className={`grid min-w-0 gap-4 border border-[var(--border-subtle)] bg-[rgba(8,8,6,0.72)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:gap-5 sm:p-5 ${
        compact
          ? "lg:grid-cols-[1.1fr_1fr_1fr_1fr_auto]"
          : "lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_auto]"
      } lg:items-end`}
      role="search"
      aria-label="Rechercher une location"
    >
      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
          Recherche
        </span>
        <input
          type="search"
          name="search"
          placeholder="Quartier, résidence, mot-clé..."
          className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
          Ville
        </span>
        <select
          name="city"
          className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
          defaultValue={cities[0]}
        >
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
          Budget
        </span>
        <select
          name="budget"
          className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
          defaultValue={budgetOptions[0]}
        >
          {budgetOptions.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
          Type
        </span>
        <select
          name="type"
          className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
          defaultValue={types[0]}
        >
          {types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>

      {!compact ? (
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
            Pièces
          </span>
          <select
            name="rooms"
            className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
            defaultValue={roomOptions[0]}
          >
            {roomOptions.map((rooms) => (
              <option key={rooms}>{rooms}</option>
            ))}
          </select>
        </label>
      ) : null}

      <Button type="submit" className="h-12 lg:min-w-32">
        Filtrer
      </Button>
    </form>
  );
}
