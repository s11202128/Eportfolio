import { achievements as staticAchievements, type Achievement } from "@/data/achievements";
import { projectCategories, projects as staticProjects, type Project, type ProjectCategory } from "@/data/projects";
import { skillGroups as staticSkillGroups, type SkillGroup } from "@/data/skills";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

function projectCategory(value: string): ProjectCategory {
  return projectCategories.includes(value as ProjectCategory) ? value as ProjectCategory : "Other";
}

export async function getPublishedProjects(): Promise<readonly Project[]> {
  if (!hasSupabaseEnv()) return staticProjects;

  const supabase = await createClient();
  const { data, error } = await supabase.from("projects").select("*").eq("published", true).order("created_at", { ascending: false });
  if (error) return staticProjects;

  return data.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.description,
    category: projectCategory(project.category),
    projectType: project.project_type,
    featured: project.featured,
    technologies: project.technologies,
    image: project.image_url,
    githubUrl: project.github_url,
    liveUrl: project.live_url,
    caseStudyUrl: project.case_study_url,
  }));
}

export async function getPublishedSkillGroups(): Promise<readonly SkillGroup[]> {
  if (!hasSupabaseEnv()) return staticSkillGroups;

  const supabase = await createClient();
  const { data: groups, error: groupsError } = await supabase.from("skill_groups").select("*").eq("published", true).order("sort_order");
  if (groupsError) return staticSkillGroups;
  if (groups.length === 0) return [];

  const { data: skills, error: skillsError } = await supabase.from("skills").select("*").in("group_id", groups.map((group) => group.id)).order("sort_order");
  if (skillsError) return staticSkillGroups;

  return groups.map((group) => ({
    name: group.name,
    skills: skills.filter((skill) => skill.group_id === group.id).map((skill) => skill.name),
  }));
}

export async function getPublishedAchievements(): Promise<readonly Achievement[]> {
  if (!hasSupabaseEnv()) return staticAchievements;

  const supabase = await createClient();
  const { data, error } = await supabase.from("achievements").select("*").eq("published", true).order("created_at", { ascending: false });
  if (error) return staticAchievements;

  return data.map((achievement) => ({
    title: achievement.title,
    organization: achievement.organization,
    date: achievement.date,
    description: achievement.description,
    evidenceUrl: achievement.evidence_url,
  }));
}
