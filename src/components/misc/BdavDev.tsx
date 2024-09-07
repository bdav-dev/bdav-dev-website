import Image from "next/image";
import backgroundImage from "@/../public/misc/bdav-dev/bdav-dev-text-background-image.webp";
import { mono } from "@/fonts";

export default function BdavDev() {

    return (
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
                    brightness-[0.7]
                    drop-shadow
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
                    dark:brightness-50
                    brightness-110
                    blur-3xl
                    select-none
                `}
            />

        </div>
    );
}