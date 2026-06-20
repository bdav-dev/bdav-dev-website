import Link from "next/link";
import { BdavDev } from "@/library/routing";


export function BdavDevHomeLink() {
    return (
        <Link
            href={BdavDev.getRoute()}
            className={'bdav-dev-home-link py-0.5 px-1 rounded-md'}
            draggable={false}
        >
            bdav.dev
        </Link>
    );
}
