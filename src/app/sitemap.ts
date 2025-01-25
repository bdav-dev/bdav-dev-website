import { Abstract3DSeriesValues } from "@/content/3d/a3ds/abstract3dSeries";
import { CodeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import { MetadataRoute } from "next";
import { Route } from "@/utils/RouteUtils";
import { Abstract3DStaticCollections } from "@/content/3d/a3ds/abstract3dCollections";

type SitemapEntry = {
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
};

const bdavDev = 'https://www.bdav.dev'

export default function sitemap(): MetadataRoute.Sitemap {

    const codeProjectEntries: SitemapEntry[] = Object.values(CodeProjects).map(
        codeProject => (
            {
                url: bdavDev + Route.codeProject(codeProject),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.8
            }
        )
    );

    const abstract3DEntries: SitemapEntry[] = Abstract3DSeriesValues.map(
        abstract3D => (
            {
                url: bdavDev + Route.abstract3d(abstract3D),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );
    const abstract3DCollections: SitemapEntry[] = Object.values(Abstract3DStaticCollections).map(
        collection => (
            {
                url: bdavDev + Route.abstract3dCollection(collection),
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7
            }
        )
    );
    abstract3DCollections.push(
        {
            url: bdavDev + Route.abstract3dFavoritesCollection,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        }
    );

    const recipesEntries: SitemapEntry[] = Object.values(recipes).map(
        recipe => (
            {
                url: bdavDev + Route.recipe(recipe),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );


    return [
        {
            url: bdavDev,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },

        {
            url: bdavDev + Route.code,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: bdavDev + Route.blender,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        {
            url: bdavDev + Route.recipes,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: bdavDev + Route.about,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },

        {
            url: bdavDev + Route.abstract3dSeries,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        {
            url: bdavDev + Route.abstract3dCollections,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.75
        },


        ...codeProjectEntries,
        ...abstract3DEntries,
        ...abstract3DCollections,
        ...recipesEntries
    ];
}
