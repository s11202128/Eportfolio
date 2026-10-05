import type { CaseStudySection as CaseStudySectionData } from "@/data/pasifikahealth";

export function CaseStudySection({ section, index }: { section: CaseStudySectionData; index?: number }) {
  return (
    <article className="glass-panel relative scroll-mt-8 rounded-2xl border border-white/[0.08] p-6 sm:p-8 transition-all duration-200 hover:border-sky-500/30">
      {index ? (
        <span className="inline-block rounded-md border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 text-xs font-mono font-semibold tracking-wider text-sky-400">
          SECTION {String(index).padStart(2, "0")}
        </span>
      ) : null}
      <h2 className={`${index ? "mt-3.5" : ""} text-2xl font-bold tracking-tight text-white`}>
        {section.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300">
        {section.content}
      </p>
    </article>
  );
}
