import { redirect } from "next/navigation";
import { AdminWorkspace } from "@/components/admin/admin-workspace";
import {
  createAchievement,
  createProject,
  createSkillGroup,
  deleteAchievement,
  deleteProject,
  deleteSkillGroup,
  signOut,
  updateAchievement,
  updateProject,
  updateSkillGroup,
} from "@/app/admin/actions";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

type Tab = "projects" | "skills" | "achievements";

export const metadata = {
  title: "Admin dashboard | Personal ePortfolio",
  description: "Manage your ePortfolio content.",
};

function getTab(value: string | string[] | undefined): Tab {
  const normalized = Array.isArray(value) ? value[0] : value;
  return normalized === "skills" || normalized === "achievements" ? normalized : "projects";
}

export default async function AdminPage({ searchParams }: PageProps<"/admin">) {
  if (!hasSupabaseEnv()) redirect("/admin/login");

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { tab } = await searchParams;
  const [projectsResult, skillGroupsResult, skillsResult, achievementsResult] = await Promise.all([
    supabase.from("projects").select("*").eq("owner_id", user.id).order("created_at", { ascending: false }),
    supabase.from("skill_groups").select("*").eq("owner_id", user.id).order("sort_order"),
    supabase.from("skills").select("*").eq("owner_id", user.id).order("sort_order"),
    supabase.from("achievements").select("*").eq("owner_id", user.id).order("created_at", { ascending: false }),
  ]);

  return (
    <main className="relative min-h-[85vh] bg-[#07090e] px-6 py-16 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="inline-block rounded-md border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              ADMIN WORKSPACE
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Manage Your Portfolio
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
              A protected workspace for updating verified evidence, projects, skill matrices, and credentials.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="max-w-52 truncate rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
              {user.email}
            </span>
            <form action={signOut}>
              <button
                className="text-xs font-semibold text-rose-400 transition hover:text-rose-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                type="submit"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <AdminWorkspace
            activeTab={getTab(tab)}
            projects={projectsResult.data ?? []}
            skillGroups={skillGroupsResult.data ?? []}
            skills={skillsResult.data ?? []}
            achievements={achievementsResult.data ?? []}
            actions={{
              createProject,
              updateProject,
              deleteProject,
              createSkillGroup,
              updateSkillGroup,
              deleteSkillGroup,
              createAchievement,
              updateAchievement,
              deleteAchievement,
            }}
          />
        </div>
      </div>
    </main>
  );
}
