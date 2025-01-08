import Image from "next/image";
import { useEffect, useRef } from "react";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";

import '@/styles/abstract3d-dialog.css'

type Abstract3DDialogProps = {
    abstract3D: Abstract3D;
    isVisible: boolean;
    onCloseRequest: () => void;
}

export default function Abstract3DDialog(props: Abstract3DDialogProps) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (props.isVisible) {
            dialog.current?.showModal();
        } else {
            dialog.current?.close();
        }
    }, [props.isVisible]);

    return (
        <dialog ref={dialog} onClick={props.onCloseRequest} className={'abstract3d-dialog'}>
            <Image
                src={props.abstract3D.image}
                alt={`Abstract3DSeries #${props.abstract3D.nr}`}
                className={`
                    w-[95vw] h-[95vh]
                    object-contain
                    select-none
                `}
                quality={100}
                loading={'eager'}
                draggable={false}
            />
        </dialog>
    );
}
