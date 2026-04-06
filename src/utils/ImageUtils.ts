




import { StaticImageData } from "next/image";

export function toRemovedBlurDimensions(image: StaticImageData) {
    const imageCopy = { ...image };
    delete imageCopy.blurWidth;
    delete imageCopy.blurHeight;

    return {
        src: image,
        width: image.width,
        height: image.height
    };
}