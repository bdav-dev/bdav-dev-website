import PathBar from "./PathBar";
import ThemeApplier from "@/components/theme/ThemeApplier";
import Header, { Categories } from "./header/Header";

type PageBodyProps = {
    category: Categories
    sitePath: string,
    children?: React.ReactNode
};

export default function PageBody(props: PageBodyProps) {

    return (
        <ThemeApplier>
            <Header selected={props.category} />
            <PathBar path={props.sitePath} />

            <main className="flex flex-col m-4">
                {props.children}
            </main>
        </ThemeApplier>
    );

}