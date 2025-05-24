import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Next.js Workshop Guide",
  description: "A Next.js workshop guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-text">
        <Navbar />
        <div className="flex flex-col items-center min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
