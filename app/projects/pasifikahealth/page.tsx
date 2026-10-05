import Link from "next/link";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { EvidencePlaceholder } from "@/components/case-study/evidence-placeholder";
import { ButtonLink } from "@/components/button-link";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Rocket, Terminal } from "@/components/icons";
import { Section } from "@/components/section";
import { pasifikaHealth } from "@/data/pasifikahealth";

export const metadata = {
  title: "PasifikaHealth Case Study | Personal ePortfolio",
  description: "Software engineering case study for PasifikaHealth, an offline-first health and wellbeing mobile application.",
};

export default function PasifikaHealthCaseStudyPage() {
  const availableLinks = [
    ["GitHub", pasifikaHealth.links.github],
    ["Prototype", pasifikaHealth.links.prototype],
    ["Documentation", pasifikaHealth.links.documentation],
    ["Live Demo", pasifikaHealth.links.liveDemo],
  ] as const;

  return (
    <main className="relative overflow-hidden bg-[#07090e]">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />

      {/* Hero Header */}
      <header className="relative border-b border-white/[0.08] py-20 sm:py-24">
        <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-sky-400"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to All Projects
          </Link>

          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Flagship Case Study
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              {pasifikaHealth.title}
            </h1>

            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl">
              {pasifikaHealth.tagline}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Project technologies">
              {pasifikaHealth.technologies.length > 0 ? (
                pasifikaHealth.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300"
                  >
                    {technology}
                  </span>
                ))
              ) : (
                <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
                  Offline-First · Mobile Architecture · Health Informatics
                </span>
              )}
            </div>

            {/* External Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {availableLinks
                .filter(([, url]) => url)
                .map(([label, url]) => (
                  <a
                    key={label}
                    href={url!}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-sky-500/40 hover:bg-sky-500/10"
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    {label}
                  </a>
                ))}

              {availableLinks.every(([, url]) => !url) ? (
                <p className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-xs text-slate-400">
                  Project repository &amp; live links will be published upon verified release.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <Section title="System Overview" eyebrow="01" icon={Terminal}>
        <div className="glass-panel rounded-2xl border border-white/[0.08] p-8 sm:p-10">
          <p className="max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {pasifikaHealth.overview}
          </p>
        </div>
      </Section>

      {/* Case Study Sections */}
      <section className="border-y border-white/[0.08] bg-slate-950/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              ARCHITECTURE &amp; PROCESS
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
              Engineering Breakdown
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {pasifikaHealth.sections.map((section, index) => (
              <CaseStudySection key={section.title} section={section} index={index + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <Section title="Engineering Reflections" eyebrow="Reflections" icon={Rocket}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pasifikaHealth.reflection.map((section) => (
            <CaseStudySection key={section.title} section={section} />
          ))}
        </div>
      </Section>

      {/* Project Evidence Staging */}
      <Section
        title="Project Evidence &amp; Artefacts"
        eyebrow="Verification"
        icon={FileText}
        description="Engineering evidence and design artefacts will be linked here as verification is finalized."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pasifikaHealth.evidence.map((item) => (
            <EvidencePlaceholder key={item} label={item} />
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="border-t border-white/[0.08] bg-slate-950/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="glass-panel rounded-2xl border border-white/[0.08] p-8 sm:p-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              NEXT STEPS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
              Explore More Case Studies
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
              Review other academic and software engineering projects, or explore verified academic coursework across each year.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/projects" className="group">
                Back to All Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/eportfolio" variant="secondary">
                View Academic ePortfolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
