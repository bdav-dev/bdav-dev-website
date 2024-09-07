import { useEffect, useState } from "react";
import NumberInputButton from "./NumberInputButton";

type NumberInputProps = {
    initial: number,
    min: number,
    max: number,
    onValueChanged: (value: number) => void
}

export default function NumberInput(props: NumberInputProps) {
    let [value, setValue] = useState(props.initial);

    useEffect(
        () => props.onValueChanged(value),
        [value]
    );

    function incrementValue() {
        setValue(current => {
            if (current >= props.max)
                return props.max;

            return current + 1;
        });
    }

    function decrementValue() {
        setValue(current => {
            if (current <= props.min)
                return props.min;

            return current - 1;
        });
    }

    return (
        <>
            <div className={`
                h-full w-20 rounded-md ml-3 text-xl
                bg-zinc-200 dark:bg-zinc-950 
                flex items-center justify-center
                border
                border-zinc-400 dark:border-zinc-800
                `}
            >
                {value}
            </div>

            <div className="flex flex-col w-10 h-full justify-between ml-0.5 mr-3 gap-0.5">
                <NumberInputButton onClick={incrementValue}>
                    <span className="font-bold text-sm">＋</span>
                </NumberInputButton>

                <NumberInputButton onClick={decrementValue}>
                    <span className="font-bold text-sm mb-1">‒</span>
                </NumberInputButton>
            </div>
        </>
    );
}