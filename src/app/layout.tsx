import ThemeProvider from "@/contexts/ThemeContext";
import { cascadiaCode, inter } from "@/fonts";
import ThemeApplier from "@/components/theme/ThemeApplier";
import type { Metadata } from "next";
import { MATERIAL_SYMBOLS_API_URL } from "@/icons/material/MaterialSymbol";
import { ReactNode } from "react";


export const metadata: Metadata = {
    title: 'bdav.dev',
    description: 'Homepage of David Berezowski. View code projects, 3D art and recipes.',
    creator: 'David Berezowski',
    authors: [{ name: 'David Berezowski' }],
    publisher: 'David Berezowski',
    verification: {
        google: "Ka_Vxx3_XV-4Rmvn5C6r5CsdkCUbtsREMbLzXRGWJC4"
    }
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={cascadiaCode.variable}>
        <head>
            <link rel="stylesheet" href={MATERIAL_SYMBOLS_API_URL}/>
        </head>
        <body className={inter.className}>
        <ThemeProvider>
            <ThemeApplier>
                {children}
            </ThemeApplier>
        </ThemeProvider>
        </body>
        </html>
    )
}
