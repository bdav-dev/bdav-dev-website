import HyperLink from "@/components/library/link/HyperLink";
import { BdavDev } from "@/routing";


export default function Footer() {
    return (
        <footer className="flex flex-row items-end gap-1.5 px-1 pt-2 pb-1 text-zinc-400 dark:text-zinc-700">
            <div className={'flex flex-row gap-1.5 ml-auto text-xs'}>
                <HyperLink href={BdavDev.privacyPolicy.getRoute()} discreet>
                    Datenschutzerklärung
                </HyperLink>

                <HyperLink href={BdavDev.legalNotice.getRoute()} discreet>
                    Impressum
                </HyperLink>
            </div>
        </footer>
    );
}
