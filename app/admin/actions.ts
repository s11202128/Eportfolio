"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function getOwner() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  return { supabase, user };
}

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function optionalText(formData: FormData, key: string) {
  const value = text(formData, key);
  return value || null;
}

export async function signOut() {
  const { supabase } = await getOwner();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createProject(formData: FormData) {
  const { supabase, user } = await getOwner();
  await supabase.from("projects").insert({
    owner_id: user.id,
    slug: text(formData, "slug"),
    title: text(formData, "title"),
    description: text(formData, "description"),
    category: text(formData, "category"),
    project_type: text(formData, "project_type"),
    featured: formData.get("featured") === "on",
    technologies: text(formData, "technologies").split(",").map((item) => item.trim()).filter(Boolean),
    image_url: optionalText(formData, "image_url"),
    github_url: optionalText(formData, "github_url"),
    live_url: optionalText(formData, "live_url"),
    case_study_url: optionalText(formData, "case_study_url"),
    published: formData.get("published") === "on",
  });
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function updateProject(formData: FormData) {
  const { supabase, user } = await getOwner();
  const id = text(formData, "id");
  await supabase.from("projects").update({
    slug: text(formData, "slug"),
    title: text(formData, "title"),
    description: text(formData, "description"),
    category: text(formData, "category"),
    project_type: text(formData, "project_type"),
    featured: formData.get("featured") === "on",
    technologies: text(formData, "technologies").split(",").map((item) => item.trim()).filter(Boolean),
    image_url: optionalText(formData, "image_url"),
    github_url: optionalText(formData, "github_url"),
    live_url: optionalText(formData, "live_url"),
    case_study_url: optionalText(formData, "case_study_url"),
    published: formData.get("published") === "on",
  }).eq("id", id).eq("owner_id", user.id);
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function deleteProject(formData: FormData) {
  const { supabase, user } = await getOwner();
  await supabase.from("projects").delete().eq("id", text(formData, "id")).eq("owner_id", user.id);
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function createSkillGroup(formData: FormData) {
  const { supabase, user } = await getOwner();
  const { data: group } = await supabase.from("skill_groups").insert({
    owner_id: user.id,
    name: text(formData, "name"),
    sort_order: Number(text(formData, "sort_order")) || 0,
    published: formData.get("published") === "on",
  }).select("id").single();
  if (group) {
    const skills = text(formData, "skills").split(",").map((name, index) => ({ group_id: group.id, owner_id: user.id, name: name.trim(), sort_order: index })).filter((skill) => skill.name);
    if (skills.length) await supabase.from("skills").insert(skills);
  }
  revalidatePath("/admin");
  revalidatePath("/skills");
}

export async function updateSkillGroup(formData: FormData) {
  const { supabase, user } = await getOwner();
  const id = text(formData, "id");
  await supabase.from("skill_groups").update({ name: text(formData, "name"), sort_order: Number(text(formData, "sort_order")) || 0, published: formData.get("published") === "on" }).eq("id", id).eq("owner_id", user.id);
  await supabase.from("skills").delete().eq("group_id", id).eq("owner_id", user.id);
  const skills = text(formData, "skills").split(",").map((name, index) => ({ group_id: id, owner_id: user.id, name: name.trim(), sort_order: index })).filter((skill) => skill.name);
  if (skills.length) await supabase.from("skills").insert(skills);
  revalidatePath("/admin");
  revalidatePath("/skills");
}

export async function deleteSkillGroup(formData: FormData) {
  const { supabase, user } = await getOwner();
  await supabase.from("skill_groups").delete().eq("id", text(formData, "id")).eq("owner_id", user.id);
  revalidatePath("/admin");
  revalidatePath("/skills");
}

export async function createAchievement(formData: FormData) {
  const { supabase, user } = await getOwner();
  await supabase.from("achievements").insert({
    owner_id: user.id,
    title: text(formData, "title"),
    organization: text(formData, "organization"),
    date: text(formData, "date"),
    description: text(formData, "description"),
    evidence_url: optionalText(formData, "evidence_url"),
    published: formData.get("published") === "on",
  });
  revalidatePath("/admin");
  revalidatePath("/achievements");
}

export async function updateAchievement(formData: FormData) {
  const { supabase, user } = await getOwner();
  await supabase.from("achievements").update({
    title: text(formData, "title"),
    organization: text(formData, "organization"),
    date: text(formData, "date"),
    description: text(formData, "description"),
    evidence_url: optionalText(formData, "evidence_url"),
    published: formData.get("published") === "on",
  }).eq("id", text(formData, "id")).eq("owner_id", user.id);
  revalidatePath("/admin");
  revalidatePath("/achievements");
}

export async function deleteAchievement(formData: FormData) {
  const { supabase, user } = await getOwner();
  await supabase.from("achievements").delete().eq("id", text(formData, "id")).eq("owner_id", user.id);
  revalidatePath("/admin");
  revalidatePath("/achievements");
}
