"use client";

import { FormEvent, useState } from "react";
import { Mail, X } from "@/components/icons";
import { profile } from "@/data/profile";

export function EmailForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function buildMessage() {
    return `Name: ${name}\n\n${message}`;
  }

  function handleMailto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({ subject: subject || `Message from ${name || "my ePortfolio"}`, body: buildMessage() });
    window.location.href = `mailto:${profile.socialLinks.email}?${params.toString()}`;
  }

  function handleGmail() {
    const params = new URLSearchParams({ view: "cm", fs: "1", to: profile.socialLinks.email, su: subject || `Message from ${name || "my ePortfolio"}`, body: buildMessage() });
    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#46a5bb] px-5 py-2.5 text-sm font-semibold text-[#08262a] transition-colors hover:bg-[#6cb6c7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]"><Mail size={16} aria-hidden="true" />Email me</button>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#041619]/80 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
          <section className="w-full max-w-xl border border-[#78bac7]/35 bg-[#0d3034] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:rounded-xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="email-form-title">
            <div className="flex items-start justify-between gap-4 border-b border-[#78bac7]/20 pb-5"><div><h2 id="email-form-title" className="text-2xl font-semibold text-white">Send me a message</h2><p className="mt-2 text-sm leading-6 text-[#b8cccf]">Complete the form, then choose how you want to send it.</p></div><button type="button" onClick={() => setIsOpen(false)} aria-label="Close email form" className="grid size-9 place-items-center rounded-md border border-[#78bac7]/40 text-[#c8d9db] hover:border-[#f8c268] hover:text-white"><X size={18} aria-hidden="true" /></button></div>
            <form onSubmit={handleMailto} className="mt-6 space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#b8cccf]">Your name<input className="mt-1 w-full rounded-md border border-[#78bac7]/30 bg-[#08262a] px-3 py-2.5 text-sm text-white outline-none focus:border-[#f8c268]" value={name} onChange={(event) => setName(event.target.value)} required /></label>
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#b8cccf]">Subject<input className="mt-1 w-full rounded-md border border-[#78bac7]/30 bg-[#08262a] px-3 py-2.5 text-sm text-white outline-none focus:border-[#f8c268]" value={subject} onChange={(event) => setSubject(event.target.value)} required /></label>
              <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#b8cccf]">Message<textarea className="mt-1 min-h-32 w-full rounded-md border border-[#78bac7]/30 bg-[#08262a] px-3 py-2.5 text-sm text-white outline-none focus:border-[#f8c268]" value={message} onChange={(event) => setMessage(event.target.value)} required /></label>
              <div className="flex flex-wrap justify-end gap-3 border-t border-[#78bac7]/20 pt-5"><button type="button" onClick={() => setIsOpen(false)} className="rounded-md border border-[#78bac7]/50 px-4 py-2.5 text-sm font-semibold text-white hover:border-[#f8c268]">Cancel</button><button type="button" onClick={handleGmail} className="rounded-md border border-[#78bac7]/60 px-4 py-2.5 text-sm font-semibold text-white hover:border-[#f8c268]">Open Gmail</button><button type="submit" className="rounded-md bg-[#46a5bb] px-4 py-2.5 text-sm font-semibold text-[#08262a] hover:bg-[#6cb6c7]">Open email app</button></div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
