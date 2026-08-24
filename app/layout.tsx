import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal ePortfolio",
  description: "A software engineering student ePortfolio and developer portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
