'use client';

import SkeletonLoader from "@/components/library/utility/SkeletonLoader";
import { CloudinaryImage as CloudinaryImageType } from "@/library/cloudinary";
import CloudinaryImage, { CloudinaryImageProps } from "@/components/image/CloudinaryImage";
import useTheme from "@/hooks/UseTheme";
import { CSSProperties } from "react";
import { ThemeSwitch } from "@/library/theme";

export type CloudinaryImageWithSkeletonProps = Omit<CloudinaryImageProps, 'image' | 'className' | 'style' | 'onLoad' | 'width'> & {
    image: undefined | ThemeSwitch<CloudinaryImageType>,
    sharedClassName?: string,
    imageClassName?: string,
    skeletonClassName?: string,
    imageStyle?: CSSProperties
} & ({ width?: undefined, propagateWidthToSkeleton?: never } | { width: number, propagateWidthToSkeleton?: boolean });

export default function SkeletonLoadingCloudinaryImage(
    { image: imageSwitch, propagateWidthToSkeleton, sharedClassName, imageClassName, skeletonClassName, imageStyle, ...imageProps }: CloudinaryImageWithSkeletonProps
) {
    const { resolveThemeSwitch } = useTheme();

    const image = resolveThemeSwitch(imageSwitch);
    const skeletonStyle: CSSProperties = {
        aspectRatio: image && `${image.width} / ${image.height}`,
        width: imageProps.width && propagateWidthToSkeleton ? `${imageProps.width}px` : undefined
    };

    return (
        <SkeletonLoader
            key={image && image.src}
            skeleton={<div className={`skeleton ${sharedClassName} ${skeletonClassName}`} style={skeletonStyle}/>}
            component={
                image && (
                    context =>
                        <CloudinaryImage
                            image={image}
                            style={context.isLoaded ? imageStyle : context.style}
                            className={`${sharedClassName} ${imageClassName}`}
                            onLoad={context.setLoaded}
                            {...imageProps}
                        />
                )
            }
        />
    );
}
