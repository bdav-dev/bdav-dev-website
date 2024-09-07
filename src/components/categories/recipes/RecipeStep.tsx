import Tile from "@/components/pageElements/Tile";
import { StaticImageData } from "next/image";
import Image from "next/image";

type RecipeStepProps = {
    title: string,
    image?: StaticImageData,
    children?: React.ReactNode
}

export default function RecipeStep(props: RecipeStepProps) {
    const isPortrait = props.image
        ? (props.image.width / props.image.height) < 1
        : undefined;

    return (
        <Tile title={props.title}>
            <div className="flex flex-col md:flex-row">

                <div>
                    {props.children}
                </div>

                {
                    props.image &&
                    <Image
                        src={props.image}
                        alt={props.title}
                        className={`
                            ${isPortrait ? "h-80" : "w-80"}
                            p-2.5
                            mx-auto
                            md:mr-0
                            object-contain
                            drop-shadow-lg
                            select-none
                            rounded-xl
                            border-neutral-500
                        `}
                        quality={100}
                        placeholder="blur"
                        draggable={false}
                    />
                }

            </div>
        </Tile>
    );
}