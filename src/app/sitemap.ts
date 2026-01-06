import { MetadataRoute } from "next";
import { Route } from "@/utils/RouteUtils";

const bdavDev = 'https://www.bdav.dev'

export default function sitemap(): MetadataRoute.Sitemap {
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
        }
    ];
}
