import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import CloudinaryImage, { CloudinaryImageProps } from "@/components/CloudinaryImage";


type Abstract3dImageThumbnailProps = {
    image: Abstract3dImage,
    small?: boolean
} & Omit<CloudinaryImageProps, 'image' | 'width' | 'quality' | 'draggable'>

export const getThumbnailSizeInPixels = (small: boolean) => small ? 136 : 225;

export default function Abstract3dImageThumbnail({ image, small, ...rest }: Abstract3dImageThumbnailProps) {
    return (
        <CloudinaryImage
            image={image.image}
            width={getThumbnailSizeInPixels(small ?? false)}
            quality={20}
            draggable={false}
            {...rest}
        />
    );
}
