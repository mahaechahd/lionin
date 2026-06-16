import { navLinks } from "@/data/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,var(--black),var(--black-soft))] px-5 py-4 text-[var(--text-primary)] shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur md:px-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="group flex w-fit items-center gap-3 text-xl font-semibold tracking-wide"
        >
          <span className="grid size-10 place-items-center rounded-sm border border-[var(--gold)] bg-[var(--gold-contrast)] text-sm font-bold text-[var(--gold-light)] shadow-[0_0_24px_var(--gold-glow)] transition-colors group-hover:bg-[var(--gold)] group-hover:text-[var(--black)]">
            LI
          </span>
          <span className="leading-none text-[var(--gold-light)]">
            LIONIN
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--text-secondary)] sm:justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm border border-transparent px-3 py-2 transition-all duration-200 hover:border-[var(--gold-muted)] hover:bg-[var(--black-elevated)] hover:text-[var(--gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
