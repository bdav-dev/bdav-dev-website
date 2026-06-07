export default function WelcomeToBdavDevHeadline() {
    return (
        <h1 className="text-6xl w-fit">
            Welcome to <BdavDev/>
        </h1>
    );
}

function BdavDev() {
    return (
        <span
            className={`
                font-semibold
                text-8xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#00AAFF]
                via-[#00ffff]
                to-[#01FFA4]
                brightness-[0.9]
                dark:brightness-100
            `}
        >
                bdav.dev
        </span>
    );
}
