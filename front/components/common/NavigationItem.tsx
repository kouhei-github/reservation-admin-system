
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    // アイコンタイプでもらう
    Icon: string;
    href: string;
    name: string;
}

export const NavigationItem = ({Icon, href, name}: Props) => {
    const router = useRouter();
    return (
        <Link
            href={href}
            // classname={`${router.pathname == href ? "": ""}`}
        >
            {/*<Icon />*/}
            <p>{name}</p>
        </Link>
    )
}
