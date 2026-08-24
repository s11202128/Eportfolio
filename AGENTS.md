# Project instructions

## Scope and workflow

- Build the ePortfolio in small, controlled tasks; stop after the requested task is complete.
- Explain the approach before a major feature and do not alter unrelated files.
- Preserve existing work. Do not delete or overwrite it without explaining why.
- Do not push to GitHub or configure deployment unless explicitly requested.
- After each meaningful milestone, recommend a concise conventional commit message.

## Technology

- Use Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Git, GitHub, and Vercel when appropriate.
- Do not add dependencies unless there is a clear technical reason.
- Use proper TypeScript types; avoid `any` when a suitable type can be created.
- Store portfolio content in typed files under `data/`, separate from presentation.

## Content and design

- Never invent personal information, projects, achievements, qualifications, employers, dates, certificates, or links. Use clearly marked placeholders for missing information.
- Keep the site professional, personal, minimal, responsive, and accessible.
- Use semantic HTML, accessible labels, keyboard navigation, visible focus states, sufficient contrast, appropriate alt text, and reduced-motion support.
- Use motion only when it improves the experience and keep it subtle.
- PasifikaHealth branding is reserved primarily for that project.

## Quality

- Run lint after significant changes and a production build before declaring a major stage complete.
- Verify functionality rather than assuming it works.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
