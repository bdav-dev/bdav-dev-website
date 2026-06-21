'use client';

import { CloudinaryImage as CloudinaryImageType } from "@/library/cloudinary";
import CloudinaryImage, { CloudinaryImageProps } from "@/components/image/CloudinaryImage";
import useTheme from "@/hooks/UseTheme";
import { ThemeSwitch } from "@/library/theme";
import { CSSProperties, useState } from "react";


export type CloudinaryImageWithSkeletonProps = Omit<CloudinaryImageProps, 'image' | 'className' | 'style'> & {
    image: ThemeSwitch<CloudinaryImageType>,
    sharedClassName?: string,
    skeletonClassName?: string,
    imageClassName?: string,
    sharedStyle?: CSSProperties,
    skeletonStyle?: CSSProperties,
    imageStyle?: CSSProperties
};

export default function SkeletonLoadingCloudinaryImage(
    { image, onLoad, sharedClassName, skeletonClassName, imageClassName, sharedStyle, skeletonStyle, imageStyle, ...rest }: CloudinaryImageWithSkeletonProps
) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { resolveThemeSwitch } = useTheme();

    return (
        <CloudinaryImage
            image={resolveThemeSwitch(image)}
            className={`
                ${sharedClassName}
                ${isLoaded ? imageClassName : `animate-pulse bg-zinc-300 dark:bg-zinc-700 text-transparent ${skeletonClassName}`}
            `}
            onLoad={
                event => {
                    setIsLoaded(true);
                    if (onLoad) {
                        onLoad(event);
                    }
                }
            }
            style={isLoaded ? { ...sharedStyle, ...imageStyle } : { ...sharedStyle, ...skeletonStyle }}
            {...rest}
        />
    );
}
