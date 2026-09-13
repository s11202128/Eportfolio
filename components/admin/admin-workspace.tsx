"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Database } from "@/lib/supabase/database.types";
import { FolderKanban, Plus, Settings2, Trophy, X } from "@/components/icons";

type Project = Database["public"]["Tables"]["projects"]["Row"];
type SkillGroup = Database["public"]["Tables"]["skill_groups"]["Row"];
type Skill = Database["public"]["Tables"]["skills"]["Row"];
type Achievement = Database["public"]["Tables"]["achievements"]["Row"];
type Action = (formData: FormData) => void | Promise<void>;
type Tab = "projects" | "skills" | "achievements";

const tabs: readonly { id: Tab; label: string; icon: typeof FolderKanban }[] = [
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skill Groups", icon: Settings2 },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

const inputClass = "mt-1 w-full rounded-md border border-[#78bac7]/30 bg-[#08262a] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#759397] focus:border-[#f8c268] focus:ring-1 focus:ring-[#f8c268]";
const labelClass = "block text-xs font-semibold uppercase tracking-[0.12em] text-[#b8cccf]";

function StatusBadge({ published, featured = false }: { published: boolean; featured?: boolean }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${published ? "border-[#6cb6c7]/40 bg-[#46a5bb]/15 text-[#bfe8f0]" : "border-[#b8cccf]/25 bg-white/5 text-[#b8cccf]"}`}>{featured ? "Featured · " : ""}{published ? "Published" : "Draft"}</span>;
}

function Modal({ title, description, onClose, children }: { title: string; description: string; onClose: () => void; children: ReactNode }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { closeButtonRef.current?.focus(); }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#041619]/80 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-[#78bac7]/35 bg-[#0d3034] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:rounded-xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="admin-dialog-title">
        <div className="flex items-start justify-between gap-5 border-b border-[#78bac7]/20 pb-5">
          <div><h2 id="admin-dialog-title" className="text-2xl font-semibold text-white">{title}</h2><p className="mt-2 text-sm leading-6 text-[#b8cccf]">{description}</p></div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close editor" className="grid size-9 shrink-0 place-items-center rounded-md border border-[#78bac7]/40 text-[#c8d9db] hover:border-[#f8c268] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f8c268]"><X size={18} aria-hidden="true" /></button>
        </div>
        <div className="pt-6">{children}</div>
      </section>
    </div>
  );
}

function ProjectForm({ project, action, onClose }: { project?: Project; action: Action; onClose: () => void }) {
  return <form action={action} onSubmit={onClose} className="space-y-4">
    {project ? <input type="hidden" name="id" value={project.id} /> : null}
    <div className="grid gap-4 sm:grid-cols-2"><label className={labelClass}>Title<input className={inputClass} name="title" defaultValue={project?.title} required /></label><label className={labelClass}>Slug<input className={inputClass} name="slug" defaultValue={project?.slug} required /></label></div>
    <label className={labelClass}>Description<textarea className={`${inputClass} min-h-28`} name="description" defaultValue={project?.description} required /></label>
    <div className="grid gap-4 sm:grid-cols-2"><label className={labelClass}>Category<input className={inputClass} name="category" defaultValue={project?.category} required /></label><label className={labelClass}>Project type<input className={inputClass} name="project_type" defaultValue={project?.project_type} required /></label></div>
    <label className={labelClass}>Technologies<input className={inputClass} name="technologies" defaultValue={project?.technologies.join(", ")} placeholder="React, TypeScript" /></label>
    <div className="grid gap-4 sm:grid-cols-2"><label className={labelClass}>Image URL<input className={inputClass} name="image_url" defaultValue={project?.image_url ?? ""} /></label><label className={labelClass}>Case study URL<input className={inputClass} name="case_study_url" defaultValue={project?.case_study_url ?? ""} /></label><label className={labelClass}>GitHub URL<input className={inputClass} name="github_url" defaultValue={project?.github_url ?? ""} /></label><label className={labelClass}>Live URL<input className={inputClass} name="live_url" defaultValue={project?.live_url ?? ""} /></label></div>
    <div className="flex flex-wrap gap-5 border-t border-[#78bac7]/20 pt-4"><label className="flex items-center gap-2 text-sm text-[#d8e5e6]"><input type="checkbox" name="featured" defaultChecked={project?.featured} /> Featured project</label><label className="flex items-center gap-2 text-sm text-[#d8e5e6]"><input type="checkbox" name="published" defaultChecked={project?.published} /> Published</label></div>
    <div className="flex justify-end gap-3 border-t border-[#78bac7]/20 pt-5"><button type="button" onClick={onClose} className="rounded-md border border-[#78bac7]/50 px-4 py-2.5 text-sm font-semibold text-white hover:border-[#f8c268]">Cancel</button><button type="submit" className="rounded-md bg-[#46a5bb] px-4 py-2.5 text-sm font-semibold text-[#08262a] hover:bg-[#6cb6c7]">{project ? "Save project" : "Add project"}</button></div>
  </form>;
}

function SkillForm({ group, skills, action, onClose }: { group?: SkillGroup; skills: readonly Skill[]; action: Action; onClose: () => void }) {
  const value = group ? skills.filter((skill) => skill.group_id === group.id).map((skill) => skill.name).join(", ") : "";
  return <form action={action} onSubmit={onClose} className="space-y-4">
    {group ? <input type="hidden" name="id" value={group.id} /> : null}
    <label className={labelClass}>Group name<input className={inputClass} name="name" defaultValue={group?.name} required /></label>
    <label className={labelClass}>Skills<input className={inputClass} name="skills" defaultValue={value} placeholder="React, TypeScript, Next.js" /><span className="mt-2 block normal-case tracking-normal text-[#8eaaad]">Separate skills with commas.</span></label>
    <label className={labelClass}>Display order<input className={inputClass} name="sort_order" type="number" defaultValue={group?.sort_order ?? 0} /></label>
    <label className="flex items-center gap-2 text-sm text-[#d8e5e6]"><input type="checkbox" name="published" defaultChecked={group?.published} /> Published</label>
    <div className="flex justify-end gap-3 border-t border-[#78bac7]/20 pt-5"><button type="button" onClick={onClose} className="rounded-md border border-[#78bac7]/50 px-4 py-2.5 text-sm font-semibold text-white hover:border-[#f8c268]">Cancel</button><button type="submit" className="rounded-md bg-[#46a5bb] px-4 py-2.5 text-sm font-semibold text-[#08262a] hover:bg-[#6cb6c7]">{group ? "Save group" : "Add group"}</button></div>
  </form>;
}

function AchievementForm({ achievement, action, onClose }: { achievement?: Achievement; action: Action; onClose: () => void }) {
  return <form action={action} onSubmit={onClose} className="space-y-4">
    {achievement ? <input type="hidden" name="id" value={achievement.id} /> : null}
    <label className={labelClass}>Title<input className={inputClass} name="title" defaultValue={achievement?.title} required /></label>
    <div className="grid gap-4 sm:grid-cols-2"><label className={labelClass}>Organization<input className={inputClass} name="organization" defaultValue={achievement?.organization} required /></label><label className={labelClass}>Date<input className={inputClass} name="date" defaultValue={achievement?.date} required /></label></div>
    <label className={labelClass}>Description<textarea className={`${inputClass} min-h-32`} name="description" defaultValue={achievement?.description} required /></label>
    <label className={labelClass}>Evidence URL<input className={inputClass} name="evidence_url" defaultValue={achievement?.evidence_url ?? ""} /></label>
    <label className="flex items-center gap-2 text-sm text-[#d8e5e6]"><input type="checkbox" name="published" defaultChecked={achievement?.published} /> Published</label>
    <div className="flex justify-end gap-3 border-t border-[#78bac7]/20 pt-5"><button type="button" onClick={onClose} className="rounded-md border border-[#78bac7]/50 px-4 py-2.5 text-sm font-semibold text-white hover:border-[#f8c268]">Cancel</button><button type="submit" className="rounded-md bg-[#46a5bb] px-4 py-2.5 text-sm font-semibold text-[#08262a] hover:bg-[#6cb6c7]">{achievement ? "Save achievement" : "Add achievement"}</button></div>
  </form>;
}

function EmptyState({ title, description, onAdd }: { title: string; description: string; onAdd: () => void }) {
  return <div className="border border-dashed border-[#78bac7]/35 bg-[#103b40]/45 p-8 text-center"><p className="text-lg font-semibold text-white">{title}</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#b8cccf]">{description}</p><button type="button" onClick={onAdd} className="mt-5 rounded-md bg-[#46a5bb] px-4 py-2.5 text-sm font-semibold text-[#08262a]">Add first record</button></div>;
}

export function AdminWorkspace({ activeTab, projects, skillGroups, skills, achievements, actions }: { activeTab: Tab; projects: readonly Project[]; skillGroups: readonly SkillGroup[]; skills: readonly Skill[]; achievements: readonly Achievement[]; actions: { createProject: Action; updateProject: Action; deleteProject: Action; createSkillGroup: Action; updateSkillGroup: Action; deleteSkillGroup: Action; createAchievement: Action; updateAchievement: Action; deleteAchievement: Action } }) {
  const [modal, setModal] = useState<{ type: Tab; id?: string } | null>(null);
  const selectedProject = modal?.type === "projects" ? projects.find((item) => item.id === modal.id) : undefined;
  const selectedGroup = modal?.type === "skills" ? skillGroups.find((item) => item.id === modal.id) : undefined;
  const selectedAchievement = modal?.type === "achievements" ? achievements.find((item) => item.id === modal.id) : undefined;
  const publishedCount = projects.filter((item) => item.published).length + skillGroups.filter((item) => item.published).length + achievements.filter((item) => item.published).length;
  const totalCount = projects.length + skillGroups.length + achievements.length;
  const tabData = activeTab === "projects" ? { count: projects.length, published: projects.filter((item) => item.published).length } : activeTab === "skills" ? { count: skillGroups.length, published: skillGroups.filter((item) => item.published).length } : { count: achievements.length, published: achievements.filter((item) => item.published).length };
  const close = () => setModal(null);

  return <div>
    <div className="grid gap-3 sm:grid-cols-3"><div className="border border-[#78bac7]/25 bg-[#103b40] p-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b8cccf]">Total records</p><p className="mt-2 text-3xl font-semibold text-white">{totalCount}</p></div><div className="border border-[#78bac7]/25 bg-[#103b40] p-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b8cccf]">Published</p><p className="mt-2 text-3xl font-semibold text-[#f8c268]">{publishedCount}</p></div><div className="border border-[#78bac7]/25 bg-[#103b40] p-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b8cccf]">Current view</p><p className="mt-2 text-3xl font-semibold text-white">{tabData.count}</p></div></div>
    <div className="mt-10 overflow-hidden rounded-xl border border-[#78bac7]/25 bg-[#0b2b2f]
      ">
      <nav className="flex overflow-x-auto border-b border-[#78bac7]/25" role="tablist" aria-label="Portfolio content">
        {tabs.map((tab) => <Link key={tab.id} href={`/admin?tab=${tab.id}`} role="tab" aria-selected={activeTab === tab.id} className={`inline-flex min-w-max items-center gap-2 border-b-2 px-5 py-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#f8c268] ${activeTab === tab.id ? "border-[#f8c268] bg-[#103b40] text-white" : "border-transparent text-[#b8cccf] hover:bg-[#103b40]/60 hover:text-white"}`}><tab.icon size={16} strokeWidth={1.8} aria-hidden="true" />{tab.label}<span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">{tab.id === "projects" ? projects.length : tab.id === "skills" ? skillGroups.length : achievements.length}</span></Link>)}
      </nav>
      <div className="p-5 sm:p-7" role="tabpanel">
        <div className="flex flex-col justify-between gap-4 border-b border-[#78bac7]/20 pb-6 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f8c268]">Content manager</p><h2 className="mt-2 flex items-center gap-2 text-2xl font-semibold text-white">{(() => { const Icon = tabs.find((tab) => tab.id === activeTab)?.icon; return Icon ? <Icon className="size-6 text-[#f8c268]" strokeWidth={1.7} aria-hidden="true" /> : null; })()}{tabs.find((tab) => tab.id === activeTab)?.label}</h2><p className="mt-2 text-sm text-[#b8cccf]">{tabData.count} records · {tabData.published} published</p></div><button type="button" onClick={() => setModal({ type: activeTab })} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#46a5bb] px-4 py-2.5 text-sm font-semibold text-[#08262a] hover:bg-[#6cb6c7]"><Plus size={16} aria-hidden="true" /> Add {activeTab === "projects" ? "project" : activeTab === "skills" ? "skill group" : "achievement"}</button></div>
        {activeTab === "projects" ? <div className="mt-6 space-y-3">{projects.length ? projects.map((project) => <article key={project.id} className="flex flex-col gap-4 border border-[#78bac7]/20 bg-[#103b40]/55 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-white">{project.title}</h3><StatusBadge published={project.published} featured={project.featured} /></div><p className="mt-2 text-sm text-[#b8cccf]">{project.category} · {project.project_type} · {project.technologies.length} technologies</p><p className="mt-1 truncate text-xs text-[#759397]">/{project.slug}</p></div><div className="flex shrink-0 gap-3"><button type="button" onClick={() => setModal({ type: "projects", id: project.id })} className="rounded-md border border-[#78bac7]/50 px-3 py-2 text-sm font-semibold text-white hover:border-[#f8c268]">Edit</button><form action={actions.deleteProject}><input type="hidden" name="id" value={project.id} /><button type="submit" className="px-2 py-2 text-sm font-semibold text-[#ffb4a8] hover:underline">Delete</button></form></div></article>) : <EmptyState title="No projects yet" description="Add your first project to begin building the public portfolio." onAdd={() => setModal({ type: "projects" })} />}</div> : null}
        {activeTab === "skills" ? <div className="mt-6 grid gap-4 lg:grid-cols-2">{skillGroups.length ? skillGroups.map((group) => <article key={group.id} className="border border-[#78bac7]/20 bg-[#103b40]/55 p-5"><div className="flex items-start justify-between gap-4"><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-white">{group.name}</h3><StatusBadge published={group.published} /></div><p className="mt-2 text-xs text-[#759397]">Order {group.sort_order}</p></div><div className="flex shrink-0 gap-2"><button type="button" onClick={() => setModal({ type: "skills", id: group.id })} className="rounded-md border border-[#78bac7]/50 px-3 py-2 text-sm font-semibold text-white hover:border-[#f8c268]">Edit</button><form action={actions.deleteSkillGroup}><input type="hidden" name="id" value={group.id} /><button type="submit" className="px-1 py-2 text-sm font-semibold text-[#ffb4a8] hover:underline">Delete</button></form></div></div><div className="mt-4 flex flex-wrap gap-2">{skills.filter((skill) => skill.group_id === group.id).map((skill) => <span key={skill.id} className="rounded-md bg-[#08262a] px-2.5 py-1.5 text-xs text-[#c8d9db]">{skill.name}</span>)}</div></article>) : <div className="lg:col-span-2"><EmptyState title="No skill groups yet" description="Organise your technical toolkit into clear groups." onAdd={() => setModal({ type: "skills" })} /></div>}</div> : null}
        {activeTab === "achievements" ? <div className="mt-6 space-y-3">{achievements.length ? achievements.map((achievement) => <article key={achievement.id} className="flex flex-col gap-4 border border-[#78bac7]/20 bg-[#103b40]/55 p-5 sm:flex-row sm:items-start sm:justify-between"><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-white">{achievement.title}</h3><StatusBadge published={achievement.published} /></div><p className="mt-2 text-sm text-[#f8c268]">{achievement.organization} · {achievement.date}</p><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#b8cccf]">{achievement.description}</p><p className="mt-2 text-xs text-[#759397]">{achievement.evidence_url ? "Evidence linked" : "No evidence link"}</p></div><div className="flex shrink-0 gap-3"><button type="button" onClick={() => setModal({ type: "achievements", id: achievement.id })} className="rounded-md border border-[#78bac7]/50 px-3 py-2 text-sm font-semibold text-white hover:border-[#f8c268]">Edit</button><form action={actions.deleteAchievement}><input type="hidden" name="id" value={achievement.id} /><button type="submit" className="px-2 py-2 text-sm font-semibold text-[#ffb4a8] hover:underline">Delete</button></form></div></article>) : <EmptyState title="No achievements yet" description="Keep verified recognition and evidence organised here." onAdd={() => setModal({ type: "achievements" })} />}</div> : null}
      </div>
    </div>
    {modal?.type === "projects" ? <Modal title={selectedProject ? "Edit project" : "Add project"} description="Keep the project details accurate, complete, and ready to publish." onClose={close}><ProjectForm project={selectedProject} action={selectedProject ? actions.updateProject : actions.createProject} onClose={close} /></Modal> : null}
    {modal?.type === "skills" ? <Modal title={selectedGroup ? "Edit skill group" : "Add skill group"} description="Group related technologies so visitors can scan your toolkit quickly." onClose={close}><SkillForm group={selectedGroup} skills={skills} action={selectedGroup ? actions.updateSkillGroup : actions.createSkillGroup} onClose={close} /></Modal> : null}
    {modal?.type === "achievements" ? <Modal title={selectedAchievement ? "Edit achievement" : "Add achievement"} description="Record verified recognition and link its supporting evidence." onClose={close}><AchievementForm achievement={selectedAchievement} action={selectedAchievement ? actions.updateAchievement : actions.createAchievement} onClose={close} /></Modal> : null}
  </div>;
}
