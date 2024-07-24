// layout.tsx
"use client";

import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
// import { metadata } from "next"; // Import the metadata from the separate file

const instrumental = Instrument_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumental.className}>
        <AuthProvider>
          <div> {children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
