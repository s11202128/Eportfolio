import Link from "next/link";
import { ArrowRight, Cpu, ExternalLink, FileText, Github, Layers } from "@/components/icons";
import type { Project } from "@/data/projects";

type ProjectCardProps = { project: Project; prominent?: boolean };

export function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  return (
    <article
      className={`group glass-panel-interactive flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-sky-500/30 ${
        prominent ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Visual header */}
        <div
          className={`relative flex items-center justify-center overflow-hidden border-b border-white/[0.08] bg-slate-950/80 tech-grid min-h-48 ${
            prominent ? "sm:min-h-60" : ""
          }`}
          aria-label={`${project.title} visual display`}
          role="img"
        >
          {/* Subtle radial glow */}
          <div className="pointer-events-none absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent opacity-60" />

          {/* Center blueprint / glyph badge */}
          <div className="relative flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-[#07090e]/80 px-4 py-3 backdrop-blur-md">
            <span className="flex size-9 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
              <Cpu size={18} aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
              {project.category} Project
            </span>
          </div>

          {/* Top-right featured badge */}
          {project.featured && (
            <div className="absolute top-3.5 right-3.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
              Flagship
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <Layers size={13} aria-hidden="true" />
            <span>{project.projectType}</span>
          </div>

          <h3 className="mt-2.5 text-xl font-bold text-white transition-colors group-hover:text-sky-300">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          {/* Technology Badges */}
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.technologies.length === 0 ? (
              <li className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
                Technology details to be added
              </li>
            ) : (
              project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300"
                >
                  {technology}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.06] bg-white/[0.01] px-6 py-4 text-xs font-semibold sm:px-7">
        {project.caseStudyUrl ? (
          <Link
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-sky-400 transition hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <FileText size={14} aria-hidden="true" />
            <span>Case Study</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ) : null}

        {project.githubUrl ? (
          <a
            className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </a>
        ) : null}

        {project.liveUrl ? (
          <a
            className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
