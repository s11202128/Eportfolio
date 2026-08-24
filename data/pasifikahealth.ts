export type CaseStudySection = {
  title: string;
  content: string;
};

export const pasifikaHealth = {
  title: "PasifikaHealth",
  tagline: "Offline-First Health & Wellness Mobile Application",
  overview:
    "PasifikaHealth is an offline-first health and wellbeing mobile application.",
  technologies: [] as readonly string[],
  links: {
    github: null,
    prototype: null,
    documentation: null,
    liveDemo: null,
  },
  sections: [
    { title: "Problem", content: "[Content to be added]" },
    { title: "Solution", content: "[Content to be added]" },
    { title: "Objectives", content: "[Content to be added]" },
    { title: "Target Users", content: "[Content to be added]" },
    { title: "My Role", content: "[Content to be added]" },
    { title: "Requirements", content: "[Content to be added]" },
    { title: "User Stories", content: "[Content to be added]" },
    { title: "Features", content: "[Content to be added]" },
    { title: "UI/UX", content: "[Content to be added]" },
    { title: "Architecture", content: "[Content to be added]" },
    { title: "Database", content: "[Content to be added]" },
    { title: "APIs", content: "[Content to be added]" },
    { title: "Offline Synchronisation", content: "[Content to be added]" },
    { title: "Privacy & Security", content: "[Content to be added]" },
    { title: "Testing", content: "[Content to be added]" },
    { title: "Development", content: "[Content to be added]" },
    { title: "Challenges", content: "[Content to be added]" },
    { title: "Solutions", content: "[Content to be added]" },
    { title: "Lessons Learned", content: "[Content to be added]" },
    { title: "Results", content: "[Content to be added]" },
  ] satisfies readonly CaseStudySection[],
  reflection: [
    { title: "What I Learned", content: "[Content to be added]" },
    { title: "Technical Challenges", content: "[Content to be added]" },
    { title: "Project Management Lessons", content: "[Content to be added]" },
    { title: "Software Engineering Lessons", content: "[Content to be added]" },
    { title: "Future Improvements", content: "[Content to be added]" },
  ] satisfies readonly CaseStudySection[],
  evidence: [
    "Architecture diagram",
    "ERD / database diagram",
    "UI/UX prototype",
    "Application screenshots",
    "API design",
    "Offline synchronisation",
  ] as const,
} as const;
