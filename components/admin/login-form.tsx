"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/browser";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { error: signInError } = await createClient().auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      setIsSubmitting(false);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="text-sm font-medium text-[#d8e5e6]">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-md border border-[#78bac7]/40 bg-[#08262a] px-4 py-3 text-white outline-none focus:border-[#f8c268]" />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium text-[#d8e5e6]">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-md border border-[#78bac7]/40 bg-[#08262a] px-4 py-3 text-white outline-none focus:border-[#f8c268]" />
      </div>
      {error ? <p role="alert" className="text-sm text-[#ffb4a8]">{error}</p> : null}
      <button type="submit" disabled={isSubmitting} className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#46a5bb] px-5 py-2.5 text-sm font-semibold text-[#08262a] transition-colors hover:bg-[#6cb6c7] disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
