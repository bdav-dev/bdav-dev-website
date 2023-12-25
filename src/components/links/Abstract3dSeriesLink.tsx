import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Abstract3dSeriesProjectProps = {
    image: StaticImageData
}

export default function Abstract3dSeriesLink(props: Abstract3dSeriesProjectProps) {
    return (
        <Link className="inline-block w-fit group" href={""} draggable="false">
            <div className="w-52 h-52 overflow-hidden flex items-center rounded-2xl absolute group-hover:blur-xl group-hover:saturate-200 dark:group-hover:saturate-100 transition-all -z-10 group-hover:scale-105">
                <Image src={props.image} alt="test" className="" draggable="false" />
            </div>

            <div className="dark:border-zinc-800 border-zinc-400 border w-52 h-52 overflow-hidden flex items-center rounded-2xl relative transition-all group-hover:scale-105">
                <Image src={props.image} alt="test" className="" draggable="false" />
            </div>
        </Link>
    );
}