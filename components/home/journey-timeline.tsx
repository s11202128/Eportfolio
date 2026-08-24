export function JourneyTimeline({ stages }: { stages: readonly string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stages.map((stage, index) => (
        <li key={stage} className="relative rounded-xl border border-[#78bac7]/25 bg-[#103b40] p-5">
          <span className="mb-5 grid size-8 place-items-center rounded-full bg-[#46a5bb] text-sm font-bold text-[#08262a]">
            {index + 1}
          </span>
          <p className="font-semibold text-white">{stage}</p>
          {index < stages.length - 1 ? (
            <span className="absolute -bottom-4 left-1/2 text-[#f8c268] sm:hidden" aria-hidden="true">↓</span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
