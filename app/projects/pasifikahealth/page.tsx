import Link from "next/link";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { EvidencePlaceholder } from "@/components/case-study/evidence-placeholder";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { pasifikaHealth } from "@/data/pasifikahealth";

export const metadata = {
  title: "PasifikaHealth Case Study | Personal ePortfolio",
  description: "Software engineering case study for PasifikaHealth.",
};

export default function PasifikaHealthCaseStudyPage() {
  const availableLinks = [
    ["GitHub", pasifikaHealth.links.github],
    ["Prototype", pasifikaHealth.links.prototype],
    ["Documentation", pasifikaHealth.links.documentation],
    ["Live Demo", pasifikaHealth.links.liveDemo],
  ] as const;

  return (
    <main className="overflow-hidden">
      <header className="border-b border-[#78bac7]/20 bg-[radial-gradient(circle_at_80%_0%,rgba(248,194,104,0.2),transparent_28rem),radial-gradient(circle_at_15%_85%,rgba(70,165,187,0.24),transparent_27rem)] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/projects" className="text-sm font-semibold text-[#f8c268] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]">← Back to projects</Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Flagship project case study</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">{pasifikaHealth.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#c8d9db] sm:text-2xl">{pasifikaHealth.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Project technologies">
            {pasifikaHealth.technologies.length > 0 ? pasifikaHealth.technologies.map((technology) => <span key={technology} className="rounded-full bg-[#46a5bb]/15 px-3 py-1.5 text-sm text-[#bfe8f0]">{technology}</span>) : <span className="rounded-full bg-[#46a5bb]/15 px-3 py-1.5 text-sm text-[#bfe8f0]">Technology details to be added</span>}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {availableLinks.filter(([, url]) => url).map(([label, url]) => <a key={label} href={url!} className="inline-flex min-h-11 items-center rounded-md border border-[#78bac7]/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f8c268] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]">{label}</a>)}
            {availableLinks.every(([, url]) => !url) ? <p className="text-sm text-[#b8cccf]">Project links will be added once verified.</p> : null}
          </div>
        </div>
      </header>

      <Section title="Overview" eyebrow="01">
        <p className="max-w-3xl text-xl leading-8 text-[#d8e5e6]">{pasifikaHealth.overview}</p>
      </Section>

      <section className="bg-[#0b2b2f] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {pasifikaHealth.sections.map((section, index) => <CaseStudySection key={section.title} section={section} index={index + 2} />)}
          </div>
        </div>
      </section>

      <Section title="Reflection" eyebrow="23" className="bg-[#0b2b2f]">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pasifikaHealth.reflection.map((section) => <CaseStudySection key={section.title} section={section} />)}
        </div>
      </Section>

      <Section title="Project Evidence" eyebrow="24" description="Engineering evidence will be added as it becomes available. These reserved spaces ensure diagrams and artefacts remain part of the case-study narrative.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pasifikaHealth.evidence.map((item) => <EvidencePlaceholder key={item} label={item} />)}
        </div>
      </Section>

      <section className="border-t border-[#78bac7]/20 bg-[#103b40] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">25 · Project links</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Further project resources</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#c8d9db]">GitHub, prototype, documentation, and live-demo links will be published here once they are available.</p>
          <div className="mt-8"><ButtonLink href="/projects" variant="secondary">Return to Projects</ButtonLink></div>
        </div>
      </section>
    </main>
  );
}
