import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Personal ePortfolio",
  description: "A collection of academic, personal and software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">My Projects</h1>
          <p className="mt-5 text-lg leading-8 text-[#c8d9db]">
            A collection of academic, personal and software engineering projects that demonstrate my technical development.
          </p>
        </header>
        <div className="mt-12"><ProjectsExplorer projects={projects} /></div>
      </div>
    </main>
  );
}
