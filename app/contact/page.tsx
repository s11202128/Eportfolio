import { ButtonLink } from "@/components/button-link";
import { ArrowUpRight, Github, Linkedin, Mail } from "@/components/icons";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact & Connect | Personal ePortfolio",
  description: "Get in touch with Samson Limanikuki for software engineering opportunities, collaborations, and inquiries.",
};

const channels = [
  {
    label: "Direct Email",
    value: profile.socialLinks.email,
    href: `mailto:${profile.socialLinks.email}`,
    icon: Mail,
    primary: true,
    action: "Send an email",
  },
  {
    label: "LinkedIn Profile",
    value: "Professional Network",
    href: profile.socialLinks.linkedin,
    icon: Linkedin,
    primary: false,
    action: "View profile",
  },
  {
    label: "GitHub Repositories",
    value: "Code & Contributions",
    href: profile.socialLinks.github,
    icon: Github,
    primary: false,
    action: "Explore code",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="relative min-h-[85vh] bg-[#07090e] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <header className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="size-1.5 rounded-full bg-sky-400" />
            Communication Desk
          </div>

          <h1 className="mt-4 flex items-center gap-3.5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="flex size-11 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-sm shadow-sky-500/10">
              <Mail size={24} strokeWidth={2} aria-hidden="true" />
            </span>
            <span>Let&apos;s Connect</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Whether you would like to discuss a software engineering opportunity, review project evidence, or discuss technology collaborations, feel free to reach out.
          </p>
        </header>

        {/* Contact Channels Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass-panel-interactive group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] p-6 transition-all duration-300 hover:border-sky-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              <div>
                <span className="flex size-10 items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-400 group-hover:bg-sky-500/20">
                  <channel.icon size={18} aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-base font-bold text-white transition-colors group-hover:text-sky-300">
                  {channel.label}
                </h3>

                <p className="mt-1 text-xs text-slate-400 break-all">
                  {channel.value}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                <span>{channel.action}</span>
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        {/* Return Button */}
        <div className="mt-12">
          <ButtonLink href="/" variant="secondary">
            Return to Homepage
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
