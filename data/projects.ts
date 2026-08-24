export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  featured?: boolean;
  githubUrl: string | null;
  liveUrl: string | null;
};

export const projects: readonly Project[] = [
  {
    slug: "pasifikahealth",
    title: "PasifikaHealth",
    description:
      "An offline-first health and wellbeing mobile application. Project details and evidence will be documented in the case study.",
    technologies: ["Technology details to be added"],
    featured: true,
    githubUrl: null,
    liveUrl: null,
  },
  {
    slug: "project-placeholder-1",
    title: "Project Placeholder 01",
    description: "Project information will be added when it is ready to publish.",
    technologies: ["Details to be added"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    slug: "project-placeholder-2",
    title: "Project Placeholder 02",
    description: "Project information will be added when it is ready to publish.",
    technologies: ["Details to be added"],
    githubUrl: null,
    liveUrl: null,
  },
];
