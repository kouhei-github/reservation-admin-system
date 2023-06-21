import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    icon: JSX.Element;
    href: string;
    name: string;
    func: () => void;
}


const NavigationItem = ({icon, href, name, func}: Props) => {
    const router = useRouter();
    return (
        <Link
            href={href}
            className={`${router.pathname == href ? "": ""}`}
            onClick={func}
        >
            {icon}
            <p>{name}</p>
        </Link>
    )
}

export default NavigationItem