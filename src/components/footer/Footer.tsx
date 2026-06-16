import { footerServices } from "@/data/footer";
import { navLinks } from "@/data/navigation";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[linear-gradient(180deg,var(--black-soft),var(--black))] px-6 py-12 text-[var(--text-primary)] sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-3">
            <span className="grid size-10 place-items-center rounded-sm border border-[var(--gold)] bg-[var(--gold-contrast)] text-sm font-bold text-[var(--gold-light)]">
              LI
            </span>
            <span className="text-xl font-semibold tracking-wide text-[var(--gold-light)]">
              LIONIN
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-[var(--text-secondary)]">
            Immobilier premium au Maroc, avec une sélection exigeante et un
            accompagnement clair pour chaque décision importante.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
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
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
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
