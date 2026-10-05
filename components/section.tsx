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
    <section id={id} className={`relative py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="size-1.5 rounded-full bg-sky-400" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="flex items-center gap-3.5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {Icon ? (
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-sm shadow-sky-500/10">
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
              </span>
            ) : null}
            <span>{title}</span>
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
