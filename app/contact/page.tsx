import { ButtonLink } from "@/components/button-link";
import { profile } from "@/data/profile";

export const metadata = { title: "Contact | Personal ePortfolio", description: "Contact details for my ePortfolio." };

export default function ContactPage() {
  const email = profile.socialLinks.email;
  return (
    <main className="min-h-[70vh] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let&apos;s Connect</h1>
        <p className="mt-5 text-lg leading-8 text-[#c8d9db]">For now, contact details are still being prepared. Verified links will be added here as they become available.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {email ? <ButtonLink href={`mailto:${email}`}>Email me</ButtonLink> : <span className="inline-flex min-h-11 items-center rounded-md border border-[#78bac7]/50 px-5 py-2.5 text-sm text-[#b8cccf]">Email · coming soon</span>}
          <ButtonLink href="/" variant="secondary">Back home</ButtonLink>
        </div>
      </div>
    </main>
  );
}
