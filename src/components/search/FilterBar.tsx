"use client";

import { useMemo, useState } from "react";

import type { Property } from "@/data/property";

type FilterBarProps = {
  properties: Property[];
  onChange?: (filtered: Property[]) => void;
};

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function roomsToNumber(value: string): number {
  const v = normalize(value);
  if (v === "studio") return 1;
  if (v.includes("pièces") || v.includes("pieces")) return 0; // unknown bucket
  if (v.includes("2")) return 2;
  if (v.includes("3")) return 3;
  if (v.includes("4")) return 4;
  return 0;
}

export default function FilterBar({ properties, onChange }: FilterBarProps) {
  const cities = useMemo(
    () => Array.from(new Set(properties.map((p) => p.location))).values(),
    [properties]
  );

  const types = useMemo(
    () => Array.from(new Set(properties.map((p) => p.category))).values(),
    [properties]
  );

  const [query, setQuery] = useState("");
  const [city, setCity] = useState<string>("all");
  const [type, setType] = useState<string>("all");
  const [rooms, setRooms] = useState<string>("all");
  const [budget, setBudget] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = normalize(query);

    return properties.filter((p) => {
      // query matches
      if (q) {
        const haystack = normalize(
          [p.title, p.location, p.category, p.detail, p.tag].join(" ")
        );
        if (!haystack.includes(q)) return false;
      }

      // city
      if (city !== "all" && p.location !== city) return false;

      // type
      if (type !== "all" && p.category !== type) return false;

      // rooms
      if (rooms !== "all") {
        const need = roomsToNumber(rooms);
        const have = roomsToNumber(p.rooms);
        // Studio / Pièces bucket handling
        if (need === 0) {
          // If user selected "Pièces" just allow anything.
        } else if (need === 4) {
          if (have < 4) return false;
        } else {
          if (have !== need) return false;
        }
      }

      // budget (based on numeric value in p.price like "48 000 MAD / mois")
      if (budget !== "all") {
        const priceNumber = Number(p.price.replace(/[^0-9]/g, ""));
        switch (budget) {
          case "lt_8000":
            if (!(priceNumber < 8000)) return false;
            break;
          case "8000_15000":
            if (!(priceNumber >= 8000 && priceNumber <= 15000)) return false;
            break;
          case "15000_30000":
            if (!(priceNumber >= 15000 && priceNumber <= 30000)) return false;
            break;
          case "gte_30000":
            if (!(priceNumber >= 30000)) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  }, [properties, query, city, type, rooms, budget]);

  // lift state (useEffect avoids “setState during render” warning)
  useMemo(() => {
    return null;
  }, []);




  return (
    <div className="mt-6">
      <div className="grid gap-4 border border-[var(--border-subtle)] bg-[rgba(8,8,6,0.72)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:gap-5 sm:p-5">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
            Recherche
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Quartier, résidence, mot-clé..."
            className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--gold)]"
          />
        </label>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:items-end">
          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
              Ville
            </span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
            >
              <option value="all">Ville ou secteur</option>
              {Array.from(cities).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
              Budget
            </span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
            >
              <option value="all">Budget</option>
              <option value="lt_8000">Moins de 8 000 MAD</option>
              <option value="8000_15000">8 000 - 15 000 MAD</option>
              <option value="15000_30000">15 000 - 30 000 MAD</option>
              <option value="gte_30000">30 000 MAD et plus</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
              Type
            </span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
            >
              <option value="all">Type de bien</option>
              {Array.from(types).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
              Pièces
            </span>
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="h-12 w-full border border-[var(--border-subtle)] bg-[var(--black)] px-4 text-sm text-white outline-none transition-colors focus:border-[var(--gold)]"
            >
              <option value="all">Pièces</option>
              <option value="studio">Studio</option>
              <option value="2">2 pièces</option>
              <option value="3">3 pièces</option>
              <option value="4+">4+ pièces</option>
            </select>
          </label>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
              Résultat
            </div>
            <div className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">
              {filtered.length} disponible(s)
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-4 text-sm text-[var(--text-secondary)]">
          Aucun bien ne correspond à vos critères.
        </div>
      ) : null}
    </div>
  );
}

