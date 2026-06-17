type SectionTitleProps = {
  align?: "left" | "center";
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  action?: React.ReactNode;
};

export default function SectionTitle({
  align = "left",
  eyebrow,
  title,
  description,
  dark = true,
  action,
}: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-10 flex flex-col gap-5 ${
        isCentered
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={isCentered ? "max-w-3xl" : "max-w-3xl"}>
        {eyebrow ? (
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em] ${
              dark ? "text-[var(--gold)]" : "text-[var(--gold-dark)]"
            }`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`text-3xl font-semibold leading-tight text-balance sm:text-4xl ${
            dark ? "text-white" : "text-[var(--black)]"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 max-w-2xl leading-7 ${
              dark ? "text-[var(--text-secondary)]" : "text-[#5f5748]"
            } ${isCentered ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
