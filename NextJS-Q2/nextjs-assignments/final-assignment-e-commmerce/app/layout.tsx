import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar";
import Footer from "./(components)/footer";
import Newsletter from "./(components)/newsLetter";
import CustomLayout from "./(components)/customLayout";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dine Market | Your way to go",
  description: "Dine Market is an clothing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main className="xxl:mx-auto min-h-[100dvh] max-w-screen-2xl mx-2 mob:mx-6 md:mx-10">
          <CustomLayout>
            <Navbar />
          </CustomLayout>
          {children}
          <Newsletter />
          <Footer />
        </main>
      </body>
    </html>
  );
}
