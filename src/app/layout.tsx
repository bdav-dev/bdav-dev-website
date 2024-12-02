import type { Metadata } from 'next'
import './globals.css'
import ThemeContext from '@/contexts/ThemeContext'
import { defaultMetadata } from '@/metadata'
import React from "react";
import { inter } from "@/fonts";

export const metadata: Metadata = {
    title: 'bdav.dev – David Berezowski',
    description: 'Homepage of David Berezowski. View code projects, 3D art and recipes.',
    ...defaultMetadata(["Homepage", "Main page"]),
    verification: {
        google: "Ka_Vxx3_XV-4Rmvn5C6r5CsdkCUbtsREMbLzXRGWJC4"
    }
}

export default function RootLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <html lang="en">
        <ThemeContext>
            <body className={inter}>{children}</body>
        </ThemeContext>
        </html>
    );
}
