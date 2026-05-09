import RecipeLink from "@/components/link/content/RecipeLink";
import { Recipes } from "@/categories/recipes/content/recipes";
import { Metadata } from "next";
import Article from "@/components/layout/document/Article";
import Section from "@/components/layout/document/Section";
import { RecipeCategories, RecipeCategory } from "@/categories/recipes/content/recipeCategory";


export const metadata: Metadata = {
    title: `Recipes – bdav.dev`,
    description: "Recipes from David Berezowski."
}

export default function RecipesPage() {
    return (
        <Article headline={'Recipes'}>
            <div className={'flex flex-row flex-wrap justify-center sm:justify-normal gap-2.5 mt-2.5'}>
                {
                    Object.values(RecipeCategories)
                        .map((category, index) => <RecipeCategorySection category={category} key={index}/>)
                }
            </div>
        </Article>
    );
}

function RecipeCategorySection(props: { category: RecipeCategory }) {
    return (
        <Section headline={props.category.pluralLabel} className={'mb-2'}>
            <div className={"mt-0.5 flex flex-row flex-wrap gap-2.5"}>
                {
                    Object.values(Recipes)
                        .filter(recipe => recipe.category.id === props.category.id)
                        .map((recipe, index) => <RecipeLink recipe={recipe} key={index}/>)
                }
            </div>
        </Section>
    );
}
