import Header from "@/components/layout/Header";
import BreadcrumbNavigation from "@/components/layout/BreadcrumbNavigation";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";


export default function BdavDevLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className={"flex-1 flex flex-col"}>
                <div className={'fixed top-0 w-full z-50'}>
                    <Header/>
                </div>
                <div className="h-29 xs:h-21"/>

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
