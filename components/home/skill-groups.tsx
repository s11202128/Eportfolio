import type { SkillGroup } from "@/data/skills";

export function SkillGroups({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <article key={group.name} className="rounded-xl border border-[#78bac7]/25 bg-[#103b40] p-5">
          <h3 className="font-semibold text-white">{group.name}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li key={skill} className="rounded-md bg-[#0d3034] px-3 py-1.5 text-sm text-[#c8d9db]">
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
