import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "KK Constructions | Premium Building Solutions", template: "%s | KK Constructions" },
  description: "KK Constructions — premium residential, commercial, renovation and interior execution.",
  keywords: ["KK Constructions","construction company","residential construction","commercial construction","renovation","interiors"],
  robots: { index: true, follow: true }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}