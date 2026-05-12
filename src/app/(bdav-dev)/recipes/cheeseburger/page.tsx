import { Recipes } from "@/categories/recipes/content/recipes";
import RecipeLayout from "@/categories/recipes/components/layout/RecipeLayout";
import Section from "@/components/layout/document/Section";
import LargeBreak from "@/components/library/spacing/LargeBreak";
import EnjoyYourMealMessage from "@/categories/recipes/components/EnjoyYourMealMessage";
import { Metadata } from "next";
import ReadingLayout from "@/layout/ReadingLayout";
import Tile from "@/components/library/Tile";


export const metadata: Metadata = {
    title: `${Recipes.Cheeseburger.title} – bdav.dev`,
    description: "Cheeseburger recipe from David Berezowski."
}

export default function CheeseburgerPage() {
    return (
        <RecipeLayout recipe={Recipes.Cheeseburger}>
            <ReadingLayout>
                <Section headline="Cooking instructions">
                    <div className={'flex flex-col gap-5'}>
                        <Tile title={'Slice onions'}>
                            Start by slicing the onion(s) into rings or half rings.
                            Do not slice them too thin. Use the image above as a reference.
                        </Tile>

                        <Tile title={'Cook onions'}>
                            Add cooking oil to a pan and fry the onions until light brown spots appear.
                            Keep them juicy, so as not to overcook them.
                            Keep the prepared onions warm.
                        </Tile>

                        <Tile title={'Wash lettuce leaves'}>
                            Next, wash and portion the lettuce leaves,
                            ensuring they match the approximate diameter of the burger buns.
                        </Tile>

                        <Tile title={'Prepare cheese slices'}>
                            Take the cheese slices out of the fridge and portion them.
                        </Tile>

                        <Tile title={'Form patties'}>
                            For the burger patties, take 100g of minced meat per patty,
                            mix it with salt and pepper evenly and shape it slightly larger than
                            the burger buns to account for shrinkage during cooking.<br/>
                            At the end, season both sides of the raw patty with salt and pepper.
                        </Tile>

                        <Tile title={'Prepare burger buns and preheat pan'}>
                            Have the burger buns and sauce ready.<br/>
                            Preheat a pan with cooking oil for the burger patties at high temperature.
                            Start toasting the burger buns in a toaster or another pan.
                        </Tile>

                        <Tile title={'Frying'}>
                            Once the pan is hot, cook the patties, turning them regularly
                            (about one minute per side) until a good crust forms on both sides.
                            Lower the heat and cook to your preferred level, be it medium rare or well-done.
                            Add a bit of butter to both sides of the patty and let it melt thoroughly.
                            <LargeBreak/>
                            As the patty nears completion, place 2 cheese slices on top of the patty to melt.
                            Feel free to turn the patty around to speed up the cheese melting process.
                        </Tile>

                        <Tile title={'Burger assembly'}>
                            Simultaneously, assemble the burger by taking out the toasted buns,
                            allowing them to cool slightly (about 30 seconds).
                            Apply the following ingredients on both buns in order: preferred amount of burger sauce,
                            some fried onions and 1 lettuce leaf per bun.
                        </Tile>

                        <Tile title={'Serve'}>
                            When everything is ready, place the patty with the melted cheese onto the burger and serve.
                        </Tile>

                        <EnjoyYourMealMessage>
                            Enjoy your delicious homemade burger!
                        </EnjoyYourMealMessage>
                    </div>
                </Section>
            </ReadingLayout>
        </RecipeLayout>
    );
}
