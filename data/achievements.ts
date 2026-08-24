export type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
  evidenceUrl: string | null;
};

// Add verified achievements only. No achievement entries have been supplied yet.
export const achievements: readonly Achievement[] = [];
