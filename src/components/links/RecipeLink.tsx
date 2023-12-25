import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type RecipeLinkProps = {
    image: StaticImageData
    children: React.ReactNode
}

export default function RecipeLink(props: RecipeLinkProps) {
    return (
        <Link className="inline-block w-fit" href={""} draggable="false">
            <div className="dark:border-zinc-800 border-zinc-400 border w-56 h-56 overflow-hidden flex items-center rounded-full relative group">
                <div className="select-none text-lg text-center absolute transition-all opacity-0 group-hover:opacity-100 z-10 -translate-y-32 ease-out duration-300 group-hover:translate-y-0 left-0 right-0 ml-auto mr-auto w-fit">
                    {props.children}
                </div>
                <Image src={props.image} alt="test" className="transition-all duration-300 group-hover:blur-md" draggable="false" />
            </div>
        </Link>
    );
}