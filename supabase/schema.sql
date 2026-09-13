create extension if not exists "uuid-ossp";

create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  slug text not null,
  title text not null,
  description text not null,
  category text not null,
  project_type text not null,
  featured boolean not null default false,
  technologies text[] not null default '{}',
  image_url text,
  github_url text,
  live_url text,
  case_study_url text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, slug)
);

create table if not exists public.skill_groups (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.skills (
  id uuid primary key default uuid_generate_v4(),
  group_id uuid not null references public.skill_groups(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  organization text not null,
  date text not null,
  description text not null,
  evidence_url text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists projects_updated_at on public.projects;
create trigger projects_updated_at before update on public.projects for each row execute function public.set_updated_at();
drop trigger if exists skill_groups_updated_at on public.skill_groups;
create trigger skill_groups_updated_at before update on public.skill_groups for each row execute function public.set_updated_at();
drop trigger if exists skills_updated_at on public.skills;
create trigger skills_updated_at before update on public.skills for each row execute function public.set_updated_at();
drop trigger if exists achievements_updated_at on public.achievements;
create trigger achievements_updated_at before update on public.achievements for each row execute function public.set_updated_at();

alter table public.projects enable row level security;
alter table public.skill_groups enable row level security;
alter table public.skills enable row level security;
alter table public.achievements enable row level security;

create policy "Published projects are public" on public.projects for select using (published = true);
create policy "Owners manage projects" on public.projects for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Published skill groups are public" on public.skill_groups for select using (published = true);
create policy "Owners manage skill groups" on public.skill_groups for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Published skills are public" on public.skills for select using (
  exists (select 1 from public.skill_groups group_row where group_row.id = group_id and group_row.published = true)
);
create policy "Owners manage skills" on public.skills for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Published achievements are public" on public.achievements for select using (published = true);
create policy "Owners manage achievements" on public.achievements for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

insert into storage.buckets (id, name, public)
values ('portfolio-assets', 'portfolio-assets', false)
on conflict (id) do nothing;

create policy "Owners read portfolio assets" on storage.objects for select to authenticated using (
  bucket_id = 'portfolio-assets' and owner_id = auth.uid()
);
create policy "Owners upload portfolio assets" on storage.objects for insert to authenticated with check (
  bucket_id = 'portfolio-assets' and owner_id = auth.uid()
);
create policy "Owners update portfolio assets" on storage.objects for update to authenticated using (
  bucket_id = 'portfolio-assets' and owner_id = auth.uid()
) with check (bucket_id = 'portfolio-assets' and owner_id = auth.uid());
create policy "Owners delete portfolio assets" on storage.objects for delete to authenticated using (
  bucket_id = 'portfolio-assets' and owner_id = auth.uid()
);
