import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Forms",
  description: "Next JS Forms with ShadCN react-hook-form and zod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
