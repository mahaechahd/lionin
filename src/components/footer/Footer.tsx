import { footerServices } from "@/data/footer";
import { navLinks } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[linear-gradient(180deg,var(--black-soft),var(--black))] px-4 py-10 text-[var(--text-primary)] sm:px-10 sm:py-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-3">
            <span className="relative block size-20 overflow-hidden rounded-sm bg-black sm:size-24">
              <Image
                src="/images/logo-lionin.jpg"
                alt="Logo LIONIN Immobilier"
                fill
                sizes="(min-width: 640px) 96px, 80px"
                className="object-contain"
              />
            </span>
            <span>
              <span className="block text-base font-semibold uppercase tracking-[0.22em] text-white">
                LIONIN
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-[var(--gold-light)]">
                Immobilier
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-[var(--text-secondary)]">
            Locations premium au Maroc, avec une sélection exigeante, des
            visites maîtrisées et un accompagnement clair jusqu&apos;au bail.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)] sm:text-sm sm:tracking-[0.18em]">
            Navigation
          </h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-light)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)] sm:text-sm sm:tracking-[0.18em]">
            Services
          </h2>
          <div className="mt-5 grid gap-3">
            {footerServices.map((service) => (
              <p key={service} className="text-sm text-[var(--text-secondary)]">
                {service}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)] sm:text-sm sm:tracking-[0.18em]">
            Contact
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-[var(--text-secondary)]">
            <p>Casablanca, Maroc</p>
            <a href="tel:+212617042339" className="w-fit hover:text-[var(--gold-light)]">
              0617042339
            </a>
              <a href="mailto:lioninimmobilier@gmail.com" className="w-fit hover:text-[var(--gold-light)]">
              lioninimmobilier@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LIONIN. Tous droits réservés.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="hover:text-[var(--gold-light)]">
            Contact
          </Link>
          <Link href="/reservation" className="hover:text-[var(--gold-light)]">
            Réserver une visite
          </Link>
        </div>
      </div>
    </footer>
  );
}
