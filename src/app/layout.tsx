import type {Metadata} from "next";
import "../style/globals.css";
import Navigation from "@/components/navigation/navigation";
import React from "react";
import TopNavigationSection from "@/components/navigation/top-navigation-section";
import {inter} from "@/components/ui/font";

export const metadata: Metadata = {
    title: "Racma Services",
    description: "Professional Cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>
    <main className={"w-full min-h-[100vh] space-y-4"}>
        <TopNavigationSection/>
        <Navigation/>
        {children}
    </main>
    </body>
    </html>
  );
}
