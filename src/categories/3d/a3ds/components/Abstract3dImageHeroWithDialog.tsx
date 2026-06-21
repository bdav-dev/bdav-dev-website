'use client';

import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import Abstract3dImageDialog from "@/categories/3d/a3ds/components/Abstract3dImageDialog";
import { useState } from "react";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";


type Abstract3dImageHeroWithDialogProps = {
    image: Abstract3dImage
}

export default function Abstract3dImageHeroWithDialog(props: Abstract3dImageHeroWithDialogProps) {
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    return (
        <>
            <SkeletonLoadingCloudinaryImage
                preload
                image={props.image.image}
                alt={`Abstract3DSeries #${props.image.nr}`}
                className={`
                    w-full      xl:w-1/2
                    max-w-xl    xl:max-w-300 3xl:max-w-330
                    self-center xl:self-start
                    rounded-2xl
                `}
                loadedClassName={'cursor-pointer'}
                quality={95}
                draggable={false}
                onClick={() => setIsDialogVisible(true)}
            />

            <Abstract3dImageDialog
                image={props.image}
                isOpen={isDialogVisible}
                onCloseRequest={() => setIsDialogVisible(false)}
            />
        </>
    )
}




