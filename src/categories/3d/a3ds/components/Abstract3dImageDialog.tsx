import { useEffect, useRef } from "react";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import CloudinaryImage from "@/components/image/CloudinaryImage";


type Abstract3dImageDialogProps = {
    image: Abstract3dImage,
    isOpen: boolean,
    onCloseRequest: () => void
}

export default function Abstract3dImageDialog(props: Abstract3dImageDialogProps) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(
        () => {
            if (props.isOpen) {
                dialog.current?.showModal();
            } else {
                dialog.current?.close();
            }
        },
        [props.isOpen]
    );

    return (
        <dialog ref={dialog} onClick={props.onCloseRequest} onClose={props.onCloseRequest} className={'abstract3d-image-dialog'}>
            <CloudinaryImage
                image={props.image.image}
                alt={`Abstract3DSeries #${props.image.nr}`}
                quality={95}
                loading={'eager'}
                className={`
                    mx-auto
                    w-[95vw] h-[95vh]
                    object-contain
                    select-none
                `}
                draggable={false}
            />
        </dialog>
    );
}
