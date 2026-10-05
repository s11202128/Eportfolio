import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-semibold shadow-[0_4px_20px_-2px_rgba(56,189,248,0.35)] hover:from-sky-300 hover:to-sky-400 hover:shadow-[0_6px_25px_-2px_rgba(56,189,248,0.5)] focus-visible:outline-sky-400 active:scale-[0.98]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white backdrop-blur-md focus-visible:outline-sky-400 active:scale-[0.98]",
  text: "text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline focus-visible:outline-sky-400",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
