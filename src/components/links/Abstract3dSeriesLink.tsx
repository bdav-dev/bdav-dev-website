import { Abstract3dSeriesImage } from "@/content/abstract3dSeries";
import Image from "next/image";
import Link from "next/link";

type Abstract3dSeriesProjectProps = {
    abstract3dSeriesImage: Abstract3dSeriesImage
}

export default function Abstract3dSeriesLink(props: Abstract3dSeriesProjectProps) {
    return (
        <Link
            className="inline-block w-fit group"
            href={`/3d/abstract-3d-series/${props.abstract3dSeriesImage.nr}`}
            draggable="false"
        >

            <div className={`
                    w-52 h-52 -z-10
                    absolute flex items-center
                    rounded-2xl overflow-hidden
                    transition-all
                    group-hover:saturate-200 dark:group-hover:saturate-200
                    group-hover:blur-xl group-hover:scale-105
                `}
            >
                <Image
                    src={props.abstract3dSeriesImage.image}
                    alt=""
                    draggable={false}
                    placeholder="blur"
                />
            </div>

            <div className={`
                    w-52 h-52 
                    relative flex items-center
                    border border-zinc-500 dark:border-zinc-800
                    rounded-2xl overflow-hidden
                    transition-all group-hover:scale-105
                `}
            >
                <Image
                    src={props.abstract3dSeriesImage.image}
                    alt={`Abstract3DSeries #${props.abstract3dSeriesImage.nr}`}
                    draggable={false}
                    placeholder="blur"
                />
            </div>

        </Link>
    );
}