import HyperLink from "@/components/library/link/HyperLink";
import { BdavDev } from "@/routing";
import Link from "next/link";
import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";
import InstagramGlyph from "@/icons/logo/InstagramGlyph";
import { ReactNode } from "react";
import LinkedInGlyph from "@/icons/logo/LinkedInGlyph";
import bdavDevIcon from '@/app/icon.png';
import Image from "next/image";
import VerticalRuler from "@/components/library/VerticalRuler";


export default function Footer() {
    return (
        <footer className="flex flex-row items-center gap-1.5 sm:gap-2 px-1.5 pt-2 pb-1 text-zinc-500 dark:text-zinc-700 text-xs sm:text-sm">
            <Image
                alt={'bdav.dev icon'}
                src={bdavDevIcon}
                className={'opacity-80 select-none w-[1.4em] h-[1.4em]'}
                draggable={false}
                loading={'lazy'}
                placeholder={'blur'}
            />

            <VerticalRuler className={'h-4'}/>

            <SocialLink href={'https://github.com/bdav-dev/'}>
                <GitHubInvertocat className={'text-[0.95em]'}/>
            </SocialLink>

            <SocialLink href={'https://www.instagram.com/davidb.3d/'}>
                <InstagramGlyph className={'text-[0.95em]'}/>
            </SocialLink>

            <SocialLink href={'https://linkedin.com/in/david-berezowski-ab5639273/'}>
                <LinkedInGlyph className={'text-[0.95em]'}/>
            </SocialLink>

            <div className={'flex flex-row gap-2 ml-auto'}>
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

function SocialLink(props: { href: string, children?: ReactNode }) {
    return (
        <Link href={props.href} className={'inline-flex hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors duration-100'}>
            {props.children}
        </Link>
    );
}
