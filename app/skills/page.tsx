import { SkillGroups } from "@/components/home/skill-groups";
import { Section } from "@/components/section";
import { Wrench } from "@/components/icons";
import { getPublishedSkillGroups } from "@/lib/content";

export const metadata = {
  title: "Skills & Technologies | Personal ePortfolio",
  description: "The technologies, development tools, and engineering practices represented in my portfolio.",
};

export default async function SkillsPage() {
  const skillGroups = await getPublishedSkillGroups();

  return (
    <main className="relative min-h-[85vh] bg-[#07090e]">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute top-10 right-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />

      <Section
        icon={Wrench}
        eyebrow="Technical Stack"
        title="Skills & Technologies"
        description="A structured overview of the programming languages, frameworks, development workflows, and software engineering practices in my toolkit."
      >
        <SkillGroups groups={skillGroups} />
      </Section>
    </main>
  );
}