import { Section } from "@/components/section";
import { Route } from "@/components/icons";
import { journeyStages } from "@/data/journey";

export const metadata = {
  title: "Engineering Journey | Personal ePortfolio",
  description: "The developmental stages and milestones shaping my transition from student to software engineer.",
};

export default function JourneyPage() {
  return (
    <main className="relative min-h-[85vh] bg-[#07090e]">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

      <Section
        icon={Route}
        eyebrow="Milestone Pipeline"
        title="Engineering Journey"
        description="A structured roadmap outlining the development phases, technical competencies, and coursework progression shaping my transition into professional software engineering."
      >
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeyStages.map((stage, index) => (
            <li
              key={stage}
              className="glass-panel-interactive group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] p-7 transition-all duration-300 hover:border-sky-500/30"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/25 bg-sky-500/10 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-sky-400">
                    STAGE 0{index + 1}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Phase {index + 1} of {journeyStages.length}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-sky-300">
                  {stage}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Evidence, key milestones, and critical reflections for this development stage will be documented as the journey progresses.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.05] pt-4 text-xs font-medium text-slate-500">
                <span className="flex size-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                <span>Verified academic &amp; technical milestones</span>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </main>
  );
}
