import { defaultMetadata } from "@/metadata";
import HStack from "@/components/pageStructure/stacks/HStack";
import VStack from "@/components/pageStructure/stacks/VStack";
import PageTitle from "@/components/pageStructure/headlines/PageTitle";;
import Image from "next/image";
import { recipes } from "@/content/recipes/recipes";
import Recipe from "@/components/categories/recipes/Recipe";
import IngredientList from "@/components/categories/recipes/IngredientList";
import Section from "@/components/pageStructure/Section";
import Tile from "@/components/pageElements/Tile";
import LargeBr from "@/components/pageElements/breaks/LargeBr";
import Highlight from "@/components/pageElements/Highlight";


export default function Cheeseburger() {
    const recipe = recipes.cheeseburger;

    return (
        <Recipe recipe={recipes.cheeseburger}>

            <div className="flex flex-col lg:flex-row gap-5 mb-8 lg:mb-20">

                <Image
                    src={recipe.image}
                    alt={`Abstract3DSeries`}
                    className={`
                        w-full self-center max-w-xl
                        sm:w-2/3 sm:min-w-0
                        md:w-[60%]
                        lg:w-1/2 lg:self-auto lg:max-w-3xl 3xl:max-w-[55rem]
                        flex-shrink-0
                        object-contain
                        drop-shadow-lg
                        select-none
                    `}
                    quality={100}
                    placeholder="empty"
                    draggable={false}
                />

                <div className="flex-grow">
                    <PageTitle>Cheeseburger</PageTitle>
                    <IngredientList recipe={recipe} />
                </div>

            </div>
            
            <Section headline="Recommendations">

                <HStack className="mt-3">

                    <Tile title="Burger Buns">
                        use <Highlight>brioche</Highlight> burger buns
                    </Tile>

                    <Tile title="Cheese">
                        use <Highlight>Appenzeller</Highlight> cheese slices
                    </Tile>

                    <Tile title="Lettuce">
                        use either <Highlight>romeo</Highlight> or <Highlight>iceberg</Highlight> lettuce
                    </Tile>

                </HStack>

            </Section>


            <Section headline="Cooking instructions">

                <VStack className="gap-4 mt-3">

                    <Tile title="Slice onions">
                        To prepare the cheeseburger, start by slicing the onion(s) into half rings. Make sure not to slice them too thin, use the image above as a reference. In a pan with cooking oil, fry the onions until light brown spots appear, ensuring they remain juicy without overcooking.
                        <br />
                        Keep the prepared onions warm.
                    </Tile>

                    <Tile title="Wash lettuce leaves">
                        Next, wash and portion the lettuce leaves, ensuring one leaf matches the approximate width of the burger bun.
                    </Tile>

                    <Tile title="Prepare cheese slices">
                        Take the cheese slices out of the fridge and have them ready.
                    </Tile>

                    <Tile title="Form patties">
                        For the burger patties, take 100g of minced meat per patty, mix it with salt and pepper evenly and shape it slightly larger than the bun to account for shrinkage during cooking.
                        <br />
                        At the end, season both sides of the raw patty with salt and pepper.
                    </Tile>

                    <Tile title="Prepare burger buns and preheat pan">
                        Ensure the burger buns and ketchup are readily available.
                        Preheat a pan with cooking oil for the burger patties at high temperature.
                        Start toasting the burger buns in a toaster or another pan.
                    </Tile>

                    <Tile title="Frying">
                        Once the pan is hot, cook the patties, turning them regularly (about one minute per side) until a good crust
                        forms on both sides. Lower the heat and cook to your preferred level, be it medium rare or well-done.
                        Add a bit of butter to both sides of the patty and let it melt thoroughly.
                        <LargeBr/>
                        As the patty nears completion, place 2 cheese slices on top of the patty to melt. Feel free to turn the patty around to speed up the cheese melting process.
                    </Tile>

                    <Tile title="Burger assembly">
                        Simultaneously, assemble the burger by taking out the toasted buns, allowing them to cool slightly (about 30 seconds). Apply the following ingredients on both buns in order: preferred amount of ketchup, some fried onions and 1 lettuce leaf per bun.
                    </Tile>

                    <Tile title="Serve">
                        When everything is ready, place the patty with the melted cheese onto the burger and serve.
                    </Tile>

                    <Tile className="text-center font-semibold">
                        Enjoy your delicious homemade burger! <span className="italic">Guten&nbsp;Appetit!</span>
                    </Tile>

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