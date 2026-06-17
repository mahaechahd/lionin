import Button from "@/components/ui/Button";

type ContactCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function ContactCTA({
  eyebrow = "Consultation privée",
  title,
  description,
  primaryLabel = "Demander une visite",
  primaryHref = "/reservation",
  secondaryLabel = "Nous contacter",
  secondaryHref = "/contact",
}: ContactCTAProps) {
  return (
    <section className="px-4 py-14 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden border border-[var(--gold)] bg-[linear-gradient(135deg,var(--black-soft),var(--black)_58%,rgba(216,173,69,0.18))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-light)] sm:text-sm sm:tracking-[0.22em]">
              {eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--text-secondary)]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} size="lg" variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
