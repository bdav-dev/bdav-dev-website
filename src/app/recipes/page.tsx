import RecipeLink from "@/components/links/RecipeLink";
import PageBody from "@/components/PageBody";
import Section from "@/components/pageElements/Section";
import { recipes } from "@/content/recipes";
import { defaultMetadata } from "../layout";

export default function Recipes() {
    return (
        <PageBody
            sitePath="/recipes/"
            category="Recipes"
        >
            <Section headline="Recipes">
                <div className="mt-2.5 flex flex-row flex-wrap gap-2.5 justify-center sm:justify-normal">
                    {
                        Object.values(recipes).map(
                            (recipe, index) => <RecipeLink recipe={recipe} key={index}/>
                        )
                    }
                </div>
            </Section>

        </PageBody>
    );
}

export const metadata = {
    title: `bdav.dev – Recipes`,
    description: "Recipes from David Berezowski",
    ...defaultMetadata(["Recipes", "Recipe"])
}