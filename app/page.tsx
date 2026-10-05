import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ArrowRight, Github, Linkedin, Mail, moduleIcons, Rocket, Sparkles, Terminal } from "@/components/icons";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";
import { getPublishedProjects } from "@/lib/content";

const homeModules = [
  {
    step: "01",
    label: "About",
    href: "/about",
    description: "The person, purpose, and direction behind this software engineering journey.",
    icon: moduleIcons.about,
    badge: "Profile",
  },
  {
    step: "02",
    label: "Skills",
    href: "/skills",
    description: "Modern languages, frameworks, development tools, and engineering practices.",
    icon: moduleIcons.skills,
    badge: "Toolkit",
  },
  {
    step: "03",
    label: "Journey",
    href: "/journey",
    description: "Development milestones tracing the transition from student to software engineer.",
    icon: moduleIcons.journey,
    badge: "Milestones",
  },
  {
    step: "04",
    label: "ePortfolio",
    href: "/eportfolio",
    description: "Structured academic evidence, coursework projects, and year-by-year reflections.",
    icon: moduleIcons.eportfolio,
    badge: "Academic",
  },
] as const;

export default async function Home() {
  const projects = await getPublishedProjects();
  const featuredProject = projects.find((project) => project.slug === "pasifikahealth");

  return (
    <main className="relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 tech-grid opacity-60" />
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-sky-500/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.07] blur-[130px]" />

      {/* Hero Section */}
      <header className="relative border-b border-white/[0.08]">
        <div className="mx-auto grid min-h-[46rem] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.25fr_0.85fr] lg:px-8">
          <div>
            {/* Live Availability Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span>Software Engineering Student · Continuous Learner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Practical
              <span className="mt-2 block bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Software Solutions
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
              Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span>. {profile.introduction}
            </p>

            {/* Call to action buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/projects" className="group">
                View My Projects
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in Touch
              </ButtonLink>
            </div>

            {/* Social verification links */}
            <div className="mt-11 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-7 text-xs font-semibold">
              <span className="mr-2 text-slate-500 uppercase tracking-widest text-[11px]">Connect</span>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-slate-300 transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={15} aria-hidden="true" className="text-sky-400" />
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-slate-300 transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={15} aria-hidden="true" className="text-sky-400" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-slate-300 transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                href={`mailto:${profile.socialLinks.email}`}
              >
                <Mail size={15} aria-hidden="true" className="text-sky-400" />
                Email
              </a>
            </div>
          </div>

          {/* Hero Image / Cyber Card */}
          <div className="hero-image-frame relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            {/* Outer gradient glow halo */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-teal-400/25 blur-lg opacity-70 hero-glow-ring" />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-2.5 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-slate-900">
                <Image
                  src="/images/samson-limanikuki.jpg"
                  alt="Portrait of Samson Limanikuki"
                  fill
                  priority
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  className="hero-image object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                {/* Overlaid telemetric badge */}
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#07090e]/85 p-3 backdrop-blur-md">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-sky-400">
                      ePortfolio Status
                    </span>
                    <span className="text-xs font-semibold text-white">Student → Engineer</span>
                  </div>
                  <span className="flex size-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Explore Modules Section */}
      <Section
        eyebrow="Architecture"
        title="Explore ePortfolio Modules"
        description="Navigate the core spaces of my portfolio to view technical skills, project case studies, and verified academic evidence."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeModules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="group glass-panel-interactive relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 text-sky-400 shadow-sm transition-colors group-hover:border-sky-400 group-hover:bg-sky-500/20">
                    <module.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono font-medium tracking-wider text-slate-500">
                    {module.step}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-300">
                    {module.label}
                  </h3>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    {module.badge}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {module.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-sky-400">
                <span>Explore section</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Project Showcase */}
      <Section
        icon={Rocket}
        eyebrow="Selected Work"
        title="Featured Case Study"
        description="An in-depth look at the cornerstone engineering project anchoring this portfolio."
        className="border-y border-white/[0.08] bg-slate-950/40"
      >
        {featuredProject ? (
          <div className="glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-8 sm:p-10">
            {/* Top gradient highlight */}
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
                    {featuredProject.category}
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Flagship Project
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                    <Terminal size={13} className="text-sky-400" />
                    Offline-First Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                    <Sparkles size={13} className="text-teal-400" />
                    Mobile Application
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <ButtonLink href={`/projects/${featuredProject.slug}`} className="group">
                  View Full Case Study
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-slate-400">Featured projects will be added here.</p>
        )}
      </Section>

      {/* Connect CTA Section */}
      <section className="relative py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <span className="size-1.5 rounded-full bg-sky-400" />
                Contact &amp; Collaboration
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Let&apos;s Build Together
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Interested in my software engineering work, technical case studies, or collaborating on projects? Reach out directly via the contact page.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact" className="group">
                  Contact Me
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/projects" variant="secondary">
                  Explore All Projects
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
