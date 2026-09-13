import Link from "next/link";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Journey", "/journey"],
  ["Achievements", "/achievements"],
  ["ePortfolio", "/eportfolio"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <nav className="border-b border-[#78bac7]/20 bg-[#0d3034]/95" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f8c268] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]">
          Samson Limanikuki
        </Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#c8d9db]">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8c268]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
