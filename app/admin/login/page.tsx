import { LoginForm } from "@/components/admin/login-form";
import { hasSupabaseEnv } from "@/lib/supabase/config";

export const metadata = {
  title: "Admin sign in | Personal ePortfolio",
  description: "Private ePortfolio content management sign in.",
};

export default function AdminLoginPage() {
  const isConfigured = hasSupabaseEnv();

  return (
    <main className="min-h-[75vh] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-md border border-[#78bac7]/25 bg-[#103b40] p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Private area</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Admin sign in</h1>
        <p className="mt-4 text-sm leading-6 text-[#b8cccf]">Manage your portfolio content from a protected workspace.</p>
        {isConfigured ? <LoginForm /> : <p className="mt-8 border border-dashed border-[#78bac7]/40 p-4 text-sm leading-6 text-[#c8d9db]">Supabase is not configured yet. Add the values from `.env.example` to `.env.local` before signing in.</p>}
      </div>
    </main>
  );
}
