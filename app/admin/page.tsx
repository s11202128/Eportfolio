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

function getTab(value: string | undefined): Tab {
  return value === "skills" || value === "achievements" ? value : "projects";
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
    <main className="min-h-[75vh] px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 border-b border-[#78bac7]/20 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Admin workspace</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Manage your portfolio</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c8d9db]">A focused workspace for keeping your public portfolio current, organised, and evidence-led.</p>
          </div>
          <div className="flex items-center gap-4 text-sm"><span className="max-w-52 truncate text-[#b8cccf]">{user.email}</span><form action={signOut}><button className="font-semibold text-[#f8c268] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]" type="submit">Sign out</button></form></div>
        </div>
        <div className="mt-8"><AdminWorkspace activeTab={getTab(tab)} projects={projectsResult.data ?? []} skillGroups={skillGroupsResult.data ?? []} skills={skillsResult.data ?? []} achievements={achievementsResult.data ?? []} actions={{ createProject, updateProject, deleteProject, createSkillGroup, updateSkillGroup, deleteSkillGroup, createAchievement, updateAchievement, deleteAchievement }} /></div>
      </div>
    </main>
  );
}
