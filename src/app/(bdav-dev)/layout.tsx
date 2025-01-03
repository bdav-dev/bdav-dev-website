import '../globals.css'
import React from "react";
import Header from "@/components/layout/header/Header";
import BreadcrumbNavigation from "@/components/layout/BreadcrumbNavigation";
import Footer from "@/components/layout/Footer";

export default function BdavDevLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                <Header/>
                <BreadcrumbNavigation/>

                <main className="mx-4 mt-4 flex flex-col">
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    );
}
