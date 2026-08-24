import type { CaseStudySection as CaseStudySectionData } from "@/data/pasifikahealth";

export function CaseStudySection({ section, index }: { section: CaseStudySectionData; index?: number }) {
  return (
    <article className="scroll-mt-8 rounded-xl border border-[#78bac7]/25 bg-[#103b40] p-6 sm:p-7">
      {index ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f8c268]">{String(index).padStart(2, "0")}</p> : null}
      <h2 className={`${index ? "mt-3" : ""} text-2xl font-semibold tracking-tight text-white`}>{section.title}</h2>
      <p className="mt-4 leading-7 text-[#c8d9db]">{section.content}</p>
    </article>
  );
}
