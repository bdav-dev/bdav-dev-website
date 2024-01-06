import PageBody from '@/components/pageLayout/PageBody';
import { Recipe } from '@/content/recipes/recipes';


type RecipeProps = {
    recipe: Recipe
    children?: React.ReactNode
}

export default function Recipe(props: RecipeProps) {
    return (
        <PageBody
            category="Recipes"
            sitePath={props.recipe.path}
        >
            {props.children}
        </PageBody>
    );
}