import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./global.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
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
        className={`${space_grotesk.className} bg-background text-textPrim antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
