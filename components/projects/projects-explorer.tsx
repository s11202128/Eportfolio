"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/home/project-card";
import { projectCategories, type Project } from "@/data/projects";

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
      <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Project statistics">
        {statistics.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-[#78bac7]/25 bg-[#103b40] p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b8cccf]">{label}</dt>
            <dd className="mt-3 text-3xl font-semibold text-[#f8c268]">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 border-t border-[#78bac7]/20 pt-8">
        <h2 className="text-xl font-semibold text-white">Browse projects</h2>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`min-h-10 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268] ${isActive ? "border-[#46a5bb] bg-[#46a5bb] text-[#08262a]" : "border-[#78bac7]/40 bg-[#103b40] text-[#d8e5e6] hover:border-[#f8c268]"}`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-7 text-sm text-[#b8cccf]" aria-live="polite">
        {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} shown
      </p>
      {filteredProjects.length > 0 ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : (
        <p className="mt-5 rounded-xl border border-dashed border-[#78bac7]/40 bg-[#103b40]/60 p-6 text-sm leading-6 text-[#c8d9db]">
          No verified projects have been added to this category yet.
        </p>
      )}
    </>
  );
}
