import Link from "next/link";

import '@/styling/components/bdav-dev-home-link.css'
import { BdavDev } from "@/routing";


export default function BdavDevHomeLink() {
    return (
        <Link
            href={BdavDev.getRoute()}
            className={`bdav-dev-home-link py-0.5 px-1 rounded-md`}
            draggable={false}
        >
            bdav.dev
        </Link>
    );
}
