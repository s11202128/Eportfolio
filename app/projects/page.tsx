import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { FolderKanban } from "@/components/icons";
import { getPublishedProjects } from "@/lib/content";

export const metadata = {
  title: "Projects | Personal ePortfolio",
  description: "A collection of academic, personal and software engineering projects.",
};

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <main className="relative min-h-screen bg-[#07090e] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="size-1.5 rounded-full bg-sky-400" />
            Engineering Portfolio
          </div>
          <h1 className="mt-4 flex items-center gap-3.5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="flex size-11 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-sm shadow-sky-500/10">
              <FolderKanban size={24} strokeWidth={2} aria-hidden="true" />
            </span>
            <span>My Projects</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            A structured collection of academic, mobile, and software engineering projects demonstrating practical problem solving and technical implementation.
          </p>
        </header>

        <div className="mt-12">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </main>
  );
}
