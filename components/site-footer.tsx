import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#78bac7]/20 bg-[#08262a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#b8cccf] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>Personal ePortfolio · content to be expanded with verified evidence.</p>
        <Link href="/contact" className="font-semibold text-[#f8c268] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]">Get in touch</Link>
      </div>
    </footer>
  );
}
