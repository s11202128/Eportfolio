import { Section } from "@/components/section";
import { journeyStages } from "@/data/journey";

export const metadata = { title: "Journey | Personal ePortfolio", description: "The stages of my software engineering development journey." };

export default function JourneyPage() {
  return (
    <main>
      <Section eyebrow="Development path" title="My Journey" description="A developing map of the stages that shape my transition from student to software engineer.">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeyStages.map((stage, index) => (
            <li key={stage} className="border border-[#78bac7]/25 bg-[#103b40] p-6">
              <span className="text-sm font-semibold text-[#f8c268]">0{index + 1}</span>
              <h2 className="mt-8 text-xl font-semibold text-white">{stage}</h2>
              <p className="mt-3 text-sm leading-6 text-[#b8cccf]">Evidence and reflections for this stage will be added as the journey progresses.</p>
            </li>
          ))}
        </ol>
      </Section>
    </main>
  );
}
