import { ButtonLink } from "@/components/button-link";
import { ArrowRight, CircleUserRound, Sparkles, Terminal } from "@/components/icons";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About | Personal ePortfolio",
  description: "Learn more about Samson Limanikuki, software engineering student and aspiring software engineer.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-[85vh] bg-[#07090e]">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />

      <Section
        icon={CircleUserRound}
        eyebrow="Profile Overview"
        title="About Me"
        description="The background, core values, and developmental purpose driving this software engineering portfolio."
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-panel rounded-2xl border border-white/[0.08] p-8 sm:p-10">
            <h3 className="text-xl font-bold text-white">Engineering Philosophy</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile.about}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile.introduction}
            </p>
          </div>

          <div className="glass-panel flex flex-col justify-between rounded-2xl border border-sky-500/20 bg-sky-500/[0.03] p-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                  <Terminal size={14} aria-hidden="true" />
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                  Current Focus
                </span>
              </div>
              <h4 className="mt-4 text-lg font-bold text-white">
                {profile.role}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Specializing in robust software engineering, scalable architectures, and evidence-driven development.
              </p>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <span className="text-xs text-slate-500">Location &amp; Availability</span>
              <p className="mt-1 text-xs font-semibold text-slate-300">Open to Internships &amp; Graduate Roles</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        icon={Sparkles}
        eyebrow="Standards"
        title="An Evidence-Led Portfolio"
        description="Built to showcase real verified artefacts rather than unproven claims."
        className="border-t border-white/[0.08] bg-slate-950/40"
      >
        <div className="glass-panel rounded-2xl border border-white/[0.08] p-8 sm:p-10">
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            This digital portfolio documents academic coursework, technical problem-solving, architectural blueprints, and professional development as they are completed and verified through rigorous assessment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/projects" className="group">
              Explore My Projects
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/skills" variant="secondary">
              View Technical Toolkit
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
