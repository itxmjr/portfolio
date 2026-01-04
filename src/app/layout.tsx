import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorEffects from "@/components/CursorEffects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "AI by MJR · Generative AI Portfolio",
  description: "AI Solutions Architect Portfolio - M Jawad ur Rehman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts if needed, but next/font handles optimization */}
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} relative min-h-screen overflow-x-hidden text-[#f5f8ff] font-sans bg-[radial-gradient(circle_at_top,_#07141c_0%,_#030304_40%,_#000000_100%)]`}>
        {/* Grid BG */}
        <div className="fixed inset-0 -z-10 grid-bg opacity-50"></div>

        {/* Cursor Effects */}
        <CursorEffects />

        {children}
      </body>
    </html>
  );
}
