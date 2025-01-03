import HyperLink from "@/components/link/HyperLink";
import { Route } from "@/utils/RouteUtils";

export default function Footer() {
    return (
        <footer className="flex flex-row mx-1.5 mb-1 text-zinc-500 dark:text-zinc-600 items-end">
            <div className="hidden xs:block">
                David Berezowski
            </div>

            <HyperLink
                noNewTab
                noMobileStyle
                noUnderline
                className="mr-auto xs:mr-2 xs:ml-auto text-xs"
                href={Route.privacyPolicy}
            >
                Datenschutzerklärung
            </HyperLink>

            <HyperLink
                noNewTab
                noMobileStyle
                noUnderline
                className={'text-xs'}
                href={Route.legalNotice}
            >
                Impressum
            </HyperLink>
        </footer>
    );
}