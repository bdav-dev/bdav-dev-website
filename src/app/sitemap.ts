import { Abstract3DSeries } from "@/content/3d/a3ds/abstract3dSeries";
import { CodeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import { MetadataRoute } from "next";
import { Route } from "@/utils/RouteUtils";

type SitemapEntry = {
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
};


export default function sitemap(): MetadataRoute.Sitemap {

    const codeProjectEntries: SitemapEntry[] = Object.values(CodeProjects).map(
        codeProject => (
            {
                url: 'https://www.bdav.dev' + Route.codeProject(codeProject),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.8
            }
        )
    );

    const abstract3DEntries: SitemapEntry[] = Object.values(Abstract3DSeries).map(
        a3d => (
            {
                url: 'https://www.bdav.dev/3d/abstract-3d-image/' + a3d.nr,
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );

    const recipesEntries: SitemapEntry[] = Object.values(recipes).map(
        recipe => (
            {
                url: 'https://www.bdav.dev' + Route.recipe(recipe),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );


    return [
        {
            url: 'https://www.bdav.dev',
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },

        {
            url: 'https://www.bdav.dev/code',
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: 'https://www.bdav.dev/3d',
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        {
            url: 'https://www.bdav.dev/3d/abstract-3d-series/',
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        {
            url: 'https://www.bdav.dev/recipes',
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: 'https://www.bdav.dev/about',
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        ...codeProjectEntries,
        ...abstract3DEntries,
        ...recipesEntries
    ];
}