import { StaticImageData } from "next/image"
import cheeseburgerImages from "./images/cheeseburgerImages";

export type Recipe = {
    title: string,
    path: string,

    badgeHoverText?: string | React.ReactNode,
    image: StaticImageData,

    customDropdownText?: string | React.ReactNode,

    ingredients: Ingredient[]
}



export type Ingredient = {
    name: string,
    pluralName?: string,
    unit: Unit,
    image: StaticImageData,
    customImagePadding?: string
} & (
        | { unit: "Gram" | "Piece"; amount: number }
        | { unit: "None"; amount: string }
    )

type Unit = "Gram" | "None" | "Piece";


type Recipes = {
    [key: string]: Recipe
}

export const recipes: Recipes = {
    cheeseburger: {
        title: "Cheeseburger",
        path: "/recipes/cheeseburger/",
        badgeHoverText: <span className="text-white">Cheeseburger</span>,
        image: cheeseburgerImages.cheeseburger,
        ingredients: [
            {
                name: "Burger Buns",
                unit: "Piece",
                amount: 1,
                image: cheeseburgerImages.buns
            },
            {
                name: "Ketchup",
                amount: "some",
                unit: "None",
                image: cheeseburgerImages.ketchup,
                customImagePadding: "p-4"
            },
            {
                name: "Onion",
                pluralName: "Onions",
                amount: 0.5,
                unit: "Piece",
                image: cheeseburgerImages.onion
            },
            {
                name: "Lettuce Leaf",
                pluralName: "Lettuce Leaves",
                amount: 2,
                unit: "Piece",
                image: cheeseburgerImages.lettuce
            },
            {
                name: "Cheese Slice",
                pluralName: "Cheese Slices",
                amount: 2,
                unit: "Piece",
                image: cheeseburgerImages.cheese
            },
            {
                name: "Minced Meat",
                amount: 100,
                unit: "Gram",
                image: cheeseburgerImages.mincedMeat
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
    none: (amount, name) => {
        return {
            amount: amount,
            name: name
        };
    },

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


class Fraction {
    whole: number;
    numerator: number
    denominator: number

    constructor(number: number) {
        this.numerator = number;
        this.denominator = 1;
        this.whole = 0;
        this.shorten();
    }

    private gcd(a: number, b: number) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    private shorten() {
        const commonDivisor = this.gcd(this.numerator, this.denominator);
        this.numerator /= commonDivisor;
        this.denominator /= commonDivisor;

        // normalize
        const sign = Math.sign(this.numerator);
        const absNumerator = Math.abs(this.numerator);
        const wholePart = Math.floor(absNumerator / this.denominator);

        this.whole += sign * wholePart;
        this.numerator = absNumerator % this.denominator;
    }

    toString() {
        if (this.whole === 0)
            return `${this.numerator}/${this.denominator}`

        else if (this.numerator === 0)
            return `${this.whole}`;

        else
            return `${this.whole} ${this.numerator}/${this.denominator}`
    }
}