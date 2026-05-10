import React, { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";


type NumberPickerProps = {
    value: number,
    onValueChange: Dispatch<SetStateAction<number>>,
    min: number,
    max: number,
    className?: string
}

export default function NumberPicker(props: NumberPickerProps) {
    function increment() {
        if (props.value >= props.max) {
            return;
        }
        props.onValueChange(value => value + 1);
    }

    function decrement() {
        if (props.value <= props.min) {
            return;
        }
        props.onValueChange(value => value - 1);
    }

    return (
        <div className={`flex flex-row gap-1 ${props.className}`}>
            <div
                className={`
                    flex-1 w-16
                    flex items-center justify-center
                    rounded-md text-xl
                    bg-zinc-300 dark:bg-zinc-950 
                `}
            >
                {props.value}
            </div>

            <div className={"flex flex-col gap-1"}>
                <NumberPickerButton onClick={increment}>
                    <span className="font-bold text-sm">+</span>
                </NumberPickerButton>

                <NumberPickerButton onClick={decrement}>
                    <span className="font-bold text-sm">-</span>
                </NumberPickerButton>
            </div>
        </div>
    );
}

function NumberPickerButton(props: { onClick: MouseEventHandler<HTMLButtonElement>, children?: ReactNode }) {
    return (
        <button
            className={`
                flex-1 w-9
                flex items-center justify-center 
                rounded-md select-none
                bg-zinc-300 dark:bg-zinc-950
                hover:bg-zinc-400 hover:dark:bg-zinc-900
                active:bg-zinc-500 dark:active:bg-zinc-850
                transition-colors duration-[50ms]
            `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
