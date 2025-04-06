import "./global.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Space_Grotesk, Space_Mono, Inter } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

const space_mono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-spaceMono",
});

const inter = Inter({
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
          inter.variable,
          "bg-background text-textPrim antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
