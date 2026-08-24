import Link from "next/link";
import { AchievementPreview } from "@/components/home/achievement-preview";
import { JourneyTimeline } from "@/components/home/journey-timeline";
import { ProjectCard } from "@/components/home/project-card";
import { SkillGroups } from "@/components/home/skill-groups";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { achievements } from "@/data/achievements";
import { journeyStages } from "@/data/journey";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const years = ["Year 1", "Year 2", "Year 3", "Year 4"] as const;
const socialLabels = ["GitHub", "LinkedIn", "Email"] as const;

export default function Home() {
  const featuredProject = projects.find((project) => project.slug === "pasifikahealth");
  const additionalProjects = projects.filter((project) => project.slug !== "pasifikahealth").slice(0, 3);

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
              <ButtonLink href="#featured-projects">View My Projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Get in Touch</ButtonLink>
              {profile.cvUrl ? <a className="self-center text-sm font-semibold text-[#f8c268] underline-offset-4 hover:underline" href={profile.cvUrl}>Download CV</a> : <span className="self-center text-sm text-[#b8cccf]">Download CV · coming soon</span>}
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#78bac7]/25 pt-6 text-sm text-[#b8cccf]">
              {socialLabels.map((label) => <span key={label}>{label} · link to be added</span>)}
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

      <Section title="About Me" eyebrow="Introduction" className="bg-[#0b2b2f]">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <p className="max-w-3xl text-xl leading-8 text-[#d8e5e6] sm:text-2xl">{profile.about}</p>
          <ButtonLink href="/about" variant="text">More About Me <span aria-hidden="true">→</span></ButtonLink>
        </div>
      </Section>

      <Section id="featured-projects" title="Featured Projects" eyebrow="Selected work" description="A selection of projects that demonstrate my technical, academic and problem-solving skills.">
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProject ? <ProjectCard project={featuredProject} prominent /> : null}
          {additionalProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <div className="mt-9"><ButtonLink href="/projects" variant="text">View All Projects <span aria-hidden="true">→</span></ButtonLink></div>
      </Section>

      <Section title="Skills & Technologies" eyebrow="Current toolkit" description="Technologies and practices currently represented in this portfolio foundation." className="bg-[#0b2b2f]">
        <SkillGroups groups={skillGroups} />
      </Section>

      <Section title="My Journey" eyebrow="Development path">
        <JourneyTimeline stages={journeyStages} />
        <div className="mt-9"><ButtonLink href="/journey" variant="text">View My Journey <span aria-hidden="true">→</span></ButtonLink></div>
      </Section>

      <Section title="Achievements & Recognition" eyebrow="Evidence" className="bg-[#0b2b2f]">
        <AchievementPreview items={achievements} />
        <div className="mt-9"><ButtonLink href="/achievements" variant="text">View All Achievements <span aria-hidden="true">→</span></ButtonLink></div>
      </Section>

      <Section title="My ePortfolio" eyebrow="Academic record" description="A record of my academic journey, projects, technical growth, professional development and learning experiences.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {years.map((year, index) => (
            <Link key={year} href={`/eportfolio/year-${index + 1}`} className={`group rounded-xl border p-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268] ${index === 3 ? "border-[#f8c268]/60 bg-[#52402a]/55" : "border-[#78bac7]/25 bg-[#103b40] hover:border-[#46a5bb]"}`}>
              <span className="text-sm font-semibold text-[#f8c268]">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold text-white">{year}</h3>
              <p className="mt-2 text-sm text-[#c8d9db]">Academic evidence to be added.</p>
              <span className="mt-6 inline-block text-sm font-semibold text-[#f8c268]">Explore <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="border-t border-[#78bac7]/20 bg-[radial-gradient(circle_at_80%_0%,rgba(248,194,104,0.16),transparent_25rem),#103b40] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-4 text-lg leading-8 text-[#c8d9db]">Interested in my work, projects or professional journey? Feel free to get in touch.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/contact">Contact Me</ButtonLink><span className="inline-flex min-h-11 items-center rounded-md border border-[#78bac7]/60 px-5 py-2.5 text-sm text-[#b8cccf]">Download CV · coming soon</span></div>
        </div></div>
      </section>
    </main>
  );
}
