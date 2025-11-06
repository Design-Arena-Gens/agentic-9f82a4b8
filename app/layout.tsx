import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omni Assistant - Your Ultra-Intelligent AI Companion",
  description: "An ultra-intelligent AI designed to assist with everything you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
