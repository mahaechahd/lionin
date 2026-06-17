import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center rounded-sm font-bold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--gold)] text-[var(--black)] shadow-[0_16px_34px_rgba(216,173,69,0.18)] hover:-translate-y-0.5 hover:bg-[var(--gold-light)]",
  secondary:
    "border border-[var(--gold-muted)] bg-[rgba(8,8,6,0.28)] text-[var(--gold-light)] hover:-translate-y-0.5 hover:border-[var(--gold-light)] hover:bg-[var(--black-elevated)]",
  ghost:
    "border border-transparent text-[var(--gold-light)] hover:border-[var(--gold-muted)] hover:bg-[var(--black-elevated)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-xs",
  md: "min-h-12 px-5 py-3 text-sm",
  lg: "min-h-13 px-6 py-4 text-sm sm:px-7",
};

type SharedProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  children,
  className = "",
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (typeof (props as LinkButtonProps).href === "string") {
    const { href, ...linkProps } = props as LinkButtonProps;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
