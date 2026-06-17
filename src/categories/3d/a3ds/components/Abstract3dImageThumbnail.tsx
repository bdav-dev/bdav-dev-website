import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import SkeletonLoadingCloudinaryImage, { CloudinaryImageWithSkeletonProps } from "@/components/image/SkeletonLoadingCloudinaryImage";


type Abstract3dImageThumbnailProps = {
    image: Abstract3dImage,
    small?: boolean
} & Omit<CloudinaryImageWithSkeletonProps, 'image' | 'width' | 'propagateWidthToSkeleton' | 'quality' | 'draggable'>

export const getThumbnailSizeInPixels = (small: boolean) => small ? 136 : 225;

export default function Abstract3dImageThumbnail({ image, small, ...rest }: Abstract3dImageThumbnailProps) {
    return (
        <SkeletonLoadingCloudinaryImage
            image={image.image}
            width={getThumbnailSizeInPixels(small ?? false)}
            propagateWidthToSkeleton
            quality={50}
            draggable={false}
            {...rest}
        />
    );
}
