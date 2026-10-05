import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c]">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Evidence-Led ePortfolio
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Samson Limanikuki · Software Engineering Student & Aspiring Engineer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              href="/projects"
              className="text-slate-400 transition hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-slate-400 transition hover:text-white"
            >
              Skills
            </Link>
            <Link
              href="/journey"
              className="text-slate-400 transition hover:text-white"
            >
              Journey
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-medium text-sky-400 transition hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              Get in touch
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.05] pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Samson Limanikuki. Documenting continuous engineering development and verified evidence.</p>
        </div>
      </div>
    </footer>
  );
}
