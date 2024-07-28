import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { AuthProvider } from "@lib/layout/authContext";
import { Html, Head, Main, NextScript } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Penny Wise",
  description: "Money Management Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className={`flex w-full h-[100vh] ${inter.className}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
