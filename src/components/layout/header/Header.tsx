import CubeIcon from "@/icons/app/CubeIcon";
import CodeIcon from "@/icons/app/CodeIcon";
import { CodeProjects } from "@/categories/code/content/codeProjects";
import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";
import VerticalRuler from "@/components/library/VerticalRuler";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { BdavDev, SocialMedia } from "@/utilities/routing";
import { Recipes } from "@/categories/recipes/content/recipes";
import ChefHatIcon from "@/icons/app/ChefHatIcon";
import InstagramGlyph from "@/icons/logo/InstagramGlyph";
import { SiteCategory } from "@/components/layout/header/SiteCategory";
import { BdavDevHomeLink } from "@/components/layout/header/BdavDevHomeLink";


export default function Header() {
    return (
        <nav className={'header'}>
            <BdavDevHomeLink/>

            <div className="flex flex-row xs:ml-auto justify-center items-center gap-1">
                <SiteCategory
                    icon={<CodeIcon weight={300} className={'text-[1.05em]'}/>}
                    label={'Code'}
                    href={BdavDev.code.getRoute()}
                    menu={
                        [
                            [
                                {
                                    href: SocialMedia.gitHub.bdavDev.href,
                                    icon: <GitHubInvertocat className={'text-[0.8em]'}/>,
                                    text: 'GitHub'
                                }
                            ],
                            Object.values(CodeProjects).map(
                                codeProject => (
                                    {
                                        href: BdavDev.code.$project.getRoute({ project: codeProject }),
                                        text: codeProject.title
                                    }
                                )
                            )
                        ]
                    }
                />

                <SiteCategory
                    icon={<CubeIcon weight={300} className={'text-[1.05em]'}/>}
                    label={'3D'}
                    href={BdavDev.blender.getRoute()}
                    menu={
                        [
                            [
                                {
                                    href: SocialMedia.instagram.davidb3d.href,
                                    icon: <InstagramGlyph className={'text-[0.8em]'}/>,
                                    text: 'Instagram'
                                }
                            ],
                            [
                                {
                                    href: BdavDev.blender.abstract3dSeries.getRoute(),
                                    text: 'Abstract3D Series'
                                }
                            ]
                        ]
                    }
                />

                <SiteCategory
                    icon={<ChefHatIcon weight={300} className={'text-[1.05em]'}/>}
                    label={'Recipes'}
                    href={BdavDev.recipes.getRoute()}
                    menu={
                        [
                            Object.values(Recipes).map(
                                recipe => (
                                    {
                                        href: BdavDev.recipes.$recipe.getRoute({ recipe }),
                                        text: recipe.title
                                    }
                                )
                            )
                        ]
                    }
                />

                <VerticalRuler className="mx-0.5 h-9"/>

                <ThemeToggle/>
            </div>
        </nav>
    );
}
