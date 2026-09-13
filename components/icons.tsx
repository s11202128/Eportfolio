import type { LucideIcon } from "lucide-react";
import {
  Award,
  BriefcaseBusiness,
  CircleUserRound,
  Code2,
  FolderKanban,
  GraduationCap,
  House,
  Mail,
  Rocket,
  Route,
  Settings2,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";

export const moduleIcons = {
  home: House,
  about: CircleUserRound,
  projects: FolderKanban,
  skills: Wrench,
  journey: Route,
  achievements: Trophy,
  eportfolio: GraduationCap,
  contact: Mail,
} satisfies Record<string, LucideIcon>;

export {
  Award,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GraduationCap,
  Mail,
  Rocket,
  Settings2,
  Sparkles,
  Trophy,
  Wrench,
};
