import { SkillGroups } from "@/components/home/skill-groups";
import { Section } from "@/components/section";
import { skillGroups } from "@/data/skills";

export const metadata = {
  title: "Skills | Personal ePortfolio",
  description: "The technologies and practices represented in my portfolio.",
};

export default function SkillsPage() {
  return (
    <main>
      <Section eyebrow="Current toolkit" title="Skills & Technologies" description="Technologies, tools and practices currently represented in this portfolio foundation.">
        <SkillGroups groups={skillGroups} />
      </Section>
    </main>
  );
}