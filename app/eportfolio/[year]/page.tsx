import Link from "next/link";
import { notFound } from "next/navigation";

const years = ["year-1", "year-2", "year-3", "year-4"] as const;

export function generateStaticParams() {
  return years.map((year) => ({ year }));
}

export default async function EportfolioYearPage({ params }: PageProps<"/eportfolio/[year]">) {
  const { year } = await params;
  const yearIndex = years.indexOf(year as (typeof years)[number]);
  if (yearIndex === -1) notFound();

  return (
    <main className="min-h-[70vh] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268]">Academic record · 0{yearIndex + 1}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Year {yearIndex + 1}</h1>
        <p className="mt-5 text-lg leading-8 text-[#c8d9db]">Academic evidence, reflections and milestones for this year will be added here.</p>
        <Link href="/" className="mt-8 inline-flex text-sm font-semibold text-[#f8c268] underline-offset-4 hover:underline">Back to home <span className="ml-2" aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}
