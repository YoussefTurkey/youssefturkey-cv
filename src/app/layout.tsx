import type { Metadata } from "next";
import { Cairo } from 'next/font/google';
import "./globals.scss";
import ClientThemeProvider from "./theme/ClientThemeProvider";
import ClientLanguageProvider from "./lang/ClientLanguageProvider";

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Youssef Turkey CV",
  description: "Youssef is a Frontend-Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased`}>
        <ClientThemeProvider>
          <ClientLanguageProvider>{children}</ClientLanguageProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
