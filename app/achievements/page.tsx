import { Section } from "@/components/section";
import { Award, Trophy } from "@/components/icons";
import { getPublishedAchievements } from "@/lib/content";

export const metadata = {
  title: "Achievements & Recognition | Personal ePortfolio",
  description: "Verified achievements, awards, and recognition from my academic and professional development.",
};

export default async function AchievementsPage() {
  const achievements = await getPublishedAchievements();

  return (
    <main className="relative min-h-[85vh] bg-[#07090e]">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

      <Section
        icon={Trophy}
        eyebrow="Evidence &amp; Honors"
        title="Achievements & Recognition"
        description="A verified collection of academic honors, technical certifications, competition awards, and formal acknowledgments."
      >
        {achievements.length === 0 ? (
          <div className="glass-panel mx-auto max-w-2xl rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <Trophy size={22} aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-bold text-white">No achievement entries added yet</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              This space is prepared to showcase verified awards, competition results, and industry certificates as they are earned.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="glass-panel-interactive relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] p-7 transition-all duration-300 hover:border-amber-500/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-xs font-mono font-semibold tracking-wider text-amber-400">
                      <Award size={13} aria-hidden="true" />
                      {achievement.date}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {achievement.organization}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold tracking-tight text-white">
                    {achievement.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {achievement.description}
                  </p>
                </div>

                {achievement.evidenceUrl ? (
                  <div className="mt-6 border-t border-white/[0.05] pt-4">
                    <a
                      href={achievement.evidenceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-xs font-semibold text-amber-400 underline-offset-4 hover:underline"
                    >
                      View verification credential →
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
