import type { Achievement } from "@/data/achievements";

export function AchievementPreview({ items }: { items: readonly Achievement[] }) {
  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-[#78bac7]/40 bg-[#103b40]/60 p-6 text-sm leading-6 text-[#c8d9db]">
        Verified achievement records will be added here as they become available.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.slice(0, 4).map((achievement) => (
        <article key={achievement.title} className="rounded-xl border border-[#78bac7]/25 bg-[#103b40] p-6">
          <p className="text-sm text-[#f8c268]">{achievement.organization} · {achievement.date}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{achievement.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#c8d9db]">{achievement.description}</p>
        </article>
      ))}
    </div>
  );
}
