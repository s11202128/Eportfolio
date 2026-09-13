import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";

export const metadata = { title: "About | Personal ePortfolio", description: "Learn more about my software engineering journey." };

export default function AboutPage() {
  return (
    <main>
      <Section eyebrow="Introduction" title="About Me" description="A concise introduction to the person and purpose behind this portfolio.">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <p className="text-xl leading-8 text-[#d8e5e6]">{profile.about}</p>
          <div className="border-l border-[#f8c268]/60 pl-6 text-[#b8cccf]">
            <p className="text-sm uppercase tracking-[0.18em] text-[#f8c268]">Current focus</p>
            <p className="mt-3 leading-7">{profile.role}</p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Purpose" title="A portfolio built around evidence" className="bg-[#0b2b2f]">
        <p className="max-w-3xl text-lg leading-8 text-[#c8d9db]">This space will document academic work, projects, technical growth, professional development and learning experiences as they are completed and verified.</p>
        <div className="mt-8"><ButtonLink href="/projects" variant="secondary">Explore my projects</ButtonLink></div>
      </Section>
    </main>
  );
}
