import { MetadataRoute } from "next";
import { CodeProjects } from "@/categories/code/content/codeProjects";
import { Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { BdavDev } from "@/library/routing";
import { StaticAbstract3dCollections } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { Recipes } from "@/categories/recipes/content/recipes";


type SitemapEntry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
    const codeProjectEntries: SitemapEntry[] = Object.values(CodeProjects).map(
        project => (
            {
                url: createUrl(BdavDev.code.$project.getRoute({ project })),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.8
            }
        )
    );

    const abstract3dImageEntries: SitemapEntry[] = Object.values(Abstract3dSeries).map(
        image => (
            {
                url: createUrl(BdavDev.blender.abstract3dSeries.$image.getRoute({ image })),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );

    const abstract3dCollectionEntries: SitemapEntry[] = Object.values(StaticAbstract3dCollections).map(
        collection => (
            {
                url: createUrl(BdavDev.blender.abstract3dSeries.collections.$collection.getRoute({ collection })),
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7
            }
        )
    );
    abstract3dCollectionEntries.push(
        {
            url: createUrl(BdavDev.blender.abstract3dSeries.collections.getRoute() + "/favorites"),
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        }
    );

    const recipeEntries: SitemapEntry[] = Object.values(Recipes).map(
        recipe => (
            {
                url: createUrl(BdavDev.recipes.$recipe.getRoute({ recipe })),
                lastModified: new Date(),
                changeFrequency: "yearly",
                priority: 0.6
            }
        )
    );

    return [
        {
            url: createUrl(BdavDev.getRoute()),
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: createUrl(BdavDev.code.getRoute()),
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        ...codeProjectEntries,
        {
            url: createUrl(BdavDev.blender.getRoute()),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        {
            url: createUrl(BdavDev.blender.abstract3dSeries.getRoute()),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        ...abstract3dImageEntries,
        {
            url: createUrl(BdavDev.blender.abstract3dSeries.collections.getRoute()),
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.75
        },
        ...abstract3dCollectionEntries,
        {
            url: createUrl(BdavDev.recipes.getRoute()),
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        ...recipeEntries,
        {
            url: createUrl(BdavDev.legalNotice.getRoute()),
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.1
        },
        {
            url: createUrl(BdavDev.privacyPolicy.getRoute()),
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.1
        }
    ];
}

const createUrl = (route: string) => 'https://www.bdav.dev' + route;
