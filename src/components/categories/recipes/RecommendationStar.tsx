import StarIcon from "@/icons/StarIcon"

type RecommendationStarProps = {
    content: React.ReactNode
}

export default function RecommendationStar(props: RecommendationStarProps) {


    return (
        <div className={`
            w-8 h-8
            pt-[0.0625rem]
            absolute right-0
            flex items-center justify-center
            text-white
            dark:bg-yellow-700 dark:hover:bg-yellow-600
            bg-yellow-600 hover:bg-yellow-700
            transition-color
            rounded-sm rounded-bl-md rounded-tr-[0.93rem]
            select-none
            group
        `}>
            <StarIcon className="fill-white w-6 h-6" />

            <div className={`
                    w-64
                    pb-10
                    absolute -right-4 bottom-0
                    dark:text-white text-neutral-900
                    invisible group-hover:visible
                    pointer-events-auto 
                    opacity-25 scale-[0.97]
                    group-hover:opacity-100 group-hover:scale-100
                    transition-all
                `}
            >
                <div className={`
                        relative
                        p-1.5
                        rounded-2xl
                        border
                        bg-zinc-200 dark:bg-zinc-800
                        border-zinc-400 dark:border-zinc-700
                        group-hover:pointer-events-auto text-base
                    `}
                >
                    <div className={`
                            w-full
                            mb-0.5
                            p-0.5
                            text-sm
                            text-white
                            bg-zinc-700 dark:bg-zinc-950
                            font-semibold
                            rounded-full
                            flex justify-center items-center gap-0.5
                        `}
                    >
                        <StarIcon className="w-4 h-4 fill-white pt-[0.0625rem]" /> Product recommendation
                    </div>

                    <div className="select-text my-1 text-center">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    );
}