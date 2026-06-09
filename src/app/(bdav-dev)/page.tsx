'use client';

import WelcomeToBdavDevHeadline from "@/components/home/WelcomeToBdavDevHeadline";
import CategoriesShowcase from "@/components/home/CategoriesShowcase";


export default function HomePage() {
    return (
        <>
            <div className={'ml-3 mb-3 md:mb-7'}>
                <WelcomeToBdavDevHeadline/>
            </div>
            <CategoriesShowcase className={'flex-1'}/>
        </>
    );
}
