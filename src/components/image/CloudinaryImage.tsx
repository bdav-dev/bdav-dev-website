import { CloudinaryImage as CloudinaryImageType, createCloudinaryLoaderWithMaxWidth } from "@/library/cloudinary";
import Image, { ImageProps } from "next/image";


export type CloudinaryImageProps = Omit<ImageProps, 'loader' | 'src' | 'width' | 'height' | 'placeholder'> & {
    image: CloudinaryImageType,
    width?: number
};

export default function CloudinaryImage({ image, width, ...rest }: CloudinaryImageProps) {
    return (
        <Image
            loader={createCloudinaryLoaderWithMaxWidth(image.width)}
            src={image.src}
            width={width ?? image.width}
            height={width ? deriveHeight(image, width) : image.height}
            placeholder={'empty'}
            {...rest}
        />
    );
}

function deriveHeight(image: CloudinaryImageType, width: number) {
    return (image.height / image.width) * width;
}
