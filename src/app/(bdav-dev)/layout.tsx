import '../globals.css'
import Header from "@/components/layout/header/Header";
import BreadcrumbNavigation from "@/components/layout/BreadcrumbNavigation";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";


export default function BdavDevLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className={"flex-1 flex flex-col"}>
                <Header/>
                <div className={'px-5'}>
                    <BreadcrumbNavigation/>
                </div>
                <main className={"flex-1 flex flex-col mt-5 mx-3 sm:mx-6"}>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    );
}
