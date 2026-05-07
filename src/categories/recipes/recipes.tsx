import { CloudinaryImage } from "@/cloudinary";


export type RecipeId = 'Cheeseburger';

type RecipeCategory = 'Mains';

export type Recipe = {
    id: RecipeId,
    routeSegment: string,
    title: string,
    tagline: string,
    category: RecipeCategory,
    image: CloudinaryImage,
    servings: number,
    ingredients: Ingredient[]
}

export type Ingredient = {
    name: string,
    pluralName?: string,
    productRecommendation?: string
    image: CloudinaryImage
} & Quantity;

type Quantity =
    | { amount: number, unit: 'Gram' | 'Piece' }
    | { amount: string, unit: 'None' };

const placeholderImage: CloudinaryImage = { src: "", height: 0, width: 0 }

export const Recipes: Record<RecipeId, Recipe> = {
    Cheeseburger: {
        id: 'Cheeseburger',
        routeSegment: 'cheeseburger',
        title: 'Cheeseburger',
        tagline: 'A true American classic.',
        category: 'Mains',
        image: placeholderImage,
        servings: 1,
        ingredients: [
            {
                name: "Brioche burger buns with sesame seeds",
                unit: "Piece",
                amount: 1,
                image: placeholderImage
            },
            {
                name: "Burger sauce",
                amount: "some",
                unit: "None",
                productRecommendation: "Nawhal's Biggy Burger Sauce",
                image: placeholderImage
            },
            {
                name: "Large onion",
                pluralName: "Large onions",
                amount: 0.5,
                unit: "Piece",
                image: placeholderImage
            },
            {
                name: "Iceberg lettuce leaf",
                pluralName: "Iceberg lettuce leaves",
                amount: 2,
                unit: "Piece",
                image: placeholderImage
            },
            {
                name: "Cheddar cheese slice",
                pluralName: "Cheddar cheese slices",
                amount: 2,
                unit: "Piece",
                image: placeholderImage
            },
            {
                name: "Minced meat",
                amount: 100,
                unit: "Gram",
                image: placeholderImage
            }
        ]
    }
}

type IngredientString = {
    amount: string,
    name: string
}

export function ingredientAsString(ingredient: Ingredient, numberOfPortions: number) {
    let ingredientAsString: IngredientString;

    switch (ingredient.unit) {
        case "Piece":
            ingredientAsString = ingredientAsStringFunctions.piece(ingredient.amount * numberOfPortions, ingredient.name, ingredient.pluralName);
            break;
        case "Gram":
            ingredientAsString = ingredientAsStringFunctions.gram(ingredient.amount * numberOfPortions, ingredient.name, ingredient.pluralName);
            break;
        case "None":
            ingredientAsString = ingredientAsStringFunctions.none(ingredient.amount, ingredient.name);
            break;
    }

    return ingredientAsString;
}

const ingredientAsStringFunctions: {
    none: (amount: string, name: string) => IngredientString,
    gram: (amount: number, name: string, pluralName?: string) => IngredientString,
    piece: (amount: number, name: string, pluralName?: string) => IngredientString
} = {
    none: (amount, name) => ({
        amount: amount,
        name: name
    }),

    gram: (amount, name, pluralName?) => {
        let formattedAmount = amount;
        let kilograms = false;

        if (amount >= 1000) {
            formattedAmount /= 1000;
            kilograms = true;
        }

        return {
            name: pluralName ?? name,
            amount: `${formattedAmount} ${kilograms ? "kg" : "g"}`
        };
    },

    piece: (amount, name, pluralName?) => {
        const amountAsFraction = new Fraction(amount);
        let plural = false;

        if (amountAsFraction.whole > 1 ||
            amountAsFraction.whole == 1 && amountAsFraction.numerator != 0) {
            plural = true;
        }

        return {
            amount: amountAsFraction.toString(),
            name: plural ? (pluralName ?? name) : name
        };
    }
}


