import Link from "next/link";
import { Section } from "@/components/section";

const years = ["Year 1", "Year 2", "Year 3", "Year 4"] as const;

export const metadata = {
  title: "ePortfolio | Personal ePortfolio",
  description: "An academic record of my software engineering development.",
};

export default function EportfolioPage() {
  return (
    <main>
      <Section eyebrow="Academic record" title="My ePortfolio" description="A record of my academic journey, projects, technical growth, professional development and learning experiences.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {years.map((year, index) => (
            <Link key={year} href={`/eportfolio/year-${index + 1}`} className={`group border p-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268] ${index === 3 ? "border-[#f8c268]/60 bg-[#52402a]/55" : "border-[#78bac7]/25 bg-[#103b40] hover:border-[#46a5bb]"}`}>
              <span className="text-sm font-semibold text-[#f8c268]">0{index + 1}</span>
              <h2 className="mt-8 text-xl font-semibold text-white">{year}</h2>
              <p className="mt-2 text-sm text-[#c8d9db]">Academic evidence to be added.</p>
              <span className="mt-6 inline-block text-sm font-semibold text-[#f8c268]">Explore <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}