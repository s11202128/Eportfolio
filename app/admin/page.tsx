import { redirect } from "next/navigation";
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
import { createClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/config";

export const metadata = {
  title: "Admin dashboard | Personal ePortfolio",
  description: "Manage your ePortfolio content.",
};

export default async function AdminPage() {
  if (!hasSupabaseEnv()) {
    redirect("/admin/login");
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  const [projectsResult, skillGroupsResult, skillsResult, achievementsResult] = await Promise.all([
    supabase.from("projects").select("*").eq("owner_id", user.id).order("created_at", { ascending: false }),
    supabase.from("skill_groups").select("*").eq("owner_id", user.id).order("sort_order"),
    supabase.from("skills").select("*").eq("owner_id", user.id).order("sort_order"),
    supabase.from("achievements").select("*").eq("owner_id", user.id).order("created_at", { ascending: false }),
  ]);
  const projects = projectsResult.data ?? [];
  const skillGroups = skillGroupsResult.data ?? [];
  const skills = skillsResult.data ?? [];
  const achievements = achievementsResult.data ?? [];
  const skillsForGroup = (groupId: string) => skills.filter((skill) => skill.group_id === groupId).map((skill) => skill.name).join(", ");
  const inputClass = "mt-1 w-full rounded-md border border-[#78bac7]/30 bg-[#08262a] px-3 py-2 text-sm text-white outline-none focus:border-[#f8c268]";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.12em] text-[#b8cccf]";

  return (
    <main className="min-h-[75vh] px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Admin workspace</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Manage your portfolio</h1>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4"><p className="text-lg leading-8 text-[#c8d9db]">Signed in as {user.email}. Manage unpublished drafts and published portfolio content here.</p><form action={signOut}><button className="text-sm font-semibold text-[#f8c268] hover:underline" type="submit">Sign out</button></form></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#b8cccf]">Projects</p><p className="mt-3 text-3xl font-semibold text-white">{projects.length}</p></article>
          <article className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#b8cccf]">Skill groups</p><p className="mt-3 text-3xl font-semibold text-white">{skillGroups.length}</p></article>
          <article className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#b8cccf]">Achievements</p><p className="mt-3 text-3xl font-semibold text-white">{achievements.length}</p></article>
        </div>
        <section className="mt-14"><h2 className="text-2xl font-semibold text-white">Projects</h2><div className="mt-5 grid gap-5 lg:grid-cols-2">
          <form action={createProject} className="space-y-3 border border-dashed border-[#78bac7]/40 p-5"><h3 className="font-semibold text-[#f8c268]">Add project</h3><label className={labelClass}>Title<input className={inputClass} name="title" required /></label><label className={labelClass}>Slug<input className={inputClass} name="slug" required /></label><label className={labelClass}>Description<textarea className={inputClass} name="description" required /></label><label className={labelClass}>Category<input className={inputClass} name="category" required /></label><label className={labelClass}>Project type<input className={inputClass} name="project_type" required /></label><label className={labelClass}>Technologies<input className={inputClass} name="technologies" placeholder="React, TypeScript" /></label><label className={labelClass}>Case study URL<input className={inputClass} name="case_study_url" /></label><label className="flex items-center gap-2 text-sm text-[#c8d9db]"><input type="checkbox" name="published" /> Publish now</label><button className="rounded-md bg-[#46a5bb] px-4 py-2 text-sm font-semibold text-[#08262a]" type="submit">Add project</button></form>
          <div className="space-y-4">{projects.map((project) => <form key={project.id} action={updateProject} className="space-y-3 border border-[#78bac7]/25 bg-[#103b40] p-5"><input type="hidden" name="id" value={project.id} /><div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-white">Edit project</h3><button formAction={deleteProject} className="text-xs font-semibold text-[#ffb4a8] hover:underline" type="submit">Delete</button></div><label className={labelClass}>Title<input className={inputClass} name="title" defaultValue={project.title} required /></label><label className={labelClass}>Slug<input className={inputClass} name="slug" defaultValue={project.slug} required /></label><label className={labelClass}>Description<textarea className={inputClass} name="description" defaultValue={project.description} required /></label><label className={labelClass}>Category<input className={inputClass} name="category" defaultValue={project.category} required /></label><label className={labelClass}>Project type<input className={inputClass} name="project_type" defaultValue={project.project_type} required /></label><label className={labelClass}>Technologies<input className={inputClass} name="technologies" defaultValue={project.technologies.join(", ")} /></label><label className={labelClass}>Case study URL<input className={inputClass} name="case_study_url" defaultValue={project.case_study_url ?? ""} /></label><label className="flex items-center gap-2 text-sm text-[#c8d9db]"><input type="checkbox" name="published" defaultChecked={project.published} /> Published</label><button className="rounded-md border border-[#78bac7]/60 px-4 py-2 text-sm font-semibold text-white" type="submit">Save project</button></form>)}</div>
        </div></section>
        <section className="mt-14"><h2 className="text-2xl font-semibold text-white">Skills</h2><div className="mt-5 grid gap-5 lg:grid-cols-2">
          <form action={createSkillGroup} className="space-y-3 border border-dashed border-[#78bac7]/40 p-5"><h3 className="font-semibold text-[#f8c268]">Add skill group</h3><label className={labelClass}>Group name<input className={inputClass} name="name" required /></label><label className={labelClass}>Skills<input className={inputClass} name="skills" placeholder="React, TypeScript" /></label><label className={labelClass}>Order<input className={inputClass} name="sort_order" type="number" defaultValue="0" /></label><label className="flex items-center gap-2 text-sm text-[#c8d9db]"><input type="checkbox" name="published" /> Publish now</label><button className="rounded-md bg-[#46a5bb] px-4 py-2 text-sm font-semibold text-[#08262a]" type="submit">Add group</button></form>
          <div className="space-y-4">{skillGroups.map((group) => <form key={group.id} action={updateSkillGroup} className="space-y-3 border border-[#78bac7]/25 bg-[#103b40] p-5"><input type="hidden" name="id" value={group.id} /><div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-white">Edit skill group</h3><button formAction={deleteSkillGroup} className="text-xs font-semibold text-[#ffb4a8] hover:underline" type="submit">Delete</button></div><label className={labelClass}>Group name<input className={inputClass} name="name" defaultValue={group.name} required /></label><label className={labelClass}>Skills<input className={inputClass} name="skills" defaultValue={skillsForGroup(group.id)} /></label><label className={labelClass}>Order<input className={inputClass} name="sort_order" type="number" defaultValue={group.sort_order} /></label><label className="flex items-center gap-2 text-sm text-[#c8d9db]"><input type="checkbox" name="published" defaultChecked={group.published} /> Published</label><button className="rounded-md border border-[#78bac7]/60 px-4 py-2 text-sm font-semibold text-white" type="submit">Save group</button></form>)}</div>
        </div></section>
        <section className="mt-14"><h2 className="text-2xl font-semibold text-white">Achievements</h2><div className="mt-5 grid gap-5 lg:grid-cols-2">
          <form action={createAchievement} className="space-y-3 border border-dashed border-[#78bac7]/40 p-5"><h3 className="font-semibold text-[#f8c268]">Add achievement</h3><label className={labelClass}>Title<input className={inputClass} name="title" required /></label><label className={labelClass}>Organization<input className={inputClass} name="organization" required /></label><label className={labelClass}>Date<input className={inputClass} name="date" required /></label><label className={labelClass}>Description<textarea className={inputClass} name="description" required /></label><label className={labelClass}>Evidence URL<input className={inputClass} name="evidence_url" /></label><label className="flex items-center gap-2 text-sm text-[#c8d9db]"><input type="checkbox" name="published" /> Publish now</label><button className="rounded-md bg-[#46a5bb] px-4 py-2 text-sm font-semibold text-[#08262a]" type="submit">Add achievement</button></form>
          <div className="space-y-4">{achievements.map((achievement) => <form key={achievement.id} action={updateAchievement} className="space-y-3 border border-[#78bac7]/25 bg-[#103b40] p-5"><input type="hidden" name="id" value={achievement.id} /><div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-white">Edit achievement</h3><button formAction={deleteAchievement} className="text-xs font-semibold text-[#ffb4a8] hover:underline" type="submit">Delete</button></div><label className={labelClass}>Title<input className={inputClass} name="title" defaultValue={achievement.title} required /></label><label className={labelClass}>Organization<input className={inputClass} name="organization" defaultValue={achievement.organization} required /></label><label className={labelClass}>Date<input className={inputClass} name="date" defaultValue={achievement.date} required /></label><label className={labelClass}>Description<textarea className={inputClass} name="description" defaultValue={achievement.description} required /></label><label className={labelClass}>Evidence URL<input className={inputClass} name="evidence_url" defaultValue={achievement.evidence_url ?? ""} /></label><label className="flex items-center gap-2 text-sm text-[#c8d9db]"><input type="checkbox" name="published" defaultChecked={achievement.published} /> Published</label><button className="rounded-md border border-[#78bac7]/60 px-4 py-2 text-sm font-semibold text-white" type="submit">Save achievement</button></form>)}</div>
        </div></section>
      </div>
    </main>
  );
}
