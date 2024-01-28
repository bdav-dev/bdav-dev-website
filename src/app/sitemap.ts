import { abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";
import { codeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import { MetadataRoute } from "next";

type SitemapEntry = {
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
};


export default function sitemap(): MetadataRoute.Sitemap {

    const codeProjectEntries: SitemapEntry[] = Object.values(codeProjects).map(
        codeProject => (
            {
                url: 'https://www.bdav.dev' + codeProject.path,
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.8
            }
        )
    );

    const a3dsImagesEntries: SitemapEntry[] = Object.values(abstract3dSeriesImages).map(
        a3dsImage => (
            {
                url: 'https://www.bdav.dev/3d/abstract-3d-image/' + a3dsImage.nr,
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );

    const recipesEntries: SitemapEntry[] = Object.values(recipes).map(
        recipe => (
            {
                url: 'https://www.bdav.dev' + recipe.path,
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
        ...a3dsImagesEntries,
        ...recipesEntries
    ];
}