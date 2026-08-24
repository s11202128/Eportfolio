export type SkillGroup = {
  name: string;
  skills: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  { name: "Programming", skills: ["TypeScript"] },
  { name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { name: "Backend", skills: ["To be documented"] },
  { name: "Databases", skills: ["To be documented"] },
  { name: "Development Tools", skills: ["Git", "GitHub", "Visual Studio Code"] },
  {
    name: "Software Engineering",
    skills: ["App Router", "Accessibility", "Performance"],
  },
];
