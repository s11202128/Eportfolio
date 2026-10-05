import { LoginForm } from "@/components/admin/login-form";
import { hasSupabaseEnv } from "@/lib/supabase/config";

export const metadata = {
  title: "Admin sign in | Personal ePortfolio",
  description: "Private ePortfolio content management sign in.",
};

export default function AdminLoginPage() {
  const isConfigured = hasSupabaseEnv();

  return (
    <main className="relative min-h-[80vh] bg-[#07090e] px-6 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="glass-panel mx-auto max-w-md rounded-2xl border border-white/10 p-8 sm:p-10">
        <span className="inline-block rounded-md border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
          PROTECTED WORKSPACE
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white">Admin Sign In</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Manage your verified portfolio content, projects, and skills.
        </p>
        {isConfigured ? (
          <div className="mt-6">
            <LoginForm />
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-5 text-sm leading-relaxed text-slate-300">
            <p className="font-semibold text-white">Supabase configuration required</p>
            <p className="mt-1 text-xs text-slate-400">Add credentials from <code className="text-sky-300">.env.example</code> to <code className="text-sky-300">.env.local</code> to enable the admin CMS.</p>
          </div>
        )}
      </div>
    </main>
  );
}
