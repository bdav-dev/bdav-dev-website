'use client';

import React, { ComponentType, ReactNode } from "react";
import HyperLink from "@/components/library/link/HyperLink";
import { IconProps } from "@/icons/Icon";
import CodeIcon from "@/icons/deprecated/CodeIcon";
import { BdavDev, getBaseOfRoute } from "@/routing";
import CubeIcon from "@/icons/CubeIcon";
import RecipesIcon from "@/icons/deprecated/RecipiesIcon";
import AboutIcon from "@/icons/deprecated/AboutIcon";


type InternalLinkProps = {
    href: string,
    icon?: ComponentType<IconProps>,
    children?: ReactNode
}

export default function InternalLink(props: InternalLinkProps) {
    const Icon = props.icon ?? getIconForRoute(props.href);

    return (
        <span className={'inline-block my-0.5 pl-[0.2rem] pr-[0.35rem] bg-tile rounded-full'}>
            <HyperLink
                href={props.href}
                icon={Icon && <Icon className={'text-[0.85em]'}/>}
            >
                {props.children}
            </HyperLink>
        </span>
    );
}

function getIconForRoute(href: string): ComponentType<IconProps> | undefined {
    switch (getBaseOfRoute(href)) {
        case BdavDev.code.getRoute():
            return CodeIcon;
        case BdavDev.blender.getRoute():
            return CubeIcon;
        case BdavDev.recipes.getRoute():
            return RecipesIcon;
        case BdavDev.about.getRoute():
            return AboutIcon;
    }
}
