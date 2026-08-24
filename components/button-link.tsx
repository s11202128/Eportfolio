import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
};

const variants = {
  primary:
    "bg-[#46a5bb] text-[#08262a] hover:bg-[#6cb6c7] focus-visible:outline-[#f8c268]",
  secondary:
    "border border-[#78bac7]/60 text-white hover:border-[#f8c268] hover:bg-white/5 focus-visible:outline-[#f8c268]",
  text: "text-[#f8c268] underline-offset-4 hover:text-[#ffe0a5] hover:underline focus-visible:outline-[#f8c268]",
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
