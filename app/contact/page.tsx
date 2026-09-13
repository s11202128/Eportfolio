import { ButtonLink } from "@/components/button-link";
import { profile } from "@/data/profile";

export const metadata = { title: "Contact | Personal ePortfolio", description: "Contact details for my ePortfolio." };

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let&apos;s Connect</h1>
        <p className="mt-5 text-lg leading-8 text-[#c8d9db]">The best way to reach me is by email. You can also find my software engineering work and professional profile through the links below.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.socialLinks.email}`}>Email me</ButtonLink>
          <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#78bac7]/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f8c268] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]" href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#78bac7]/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f8c268] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]" href={profile.socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
          <ButtonLink href="/" variant="secondary">Back home</ButtonLink>
        </div>
      </div>
    </main>
  );
}
