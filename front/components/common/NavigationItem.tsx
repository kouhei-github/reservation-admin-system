import {JSX} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    Icon: JSX.Element;
    href: string;
    name: string;
}

const NavigationItem = ({Icon, href, name}: Props) => {
    const router = useRouter();
    return (
        <Link
            href={href}
            className={`${router.pathname == href ? "": ""}`}
        >
            <div>{Icon}</div>
            <p>{name}</p>
        </Link>
    )
}

export default NavigationItem
