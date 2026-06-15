import { cascadiaCode, inter } from "@/styles/fonts";
import type { Metadata } from "next";
import { MATERIAL_SYMBOLS_API_URL } from "@/icons/material/MaterialSymbol";
import { ReactNode } from "react";
import ThemeContextProvider from "@/contexts/ThemeContext";

import './globals.css';


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
        <html lang="en" className={`${cascadiaCode.variable} ${inter.className}`} suppressHydrationWarning>
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                const storedTheme = localStorage.getItem("theme");
                                const doesUserPreferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

                                const theme = storedTheme || (doesUserPreferDarkTheme ? 'dark' : 'light');
                                document.documentElement.classList.toggle("dark", theme === "dark");

                            } catch (e) {
                            }
                        })();
                    `
                }}
            />
            <link rel="stylesheet" href={MATERIAL_SYMBOLS_API_URL}/>
        </head>
        <body className={'text-zinc-850 dark:text-zinc-100 flex flex-col min-h-screen'}>
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
        </body>
        </html>
    );
}
