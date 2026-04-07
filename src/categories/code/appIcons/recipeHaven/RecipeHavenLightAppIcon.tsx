import { CSSProperties, useId } from "react";
import LightAppIconSvgGroup from "@/categories/code/appIcons/LightAppIconSvgGroup";

export default function RecipeHavenLightAppIcon(props: { className?: string, style?: CSSProperties }) {
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
            <LightAppIconSvgGroup/>
        </svg>
    );
}
