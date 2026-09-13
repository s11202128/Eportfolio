import { redirect } from "next/navigation";
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

  const [projects, skillGroups, achievements] = await Promise.all([
    supabase.from("projects").select("id", { count: "exact", head: true }),
    supabase.from("skill_groups").select("id", { count: "exact", head: true }),
    supabase.from("achievements").select("id", { count: "exact", head: true }),
  ]);

  return (
    <main className="min-h-[75vh] px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Admin workspace</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Manage your portfolio</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c8d9db]">Signed in as {user.email}. Content editing forms are the next step now that Supabase authentication and protected data access are in place.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#b8cccf]">Projects</p><p className="mt-3 text-3xl font-semibold text-white">{projects.count ?? 0}</p></article>
          <article className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#b8cccf]">Skill groups</p><p className="mt-3 text-3xl font-semibold text-white">{skillGroups.count ?? 0}</p></article>
          <article className="border border-[#78bac7]/25 bg-[#103b40] p-6"><p className="text-sm text-[#b8cccf]">Achievements</p><p className="mt-3 text-3xl font-semibold text-white">{achievements.count ?? 0}</p></article>
        </div>
      </div>
    </main>
  );
}
