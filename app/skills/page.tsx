import { SkillGroups } from "@/components/home/skill-groups";
import { Section } from "@/components/section";
import { Wrench } from "@/components/icons";
import { getPublishedSkillGroups } from "@/lib/content";

export const metadata = {
  title: "Skills | Personal ePortfolio",
  description: "The technologies and practices represented in my portfolio.",
};

export default async function SkillsPage() {
  const skillGroups = await getPublishedSkillGroups();

  return (
    <main>
      <Section icon={Wrench} eyebrow="Current toolkit" title="Skills & Technologies" description="Technologies, tools and practices currently represented in this portfolio foundation.">
        <SkillGroups groups={skillGroups} />
      </Section>
    </main>
  );
}