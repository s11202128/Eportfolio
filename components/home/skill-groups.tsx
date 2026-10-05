import type { SkillGroup } from "@/data/skills";
import { Terminal } from "@/components/icons";

export function SkillGroups({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <article
          key={group.name}
          className="glass-panel-interactive relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] p-6 transition-all duration-300"
        >
          {/* Subtle decorative glow */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-sky-500/10 blur-xl" />

          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg border border-sky-500/25 bg-sky-500/10 text-sky-400">
                  <Terminal size={14} aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold tracking-tight text-white">
                  {group.name}
                </h3>
              </div>
              <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-slate-400">
                {group.skills.length} {group.skills.length === 1 ? "item" : "items"}
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.name} skills`}>
              {group.skills.map((skill) => {
                const isPlaceholder = skill.toLowerCase().includes("to be documented");
                return (
                  <li
                    key={skill}
                    className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-colors ${
                      isPlaceholder
                        ? "border border-dashed border-white/10 bg-white/[0.02] text-slate-500 italic"
                        : "border border-white/10 bg-white/[0.04] text-slate-200 shadow-sm hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300"
                    }`}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
