import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = { project: Project; prominent?: boolean };

export function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-[#78bac7]/25 bg-[#103b40] shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-1 ${prominent ? "lg:col-span-2" : ""}`}
    >
      <div
        className={`relative grid min-h-48 place-items-center overflow-hidden border-b border-[#78bac7]/20 bg-[radial-gradient(circle_at_top_right,_rgba(70,165,187,0.28),_transparent_55%),linear-gradient(135deg,_#173f42,_#0c292d)] ${prominent ? "sm:min-h-64" : ""}`}
        aria-label={`${project.title} visual placeholder`}
        role="img"
      >
        <span className="rounded-full border border-[#f8c268]/40 bg-[#0d3034]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8c268]">
          Project visual
        </span>
      </div>
      <div className="p-6 sm:p-7">
        {project.featured ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8c268]">
            Flagship project
          </p>
        ) : null}
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#c8d9db]">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-full bg-[#46a5bb]/15 px-3 py-1 text-xs text-[#bfe8f0]">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="text-[#f8c268] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]"
          >
            View case study <span aria-hidden="true">→</span>
          </Link>
          {project.githubUrl ? <a href={project.githubUrl}>GitHub</a> : null}
          {project.liveUrl ? <a href={project.liveUrl}>Live demo</a> : null}
        </div>
      </div>
    </article>
  );
}
