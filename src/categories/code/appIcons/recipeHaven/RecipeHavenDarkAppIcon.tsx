import { CSSProperties, useId } from "react";
import DarkAppIconSvgGroup from "@/categories/code/appIcons/DarkAppIconSvgGroup";

export default function RecipeHavenDarkAppIcon(props: { className?: string, style?: CSSProperties }) {
    const id = useId();

    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <DarkAppIconSvgGroup/>
        </svg>
    );
}
