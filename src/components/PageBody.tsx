import PathBar from "./PathBar";
import ThemeApplier from "@/components/theme/ThemeApplier";
import Header, { Categories } from "./header/Header";

type PageBodyProps = {
    category?: Categories
    sitePath: string,
    children?: React.ReactNode,
    hidePathBar?: boolean
};

export default function PageBody(props: PageBodyProps) {

    return (
        <ThemeApplier>
            <Header selected={props.category} />
            {
                !props.hidePathBar ? <PathBar path={props.sitePath} /> : <></>
            }
            
            <main className="m-4 flex flex-col">
                {props.children}
            </main>
        </ThemeApplier>
    );

}