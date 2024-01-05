import PathBar from "./PathBar";
import ThemeApplier from "@/components/theme/ThemeApplier";
import Header, { Categories } from "./header/Header";
import Footer from "./base/Footer";

type PageBodyProps = {
    category?: Categories
    sitePath: string,
    children?: React.ReactNode,
    hidePathBar?: boolean
};

export default function PageBody(props: PageBodyProps) {

    return (
        <ThemeApplier>

            <div className="flex flex-col min-h-screen">

                <div className="flex-1">
                    <Header selected={props.category} />

                    {!props.hidePathBar ? <PathBar path={props.sitePath} /> : <></>}

                    <main className="mx-4 mt-4 flex flex-col">
                        {props.children}
                    </main>
                </div>

                <Footer />
                
            </div>

        </ThemeApplier>
    );

}