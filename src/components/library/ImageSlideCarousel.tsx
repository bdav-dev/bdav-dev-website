'use client';

import Image, { StaticImageData } from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";


type ImageSlideCarouselProps = {
    speed: number,
    images: StaticImageData[]
    gap: string,
    height: string
}

export default function ImageSlideCarousel(props: ImageSlideCarouselProps) {
    const track = useRef<HTMLDivElement>(null);
    const [renderImages, setRenderImages] = useState<StaticImageData[]>([]);

    useEffect(
        () => {
            const calculateCopies = () => {
                if (!track.current) return;

                const viewportWidth = window.innerWidth;
                const trackWidth = track.current.scrollWidth / 2;

                const copies = Math.ceil(viewportWidth / trackWidth) + 2;

                const arr: StaticImageData[] = [];
                for (let i = 0; i < copies; i++) {
                    arr.push(...props.images);
                }

                setRenderImages(arr);
            }

            calculateCopies();
            window.addEventListener("resize", calculateCopies);
            return () => window.removeEventListener("resize", calculateCopies);
        },
        [props.images]
    )


    return (
        <div className={'image-slide-carousel'}>
            <div className={'track'} style={{ "--gap": props.gap } as CSSProperties} ref={track}>
                {
                    renderImages.map(
                        (image, index) =>
                            <div className={"element"} key={index}>
                                <Image
                                    src={image}
                                    alt={""}
                                    className={'image select-none'}
                                    draggable={false}
                                />
                            </div>
                    )
                }
            </div>
        </div>
    );

}


/*
<div className={'slider absolute left-0 top-1/2 -translate-y-1/2'}>
                        <div className={'slide-track'}>
                            {
                                [...images, ...images].map(
                                    (image, index) => (
                                        <div className={"slide"} key={index}>
                                            <Image src={image} alt={""} className={'select-none'} draggable={false}/>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
 */