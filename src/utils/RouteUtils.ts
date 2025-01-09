import { CodeProject } from "@/content/code/codeProjects";
import { Recipe } from "@/content/recipes/recipes";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DCollection } from "@/content/3d/a3ds/abstract3dCollections";


export class Route {
    public static readonly home = '/';

    public static readonly code = '/code';
    public static readonly blender = '/3d';
    public static readonly recipes = '/recipes';
    public static readonly about = '/about';

    public static readonly privacyPolicy = '/datenschutzerklaerung';
    public static readonly legalNotice = '/impressum';

    public static readonly abstract3dSeries = '/3d/abstract-3d-series';
    public static readonly abstract3dCollections = '/3d/abstract-3d-series/collections';

    public static readonly codeProject = (codeProject: CodeProject) => buildRoute(
        Route.code, codeProject.routeSegment
    );
    public static readonly recipe = (recipe: Recipe) => buildRoute(
        Route.recipes, recipe.routeSegment
    );
    public static readonly abstract3d = (abstract3d: Abstract3D) => buildRoute(
        Route.abstract3dSeries, abstract3d.nr.toString()
    );
    public static readonly abstract3dCollection = (collection: Abstract3DCollection) => buildRoute(
        Route.abstract3dSeries, 'collections', collection.routeSegment
    );
    public static readonly abstract3dInCollection = (collection: Abstract3DCollection, abstract3d: Abstract3D) => buildRoute(
        Route.abstract3dCollection(collection), abstract3d.nr.toString()
    );
}

function buildRoute(...segments: string[]) {
    let route = segments.join('/');
    if (!route.startsWith('/')) {
        route = '/' + route;
    }

    return route;
}
