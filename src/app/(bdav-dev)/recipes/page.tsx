import RecipeLink from "@/components/link/content/RecipeLink";
import { defaultMetadata } from "@/metadata";
import Section from "@/components/document/Section";
import { recipes } from "@/content/recipes/recipes";

export default function RecipesPage() {
    return (
        <Section headline="Recipes">
            <div className="mt-2.5 flex flex-row flex-wrap gap-2.5 justify-center sm:justify-normal">
                {
                    Object.values(recipes).map(
                        (recipe, index) => <RecipeLink recipe={recipe} key={index}/>
                    )
                }
            </div>
        </Section>
    );
}

export const metadata = {
    title: `bdav.dev – Recipes`,
    description: "Recipes from David Berezowski.",
    ...defaultMetadata(["Recipes", "Recipe"])
}