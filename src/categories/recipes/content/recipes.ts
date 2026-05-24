import { CloudinaryImage } from "@/cloudinary";
import Fraction from "@/fraction";
import { RecipeCategories, RecipeCategory } from "@/categories/recipes/content/recipeCategory";


export type RecipeId = 'Cheeseburger';

export type Recipe = {
    id: RecipeId,
    routeSegment: string,
    title: string,
    tagline: string,
    category: RecipeCategory,
    image: CloudinaryImage,
    servings: number,
    ingredients: MeasuredIngredient[]
}

export type Ingredient = {
    name: string,
    pluralName?: string,
    productRecommendation?: string
    image: CloudinaryImage,
    displayOptions?: {
        size?: number
    }
}
export type MeasuredIngredient = Ingredient & Quantity
export type IngredientFromRecipe = { ingredient: MeasuredIngredient, forServings: number }

type Quantity =
    | { amount: number, unit: 'Gram' }
    | { amount: number, unit: 'Piece' }
    | { amount: string, unit: 'None' }

export const Recipes: Record<RecipeId, Recipe> = {
    Cheeseburger: {
        id: 'Cheeseburger',
        routeSegment: 'cheeseburger',
        title: 'Cheeseburger',
        tagline: 'A true American classic.',
        category: RecipeCategories.MainCourse,
        image: { src: '/recipes/cheeseburger/cheeseburger.png', width: 2057, height: 1440 },
        servings: 1,
        ingredients: [
            {
                name: "Brioche burger buns",
                amount: 1,
                unit: "Piece",
                image: { src: '/recipes/cheeseburger/ingredients/buns.png', width: 500, height: 500 },
                displayOptions: { size: 1.075 }
            },
            {
                name: "Burger sauce",
                amount: "some",
                unit: "None",
                productRecommendation: "Nawhal's Biggy Burger Sauce",
                image: { src: '/recipes/cheeseburger/ingredients/burger-sauce.png', width: 500, height: 500 },
                displayOptions: { size: 0.85 }
            },
            {
                name: "Large onion",
                pluralName: "Large onions",
                amount: 0.5,
                unit: "Piece",
                image: { src: '/recipes/cheeseburger/ingredients/onion.png', width: 500, height: 500 }
            },
            {
                name: "Iceberg lettuce leaf",
                pluralName: "Iceberg lettuce leaves",
                amount: 2,
                unit: "Piece",
                image: { src: '/recipes/cheeseburger/ingredients/lettuce.png', width: 500, height: 500 }
            },
            {
                name: "Appenzeller cheese slice",
                pluralName: "Appenzeller cheese slices",
                amount: 2,
                unit: "Piece",
                image: { src: '/recipes/cheeseburger/ingredients/cheese-appenzeller.png', width: 500, height: 500 }
            },
            {
                name: "Minced meat",
                amount: 100,
                unit: "Gram",
                image: { src: '/recipes/cheeseburger/ingredients/minced-meat.png', width: 500, height: 500 }
            }
        ]
    }
}

type FormattedIngredientAmount = {
    amount: string,
    name: string
}

export function toAppliedServings(ingredientFromRecipe: IngredientFromRecipe, servings: number): MeasuredIngredient {
    if (ingredientFromRecipe.ingredient.unit === 'None') {
        return { ...ingredientFromRecipe.ingredient };
    }

    return {
        ...ingredientFromRecipe.ingredient,
        amount: (ingredientFromRecipe.ingredient.amount / ingredientFromRecipe.forServings) * servings
    };
}

export function getFormattedIngredientAmount(ingredient: MeasuredIngredient) {
    switch (ingredient.unit) {
        case "Gram":
            return getFormattedIngredientAmountForGramUnit(ingredient);
        case "Piece":
            return getFormattedIngredientAmountForPieceUnit(ingredient);
        case "None":
            return getFormattedIngredientAmountForNoneUnit(ingredient);
    }
}

function getFormattedIngredientAmountForGramUnit(ingredient: MeasuredIngredient & { unit: 'Gram' }): FormattedIngredientAmount {
    const inKilograms = ingredient.amount >= 1000;
    const amount = inKilograms ? ingredient.amount / 1000 : ingredient.amount;

    return {
        name: ingredient.pluralName ?? ingredient.name,
        amount: `${amount} ${inKilograms ? "kg" : "g"}`
    };
}

function getFormattedIngredientAmountForPieceUnit(ingredient: MeasuredIngredient & { unit: 'Piece' }): FormattedIngredientAmount {
    const amount = new Fraction(ingredient.amount);

    return {
        name: amount.asDecimal() > 1 ? (ingredient.pluralName ?? ingredient.name) : ingredient.name,
        amount: amount.toString()
    };
}

function getFormattedIngredientAmountForNoneUnit(ingredient: MeasuredIngredient & { unit: "None" }): FormattedIngredientAmount {
    return {
        name: ingredient.name,
        amount: ingredient.amount
    };
}
