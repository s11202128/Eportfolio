import { Section } from "@/components/section";
import { achievements } from "@/data/achievements";

export const metadata = { title: "Achievements | Personal ePortfolio", description: "Achievements and recognition from my academic and professional development." };

export default function AchievementsPage() {
  return (
    <main>
      <Section eyebrow="Evidence" title="Achievements & Recognition" description="Verified achievements, certificates and recognition will be collected here.">
        {achievements.length === 0 ? (
          <div className="border border-dashed border-[#78bac7]/40 bg-[#103b40]/50 p-8">
            <p className="text-lg text-white">No achievement entries have been added yet.</p>
            <p className="mt-2 text-[#b8cccf]">This page is ready for verified evidence when it becomes available.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">{achievements.map((achievement) => <article key={achievement.title} className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#f8c268]">{achievement.date}</p><h2 className="mt-3 text-xl font-semibold text-white">{achievement.title}</h2><p className="mt-2 text-sm text-[#b8cccf]">{achievement.organization}</p><p className="mt-5 leading-7 text-[#c8d9db]">{achievement.description}</p></article>)}</div>
        )}
      </Section>
    </main>
  );
}
