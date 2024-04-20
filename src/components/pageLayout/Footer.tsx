import HyperLink from "../links/HyperLink";

export default function Footer() {
    return (
        <footer className="flex flex-row mx-1.5 mb-1 text-zinc-500 dark:text-zinc-600">
            <div className="hidden sm:block">
                David Berezowski
            </div>

            <HyperLink
                noNewTab
                noMobileStyle
                noUnderline
                className="mr-auto sm:mr-2 sm:ml-auto"
                href="/datenschutzerklaerung/"
            >
                Datenschutzerklärung
            </HyperLink>

            <HyperLink
                noNewTab
                noMobileStyle
                noUnderline
                href="/impressum/"
            >
                Impressum
            </HyperLink>
        </footer>
    );
}