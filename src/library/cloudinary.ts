import { ImageLoader, ImageLoaderProps } from "next/image";


export type CloudinaryImage = {
    src: string,
    width: number,
    height: number
}

export function createCloudinaryLoaderWithMaxWidth(maxWidth: number): ImageLoader {
    return ({ src, width, quality }) => cloudinaryLoader({ src, width: Math.min(width, maxWidth), quality });
}

export function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
    const parameters = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
    return `https://res.cloudinary.com/bdav-dev/image/upload/${parameters.join(',')}${src}`;
}
