import HyperLink from "@/components/library/link/HyperLink";
import { BdavDev } from "@/routing";
import Image from "next/image";

import websiteIcon from '@/app/icon.png';

export default function Footer() {
    return (
        <footer className="flex flex-row items-end gap-1.5 px-1 pt-2 pb-1 text-zinc-400 dark:text-zinc-700">
            <Image
                src={websiteIcon}
                alt={""}
                className={'grayscale hover:grayscale-0 opacity-60 hover:opacity-100 dark:opacity-25 dark:hover:opacity-100 transition-all ease-out w-4 h-4 rounded-full'}
            />

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
