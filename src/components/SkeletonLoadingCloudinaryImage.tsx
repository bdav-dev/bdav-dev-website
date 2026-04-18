'use client';

import SkeletonLoader from "@/components/SkeletonLoader";
import { CloudinaryImage as CloudinaryImageType } from "@/cloudinary";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import CloudinaryImage, { CloudinaryImageProps } from "@/components/CloudinaryImage";
import { useTheme } from "@/hooks/UseTheme";
import { CSSProperties } from "react";

type CloudinaryImageWithSkeletonProps = Omit<CloudinaryImageProps, 'image' | 'className' | 'style' | 'onLoad' | 'width'> & {
    image: ThemeSwitch<CloudinaryImageType>,
    sharedClassName?: string,
    imageClassName?: string,
    skeletonClassName?: string
} & ({ width?: undefined, propagateWidthToSkeleton?: never } | { width: number, propagateWidthToSkeleton?: boolean });

export default function SkeletonLoadingCloudinaryImage(
    { image: imageSwitch, propagateWidthToSkeleton, sharedClassName, imageClassName, skeletonClassName, ...imageProps }: CloudinaryImageWithSkeletonProps
) {
    const { resolveThemeSwitch } = useTheme();

    const image = resolveThemeSwitch(imageSwitch);
    const skeletonStyle: CSSProperties = {
        aspectRatio: `${image.width} / ${image.height}`,
        width: imageProps.width && propagateWidthToSkeleton ? `${imageProps.width}px` : undefined
    };

    return (
        <SkeletonLoader
            key={image.src}
            skeleton={<div className={`skeleton ${sharedClassName} ${skeletonClassName}`} style={skeletonStyle}/>}
            component={
                context =>
                    <CloudinaryImage
                        image={image}
                        style={context.style}
                        className={`${sharedClassName} ${imageClassName}`}
                        onLoad={context.setLoaded}
                        {...imageProps}
                    />
            }
        />
    );
}
