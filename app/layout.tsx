import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/Components";

export const metadata: Metadata = {
  title: "Car hub",
  description: "Discover The best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
