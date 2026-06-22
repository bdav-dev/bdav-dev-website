import WelcomeToBdavDevHeadline from "@/components/home/WelcomeToBdavDevHeadline";
import CategoriesShowcase from "@/components/home/CategoriesShowcase";


export default function HomePage() {
    return (
        <>
            <div className={'mx-3 mb-3 lg:mb-7 -mt-4 lg:mt-0'}>
                <WelcomeToBdavDevHeadline/>
            </div>
            <CategoriesShowcase className={'flex-1'}/>
        </>
    );
}
