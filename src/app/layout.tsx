// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Your Tailwind global styles
import { SessionProvider } from "next-auth/react"; // For useSession in Appbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoxSight - AI Stock Analysis",
  description: "AI-Powered Predictive Analytics for Stock Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
    <html lang="en" className="dark"> {/* Added dark class to html for consistent dark theme */}
      <body className={inter.className}>
        <SessionProvider> {/* Wrap with SessionProvider */}
          {children}
        </SessionProvider>
      </body>
    </html>
    </>
  );
}