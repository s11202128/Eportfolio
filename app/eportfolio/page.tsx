import Link from "next/link";
import { Section } from "@/components/section";
import { ArrowRight, GraduationCap } from "@/components/icons";

const years = [
  { name: "Year 1", label: "Foundations", status: "Completed" },
  { name: "Year 2", label: "Core Engineering", status: "Completed" },
  { name: "Year 3", label: "Advanced Systems", status: "In Progress" },
  { name: "Year 4", label: "Capstone & Industry", status: "Upcoming" },
] as const;

export const metadata = {
  title: "Academic ePortfolio | Personal ePortfolio",
  description: "An academic record of my software engineering development, coursework evidence, and reflections.",
};

export default function EportfolioPage() {
  return (
    <main className="relative min-h-[85vh] bg-[#07090e]">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />

      <Section
        icon={GraduationCap}
        eyebrow="Academic Curriculum"
        title="Academic ePortfolio"
        description="A verified record of my academic progression, coursework artefacts, software engineering problem-solving, and continuous learning reflections."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {years.map((yearItem, index) => (
            <Link
              key={yearItem.name}
              href={`/eportfolio/year-${index + 1}`}
              className="glass-panel-interactive group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] p-7 transition-all duration-300 hover:border-sky-500/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/25 bg-sky-500/10 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-sky-400">
                    0{index + 1}
                  </span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    {yearItem.status}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-sky-300">
                  {yearItem.name}
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {yearItem.label}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Academic coursework, software engineering evidence, and verified reflections.
                </p>
              </div>

              <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-sky-400">
                <span>View evidence</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}