import RecipeLink from "@/components/link/content/RecipeLink";
import Section from "@/components/layout/document/Section";
import { recipes } from "@/categories/recipes/recipes";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `bdav.dev – Recipes`,
    description: "Recipes from David Berezowski."
}

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

