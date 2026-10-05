"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/home/project-card";
import { projectCategories, type Project } from "@/data/projects";
import { FolderKanban } from "@/components/icons";

const filters = ["All", "Featured", ...projectCategories] as const;
type ProjectFilter = (typeof filters)[number];

function matchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === "All") return true;
  if (filter === "Featured") return project.featured;
  return project.category === filter;
}

export function ProjectsExplorer({ projects }: { projects: readonly Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  const statistics = useMemo(() => {
    const technologyCount = new Set(projects.flatMap((project) => project.technologies)).size;
    return [
      ["Total Projects", projects.length],
      ["Featured Projects", projects.filter((project) => project.featured).length],
      ["Technologies Used", technologyCount],
      ["Academic Projects", projects.filter((project) => project.category === "University").length],
    ] as const;
  }, [projects]);

  return (
    <>
      {/* Telemetry Statistics Grid */}
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4" aria-label="Project statistics">
        {statistics.map(([label, value]) => (
          <div
            key={label}
            className="glass-panel relative overflow-hidden rounded-2xl border border-white/[0.08] p-5 sm:p-6"
          >
            <div className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-sky-500/10 blur-xl" />
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {label}
            </dt>
            <dd className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Filter Section */}
      <div className="mt-12 border-t border-white/[0.08] pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Browse By Category</h2>
            <p className="mt-1 text-sm text-slate-400">
              Filter verified projects across university and software domains.
            </p>
          </div>

          <p className="text-xs font-medium text-slate-400" aria-live="polite">
            Showing <span className="font-semibold text-white">{filteredProjects.length}</span> {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`min-h-10 rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]"
                    : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="glass-panel mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-12 text-center">
          <span className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400">
            <FolderKanban size={22} aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-white">No projects found in this category</h3>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Verified projects will be documented here as evidence and coursework are completed.
          </p>
        </div>
      )}
    </>
  );
}
