"use client";

import { navLinks } from "@/data/navigation";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { type Lang, getDir, getLangFromStorage, setLangToStorage, tCTA, tNavLabel } from "@/utils/i18n";
import { useEffect, useMemo, useState } from "react";



export default function Navbar() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    setLang(getLangFromStorage());
  }, []);

  useEffect(() => {
    setLangToStorage(lang);
    document.documentElement.dir = getDir(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const labels = useMemo(() => {
    return {
      home: tNavLabel(lang, "home"),
      catalog: tNavLabel(lang, "catalog"),
      reservation: tNavLabel(lang, "reservation"),
      about: tNavLabel(lang, "about"),
      contact: tNavLabel(lang, "contact"),
      requestVisit: tCTA(lang, "requestVisit"),
    };
  }, [lang]);

  return (

    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-50 w-full border-b border-[rgba(242,211,122,0.18)] bg-[rgba(8,8,6,0.9)] px-4 py-3 text-[var(--text-primary)] shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-xl md:px-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="group flex w-fit items-center gap-3"
          aria-label="LIONIN Immobilier - Accueil"
        >
<<<<<<< HEAD
          <span className="relative block size-14 overflow-hidden rounded-sm bg-black shadow-[0_0_24px_var(--gold-glow)] sm:size-16">
=======
          <span className="relative block size-14 overflow-hidden rounded-sm bg-black sm:size-16">

>>>>>>> 96f443e (update: enregistrement des changements)
            <Image
              src="/images/logo-lionin.jpg"
              alt="Logo LIONIN Immobilier"
              fill
              priority
              sizes="(min-width: 640px) 64px, 56px"
              className="object-contain"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">
              LIONIN
            </span>
            <span className="mt-0.5 block text-xs uppercase tracking-[0.18em] text-[var(--gold-light)]">
              Immobilier
            </span>
          </span>
        </Link>

          <div className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] lg:justify-end lg:gap-2">
          {navLinks.map((link) => {
            const key =
              link.href === "/"
                ? "home"
                : link.href === "/catalogue"
                  ? "catalog"
                  : link.href === "/reservation"
                    ? "reservation"
                    : link.href === "/a-propos"
                      ? "about"
                      : "contact";

            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm border border-transparent px-2.5 py-2 transition-all duration-200 hover:border-[var(--gold-muted)] hover:bg-[var(--black-elevated)] hover:text-[var(--gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] sm:px-3"
              >
                {labels[key as keyof typeof labels]}
              </Link>
            );
          })}

          <Button href="/reservation" size="sm" className="ml-0 mt-1 sm:ml-2 sm:mt-0">
            {labels.requestVisit}
          </Button>

        </div>
      </div>
    </nav>
  );
}