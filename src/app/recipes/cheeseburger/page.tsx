import { defaultMetadata } from "@/metadata";
import VStack from "@/components/pageStructure/stacks/VStack";
import { recipes } from "@/content/recipes/recipes";
import Recipe from "@/components/categories/recipes/Recipe";
import Section from "@/components/pageStructure/Section";
import LargeBr from "@/components/pageElements/breaks/LargeBr";
import RecipeStep from "@/components/categories/recipes/RecipeStep";
import BonAppetitMessage from "@/components/categories/recipes/BonAppetitMessage";

export default function Cheeseburger() {
    return (
        <Recipe recipe={recipes.cheeseburger}>

            <Section headline="Cooking instructions">

                <VStack className="gap-4 mt-3">

                    <RecipeStep title="Slice onions">
                        Start by slicing the onion(s) into rings or half rings.
                        Do not slice them too thin. Use the image above as a reference.
                    </RecipeStep>

                    <RecipeStep title="Cook onions">
                        Add cooking oil to a pan and fry the onions until light brown spots appear.
                        Keep them juicy, so as not to overcook them.
                        Keep the prepared onions warm.
                    </RecipeStep>

                    <RecipeStep title="Wash lettuce leaves">
                        Next, wash and portion the lettuce leaves,
                        ensuring they match the approximate diameter of the burger buns.
                    </RecipeStep>

                    <RecipeStep title="Prepare cheese slices">
                        Take the cheese slices out of the fridge and protion them.
                    </RecipeStep>

                    <RecipeStep title="Form patties">
                        For the burger patties, take 100g of minced meat per patty,
                        mix it with salt and pepper evenly and shape it slightly larger than
                        the burger buns to account for shrinkage during cooking.<br />
                        At the end, season both sides of the raw patty with salt and pepper.
                    </RecipeStep>

                    <RecipeStep title="Prepare burger buns and preheat pan">
                        Have the burger buns and sauce ready.<br />
                        Preheat a pan with cooking oil for the burger patties at high temperature.
                        Start toasting the burger buns in a toaster or another pan.
                    </RecipeStep>

                    <RecipeStep title="Frying">
                        Once the pan is hot, cook the patties, turning them regularly
                        (about one minute per side) until a good crust forms on both sides.
                        Lower the heat and cook to your preferred level, be it medium rare or well-done.
                        Add a bit of butter to both sides of the patty and let it melt thoroughly.
                        <LargeBr />
                        As the patty nears completion, place 2 cheese slices on top of the patty to melt.
                        Feel free to turn the patty around to speed up the cheese melting process.
                    </RecipeStep>

                    <RecipeStep title="Burger assembly">
                        Simultaneously, assemble the burger by taking out the toasted buns,
                        allowing them to cool slightly (about 30 seconds).
                        Apply the following ingredients on both buns in order: preferred amount of burger sauce,
                        some fried onions and 1 lettuce leaf per bun.
                    </RecipeStep>

                    <RecipeStep title="Serve">
                        When everything is ready, place the patty with the melted cheese onto the burger and serve.
                    </RecipeStep>

                    <BonAppetitMessage>
                        Enjoy your delicious homemade burger!
                    </BonAppetitMessage>

                </VStack>

            </Section>

        </Recipe>
    );
}


export const metadata = {
    title: `bdav.dev – Cheeseburger Recipe`,
    description: "Cheeseburger recipe from David Berezowski.",
    ...defaultMetadata(["recipe", "Cheeseburger recipe", "Cheeseburger"])
}