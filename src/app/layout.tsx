import ThemeProvider from "@/contexts/ThemeContext";
import { inter } from "@/fonts";
import ThemeApplier from "@/components/theme/ThemeApplier";
import React from "react";
import type { Metadata } from "next";
import { defaultMetadata } from "@/metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <ThemeProvider>
            <body className={inter}>
            <ThemeApplier>
                {children}
            </ThemeApplier>
            </body>
        </ThemeProvider>
        </html>
    )
}

export const metadata: Metadata = {
    title: 'bdav.dev – David Berezowski',
    description: 'Homepage of David Berezowski. View code projects, 3D art and recipes.',
    ...defaultMetadata(["Homepage", "Main page"]),
    verification: {
        google: "Ka_Vxx3_XV-4Rmvn5C6r5CsdkCUbtsREMbLzXRGWJC4"
    }
}
