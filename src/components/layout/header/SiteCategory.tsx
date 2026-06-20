import { SiteCategoryDropdownMenu, SiteCategoryMenuItemProps } from "@/components/layout/header/SiteCategoryDropdownMenu";
import SiteCategoryLink, { SiteCategoryLinkProps } from "@/components/layout/header/SiteCategoryLink";


type SiteCategoryProps = SiteCategoryLinkProps & {
    menu?: SiteCategoryMenuItemProps[][]
};

export function SiteCategory({ menu, ...categoryLinkAnchorProps }: SiteCategoryProps) {
    return (
        <div className={'relative group h-10'}>
            <SiteCategoryLink {...categoryLinkAnchorProps} />
            {
                menu &&
                <div className={'absolute left-1/2 invisible group-hover:visible pointer-events-none'}>
                    <div className={'relative -left-1/2 pt-1 group-hover:pointer-events-auto'}>
                        <SiteCategoryDropdownMenu groups={menu}/>
                    </div>
                </div>
            }
        </div>
    );
}
