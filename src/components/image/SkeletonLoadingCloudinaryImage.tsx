'use client';

import { CloudinaryImage as CloudinaryImageType } from "@/library/cloudinary";
import CloudinaryImage, { CloudinaryImageProps } from "@/components/image/CloudinaryImage";
import useTheme from "@/hooks/UseTheme";
import { ThemeSwitch } from "@/library/theme";
import { CSSProperties, useState } from "react";


export type CloudinaryImageWithSkeletonProps = Omit<CloudinaryImageProps, 'image'> & {
    image: ThemeSwitch<CloudinaryImageType>,
    skeletonClassName?: string,
    loadedClassName?: string,
    skeletonStyle?: CSSProperties,
    loadedStyle?: CSSProperties
};

export default function SkeletonLoadingCloudinaryImage(
    { image, onLoad, className, skeletonClassName, loadedClassName, style, skeletonStyle, loadedStyle, ...rest }: CloudinaryImageWithSkeletonProps
) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { resolveThemeSwitch } = useTheme();

    return (
        <CloudinaryImage
            image={resolveThemeSwitch(image)}
            className={`
                ${className}
                ${isLoaded ? loadedClassName : `animate-pulse bg-zinc-300 dark:bg-zinc-700 text-transparent ${skeletonClassName}`}
            `}
            onLoad={
                event => {
                    setIsLoaded(true);
                    if (onLoad) {
                        onLoad(event);
                    }
                }
            }
            style={isLoaded ? { ...style, ...loadedStyle } : { ...style, ...skeletonStyle }}
            {...rest}
        />
    );
}
