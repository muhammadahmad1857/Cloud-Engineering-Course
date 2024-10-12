import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Landing Page | Assignment 2-PIAIC",
  description: "Created By Muhammad Ahmad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main className="mx-auto min-h-[100dvh] max-w-screen-2xl">
          {children}
        </main>
      </body>
    </html>
  );
}
