export const projectCategories = [
  "University",
  "Personal",
  "Mobile",
  "Web",
  "Database",
  "Other",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  projectType: string;
  featured: boolean;
  technologies: readonly string[];
  image: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  caseStudyUrl: string | null;
};

export const projects: readonly Project[] = [
  {
    id: "pasifikahealth",
    slug: "pasifikahealth",
    title: "PasifikaHealth",
    description:
      "An offline-first health and wellbeing mobile application. Project details and evidence will be documented in the case study.",
    category: "Mobile",
    projectType: "Mobile application",
    featured: true,
    technologies: [],
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/pasifikahealth",
  },
];
