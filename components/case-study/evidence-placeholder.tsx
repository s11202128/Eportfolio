import { FileText } from "@/components/icons";

export function EvidencePlaceholder({ label }: { label: string }) {
  return (
    <figure className="glass-panel group relative flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-6 text-center transition-all duration-300 hover:border-sky-500/30">
      <div className="flex flex-col items-center">
        <span className="flex size-11 items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-400 group-hover:bg-sky-500/20">
          <FileText size={18} aria-hidden="true" />
        </span>
        <figcaption className="mt-4 text-base font-bold text-white">
          {label}
        </figcaption>
        <p className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400">
          Artefact to be uploaded
        </p>
      </div>
    </figure>
  );
}
