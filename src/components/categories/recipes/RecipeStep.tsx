import Tile from "@/components/Tile";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Switch from "@/components/util/Switch";

type RecipeStepProps = {
    title: string,
    image?: StaticImageData,
    children?: React.ReactNode,
    imageStart?: boolean
}

export default function RecipeStep(props: RecipeStepProps) {
    const isPortrait = props.image
        ? (props.image.width / props.image.height) < 1
        : undefined;

    return (
        <Tile title={props.title}>
            <div className="flex flex-col md:flex-row">
                <Switch
                    switch={props.imageStart}
                    first={<div className={'flex-1'}>{props.children}</div>}
                    second={
                        props.image &&
                        <Image
                            src={props.image}
                            alt={props.title}
                            className={`
                                ${isPortrait ? "h-80" : "w-80"}
                                p-2.5
                                mx-auto
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
                />
            </div>
        </Tile>
    );
}
