import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Pratik Sardar - Portfolio",
  description: "Personal portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className="font-sans bg-black antialiased text-white">
        <nav className="w-full flex justify-end p-4 bg-black/60 z-50">
          <Link href="/playground" className="text-amber-400 font-bold hover:underline text-lg mr-6">
            Animation Playground
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
