export default function WelcomeToBdavDevHeadline() {
    return (
        <h1 className={"w-fit text-3xl xs:text-5xl md:text-6xl"}>
            Welcome to <br className={'inline md:hidden'}/> <BdavDev/>
        </h1>
    );
}

function BdavDev() {
    return (
        <span
            className={`
                font-semibold
                text-5xl xs:text-7xl md:text-8xl
                text-transparent
                bg-clip-text
                bg-linear-to-r
                from-[#00AAFF]
                via-[#00ffff]
                to-[#01FFA4]
                brightness-[0.9] dark:brightness-100
            `}
        >
                bdav.dev
        </span>
    );
}
