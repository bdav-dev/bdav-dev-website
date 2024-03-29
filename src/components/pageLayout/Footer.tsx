import HyperLink from "../links/HyperLink";

export default function Footer() {
    return (
        <footer className="flex flex-row mx-1.5 mb-1 text-zinc-500 dark:text-zinc-600">
            <div className="hidden sm:block">
                David Berezowski
            </div>

            <HyperLink className="mr-auto sm:mr-2 sm:ml-auto" href="/datenschutzerklaerung/" noNewTab noMobileStyle>
                Datenschutzerklärung
            </HyperLink>

            <HyperLink href="/impressum/" noNewTab noMobileStyle>
                Impressum
            </HyperLink>
        </footer>
    );
}