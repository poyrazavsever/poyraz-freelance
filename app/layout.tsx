import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelance - Poyraz Avsever - Work With Me",
  description: "Let's work together! Hire me for your next project. I'm available for freelance work and ready to bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
