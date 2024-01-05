import { StaticImageData } from "next/image"
import cheeseburger from '@/../public/recipes/cheeseburger/burger-q85.webp'
import buns from '@/../public/recipes/cheeseburger/ingredients/buns-q85.webp'
import cheese from '@/../public/recipes/cheeseburger/ingredients/cheese-q85.webp'
import ketchup from '@/../public/recipes/cheeseburger/ingredients/ketchup-q75.webp'
import mincedMeat from '@/../public/recipes/cheeseburger/ingredients/minced-meat-q50.webp'
import onion from '@/../public/recipes/cheeseburger/ingredients/onion-q75.webp'
import salad from '@/../public/recipes/cheeseburger/ingredients/salad-q75.webp'

export type Recipe = {
    title: string | React.ReactNode,
    path: string,

    badgeHoverText?: string | React.ReactNode,
    image: StaticImageData,

    customDropdownText?: string | React.ReactNode,

    ingredients: Ingredient[]
}



export type Ingredient = {
    name: string;
    pluralName?: string;
    unit: Unit;
    image: StaticImageData;
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
        image: cheeseburger,
        ingredients: [
            {
                name: "Burger Buns",
                unit: "Piece",
                amount: 1,
                image: buns
            },
            {
                name: "Ketchup",
                amount: "some",
                unit: "None",
                image: ketchup
            },
            {
                name: "Onion",
                pluralName: "Onions",
                amount: 0.5,
                unit: "Piece",
                image: onion
            },
            {
                name: "Lettuce Leaf",
                pluralName: "Lettuce Leaves",
                amount: 2,
                unit: "Piece",
                image: salad
            },
            {
                name: "Cheese Slice",
                pluralName: "Cheese Slices",
                amount: 2,
                unit: "Piece",
                image: cheese
            },
            {
                name: "Minced Meat",
                amount: 100,
                unit: "Gram",
                image: mincedMeat
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