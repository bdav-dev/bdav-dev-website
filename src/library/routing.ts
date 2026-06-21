import { CodeProject } from "@/categories/code/content/codeProjects";
import { Recipe } from "@/categories/recipes/content/recipes";
import { Abstract3dCollection } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";


export const BdavDev = {
    getRoute: () => '/',
    code: {
        getRoute: () => '/code',
        $project: {
            getRoute: (parameters: { project: CodeProject }) => `/code/${parameters.project.routeSegment}`
        }
    },
    blender: {
        getRoute: () => '/3d',
        abstract3dSeries: {
            getRoute: () => '/3d/abstract-3d-series',
            $image: {
                getRoute: (parameters: { image: Abstract3dImage }) => `/3d/abstract-3d-series/${parameters.image.nr}`,
            },
            collections: {
                getRoute: () => '/3d/abstract-3d-series/collections',
                $collection: {
                    getRoute: (parameters: { collection: Abstract3dCollection }) => `/3d/abstract-3d-series/collections/${parameters.collection.routeSegment}`,
                    $image: {
                        getRoute: (parameters: { collection: Abstract3dCollection, image: Abstract3dImage }) =>
                            `/3d/abstract-3d-series/collections/${parameters.collection.routeSegment}/${parameters.image.nr}`,
                    }
                },
            }
        }
    },
    recipes: {
        getRoute: () => '/recipes',
        $recipe: {
            getRoute: (parameters: { recipe: Recipe }) => `/recipes/${parameters.recipe.routeSegment}`,
        }
    },
    privacyPolicy: {
        getRoute: () => '/privacy-policy',
    },
    legalNotice: {
        getRoute: () => '/legal-notice',
    }
} as const;

export function getBaseOfRoute(route: string) {
    return route.split("/").slice(0, 2).join("/");
}
