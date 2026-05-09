import { RecipeCategory } from "@/categories/recipes/content/recipeCategory";


type RecipeCategoryTagProps = {
    category: RecipeCategory
}

export default function RecipeCategoryTag(props: RecipeCategoryTagProps) {
    return (
        <span
            className={'border rounded-full px-1.5'}
            style={
                {
                    backgroundColor: `color-mix(in srgb, ${props.category.color} 50%, transparent 50%)`,
                    borderColor: props.category.color
                }
            }
        >
            {props.category.label}
        </span>
    );
}
