import { Recipes } from "@/categories/recipes/content/recipes";
import RecipeLayout from "@/categories/recipes/components/layout/RecipeLayout";
import Section from "@/components/library/document/Section";
import { Metadata } from "next";
import Tile from "@/components/library/Tile";
import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import { CloudinaryImage } from "@/utilities/cloudinary";
import { ThemeSwitch } from "@/lib/theme";


export const metadata: Metadata = {
    title: `${Recipes.Cheeseburger.title} – bdav.dev`,
    description: "Cheeseburger recipe from David Berezowski."
}

export default function CheeseburgerPage() {
    return (
        <RecipeLayout recipe={Recipes.Cheeseburger}>
            <Section headline="Cooking instructions">
                <div className={'flex flex-col gap-gutter mt-1.5'}>
                    <Tile title={'1.'}>
                        <p>
                            Start by peeling the onion(s) and slicing them into half-rings.
                            Do not slice them too thinly. Use the recipe image as a reference.
                        </p>
                        <p>
                            Add cooking oil to a pan and fry the onions until light brown spots appear.
                            Keep them juicy and avoid overcooking them.
                        </p>
                        <p>
                            Keep the prepared onions warm.
                        </p>
                    </Tile>

                    <Tile title={'2.'}>
                        Next, wash and portion the lettuce leaves, ensuring they are approximately the same size as the burger buns.
                    </Tile>

                    <Tile title={'3.'}>
                        Take the cheese slices out of the fridge and portion them.
                    </Tile>

                    <Tile title={'4.'}>
                        <p>
                            For the burger patties, use 100 grams of minced meat per patty.
                            Mix the meat evenly with salt and pepper, then shape the patties slightly larger than the burger buns to account for shrinkage during cooking.
                        </p>
                        <p>
                            Finally, season both sides of each raw patty with salt and pepper.
                        </p>
                    </Tile>

                    <Tile title={'5.'}>
                        <p>
                            Have the burger buns and sauce ready.
                        </p>
                        <p>
                            Preheat a pan with cooking oil over high heat for the burger patties.
                            Start toasting the burger buns in a grill pan or toaster.
                        </p>
                    </Tile>

                    <Tile title={'6.'}>
                        <p>
                            Once the pan is hot, cook the patties, turning them regularly (about one minute per side) until a good crust forms on both sides.
                            Lower the heat and continue cooking to your preferred level of doneness, whether medium-rare or well-done.
                            Add a small amount of butter to both sides of the patty and allow it to melt completely.
                        </p>
                        <p>
                            As the patty nears completion, place two cheese slices on top and allow them to melt.
                        </p>
                    </Tile>

                    <Tile title={'7.'}>
                        At the same time, assemble the burger by removing the toasted buns and allowing them to cool slightly (about 30 seconds).
                        Apply the following ingredients on both buns in this order: your preferred amount of burger sauce, some fried onions and one lettuce leaf.
                    </Tile>

                    <Tile title={'8.'}>
                        When everything is ready, assemble the burger by placing the patty with the melted cheese between the prepared buns, then serve immediately.
                    </Tile>

                    <Tile className={'text-center font-semibold'}>
                        Enjoy your delicious homemade burger!
                    </Tile>

                    <SkeletonLoadingCloudinaryImage
                        alt={'Cheeseburger exploded view'}
                        image={images.cheeseburgerExplodedView}
                        sharedClassName={'w-full rounded-tile'}
                        draggable={false}
                    />
                </div>
            </Section>
        </RecipeLayout>
    );
}

const images = {
    cheeseburgerExplodedView: { src: '/recipes/cheeseburger/cheeseburger-exploded-view.png', width: 2560, height: 1087 },
} as const satisfies Record<string, ThemeSwitch<CloudinaryImage>>;
