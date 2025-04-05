import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.ttf",
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
        className={`${spaceGrotesk.className} bg-background text-textPrim antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
