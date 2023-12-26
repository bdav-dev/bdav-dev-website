import Header from "@/components/header/Header";
import Headline from "@/components/pageElements/headlines/Headline";
import PathBar from "@/components/PathBar";
import ThemeApplier from "@/components/theme/ThemeApplier";
import RecipeLink from "@/components/links/RecipeLink";
import test from "@/../public/dev/test.png"

export default function Recipes() {
    return (
        <ThemeApplier>
            <Header selected="Recipes"/>
            <PathBar path="/recipes/" />

            <div className="m-4">
                <Headline>
                    Recipes
                </Headline>

                <div className="flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                    <RecipeLink image={test}>
                        <span className="text-xl">Reis Wrap<br/>mit Civapcici</span>
                    </RecipeLink>
                </div>

            </div>

        </ThemeApplier>
    );
}