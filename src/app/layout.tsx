import type {Metadata} from "next";
import "../style/globals.css";
import Navigation from "@/components/navigation/navigation";
import React from "react";
import TopNavigationSection from "@/components/navigation/top-navigation-section";
import {plusJakartaSans} from "@/components/ui/font";

export const metadata: Metadata = {
    title: "Racma Services - Professional Cleaning Services in nairobi",
    description: "Get top-rated professional cleaning services with Racma Services. We specialize in residential, commercial, and deep cleaning solutions. Book today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${plusJakartaSans.className} antialiased`}>
    <main className={"w-full min-h-[100vh] space-y-4"}>
        <TopNavigationSection/>
        <Navigation/>
        {children}
    </main>
    </body>
    </html>
  );
}
