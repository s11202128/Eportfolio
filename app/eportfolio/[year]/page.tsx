import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, GraduationCap } from "@/components/icons";

const years = ["year-1", "year-2", "year-3", "year-4"] as const;

export function generateStaticParams() {
  return years.map((year) => ({ year }));
}

export default async function EportfolioYearPage({ params }: PageProps<"/eportfolio/[year]">) {
  const { year } = await params;
  const yearIndex = years.indexOf(year as (typeof years)[number]);
  if (yearIndex === -1) notFound();

  return (
    <main className="relative min-h-[80vh] bg-[#07090e] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          href="/eportfolio"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-sky-400"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to ePortfolio Overview
        </Link>

        <header className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            ACADEMIC RECORD · 0{yearIndex + 1}
          </div>

          <h1 className="mt-4 flex items-center gap-3.5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="flex size-11 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-sm shadow-sky-500/10">
              <GraduationCap size={24} strokeWidth={2} aria-hidden="true" />
            </span>
            <span>Year {yearIndex + 1} Portfolio</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Coursework evidence, technical artefacts, team contributions, and progressive reflections for Year {yearIndex + 1}.
          </p>
        </header>

        {/* Evidence Card Container */}
        <div className="glass-panel mt-12 rounded-2xl border border-dashed border-white/15 p-8 sm:p-12 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400">
            <GraduationCap size={22} aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-lg font-bold text-white">Academic Evidence Staging</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
            Detailed unit reflections, marks, design documents, and project deliverables for Year {yearIndex + 1} will be populated here as verified evidence.
          </p>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 transition hover:text-sky-300"
            >
              <span>Explore related projects</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
