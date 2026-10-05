import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  icon?: LucideIcon;
};

export function Section({
  children,
  id,
  eyebrow,
  title,
  description,
  className = "",
  icon: Icon,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-12">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {Icon ? <Icon className="size-7 shrink-0 text-[#f8c268]" strokeWidth={1.7} aria-hidden="true" /> : null}
            <span>{title}</span>
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#b8cccf] sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
