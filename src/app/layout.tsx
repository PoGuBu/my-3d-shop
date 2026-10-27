import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My 3D Shop | 3D Prints & STL Files",
  description:
    "Buy high-quality 3D printed objects and digital STL files. Unique designs, ready to print or ready to ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          {children}
        </main>
        <footer className="border-t border-zinc-800 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} My 3D Shop. All rights reserved.
              </p>
              <p className="text-sm text-zinc-600">
                Physical prints & digital STL files
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
