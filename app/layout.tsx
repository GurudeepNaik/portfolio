import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AppContextProvider } from "@/components/AppContextFolder/AppContext";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurudeep Naik - Mern Stack Developer",
  description: `I've been working on Mern Stack Developer for 2 years straight. Get in touch with me to know more.`,
  applicationName:"Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <AppContextProvider>
          {children}
          <Analytics />
        </AppContextProvider>
      </body>
    </html>
  );
}
