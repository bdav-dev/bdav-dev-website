import Image from "next/image";
import backgroundImage from "@/../public/misc/bdav-dev/bdav-dev-text-background-image.webp";
import { Space } from "@/components/format/Space";

export default function WelcomeToBdavDevHeadline() {

    return (
        <h1 className="text-4xl w-fit mx-auto text-center my-12">
            Welcome to<Space/>
            <div className="inline relative">
                <span
                    className={`
                        font-semibold
                        text-5xl
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-[#00AAFF]
                        via-[#00ffff]
                        to-[#01FFA4]
                        brightness-[0.85]
                        dark:brightness-100
                    `}
                >
                    bdav.dev
                </span>
                <Image
                    src={backgroundImage}
                    alt=""
                    priority
                    placeholder="blur"
                    quality={1}
                    draggable={false}
                    className={`
                        absolute w-full -z-50
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        scale-y-[65%]
                        dark:brightness-[0.65]
                        brightness-105
                        opacity-50
                        dark:opacity-100
                        blur-3xl
                        select-none
                    `}
                />
            </div>
        </h1>
    );
}
