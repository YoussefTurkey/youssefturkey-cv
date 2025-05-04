import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import ClientThemeProvider from "./theme/ClientThemeProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
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
      <body
        className={`${roboto.variable} antialiased`}
      >
        <ClientThemeProvider>
        {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
