import "./global.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Space_Grotesk, Space_Mono, Inter_Tight } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

const space_mono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-spaceMono",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tim Chmieletzki",
  description: "Portfolio von Tim Chmieletzki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={twMerge(
          space_grotesk.variable,
          space_mono.variable,
          interTight.variable,
          "bg-background text-textPrim antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
