import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  name: string;
}

const NavigationItem = ({href, name}: Props) => {
  const router = useRouter();
  return (
      <li>
        <Link
            href={href}
            className={`${router.pathname == href ? "": ""}`}
        >
          <p>{name}</p>
        </Link>
      </li>
  )
}

export default NavigationItem
