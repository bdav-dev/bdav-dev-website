import Link from "next/link";
import { Route } from "@/utils/RouteUtils";

import '@/styles/bdav-dev-home.css'

type BdavDevHomeProps = {
    className?: string;
}

export default function BdavDevHome(props: BdavDevHomeProps) {
    return (
        <Link
            href={Route.home}
            className={`bdav-dev-home py-0.5 px-1 rounded-md ${props.className}`}
            draggable={false}
        >
            bdav.dev
        </Link>
    );
}
