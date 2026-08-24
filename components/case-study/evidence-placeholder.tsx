export function EvidencePlaceholder({ label }: { label: string }) {
  return (
    <figure className="grid min-h-52 place-items-center rounded-xl border border-dashed border-[#78bac7]/45 bg-[linear-gradient(135deg,rgba(70,165,187,0.08),rgba(13,48,52,0.2))] p-6 text-center">
      <div>
        <div className="mx-auto grid size-11 place-items-center rounded-lg border border-[#f8c268]/45 text-[#f8c268]" aria-hidden="true">+</div>
        <figcaption className="mt-4 font-semibold text-white">{label}</figcaption>
        <p className="mt-2 text-sm text-[#b8cccf]">Evidence to be added</p>
      </div>
    </figure>
  );
}
