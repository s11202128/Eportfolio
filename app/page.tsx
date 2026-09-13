import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const homeModules = [
  { label: "About", href: "/about", description: "The person, purpose and direction behind this portfolio." },
  { label: "Skills", href: "/skills", description: "The tools, technologies and practices in my current toolkit." },
  { label: "Journey", href: "/journey", description: "The stages of my development from student to engineer." },
  { label: "ePortfolio", href: "/eportfolio", description: "Academic evidence and reflections organised by year." },
] as const;

export default function Home() {
  const featuredProject = projects.find((project) => project.slug === "pasifikahealth");

  return (
    <main className="overflow-hidden">
      <header className="relative isolate border-b border-[#78bac7]/20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_25%,rgba(70,165,187,0.22),transparent_25rem),radial-gradient(circle_at_15%_90%,rgba(248,194,104,0.12),transparent_20rem)]" />
        <div className="mx-auto grid min-h-[43rem] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
          <div>
            <p className="mb-5 text-base font-medium text-[#f8c268]">Hi, I&apos;m {profile.name}.</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Software Engineering Student
              <span className="block text-[#78bac7]">&amp; Aspiring Software Engineer</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c8d9db]">{profile.introduction}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projects">View My Projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Get in Touch</ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end" aria-hidden="true">
            <div className="aspect-square rounded-2xl border border-[#78bac7]/35 bg-[linear-gradient(135deg,rgba(70,165,187,0.32),rgba(13,48,52,0.65)),radial-gradient(circle_at_30%_30%,rgba(248,194,104,0.35),transparent_20%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#0d3034]/65 p-6 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f8c268]">ePortfolio</span>
                <span className="max-w-48 text-2xl font-semibold leading-tight text-white">Building evidence for what comes next.</span>
                <span className="text-sm text-[#b8cccf]">Student → Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section eyebrow="Explore" title="A portfolio in progress" description="Use the dedicated pages to explore my work, development and academic record.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeModules.map((module) => (
            <Link key={module.href} href={module.href} className="group border border-[#78bac7]/25 bg-[#103b40] p-5 transition-colors hover:border-[#46a5bb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]">
              <h2 className="text-lg font-semibold text-white">{module.label}</h2>
              <p className="mt-3 text-sm leading-6 text-[#b8cccf]">{module.description}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-[#f8c268]">Explore <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected work" title="Featured project" description="A quick look at the project currently anchoring this portfolio." className="bg-[#0b2b2f]">
        {featuredProject ? (
          <div className="flex flex-col gap-5 border border-[#78bac7]/25 bg-[#103b40] p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f8c268]">{featuredProject.category}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{featuredProject.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#c8d9db]">{featuredProject.description}</p>
            </div>
            <ButtonLink href={`/projects/${featuredProject.slug}`} variant="text">View case study <span aria-hidden="true">→</span></ButtonLink>
          </div>
        ) : <p className="text-[#b8cccf]">Featured projects will be added here.</p>}
      </Section>

      <section className="border-t border-[#78bac7]/20 bg-[radial-gradient(circle_at_80%_0%,rgba(248,194,104,0.16),transparent_25rem),#103b40] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c8d9db]">Interested in my work, projects or professional journey? Visit the contact page for the latest verified details.</p>
          <div className="mt-8"><ButtonLink href="/contact">Contact Me</ButtonLink></div>
        </div>
      </section>
    </main>
  );
}
