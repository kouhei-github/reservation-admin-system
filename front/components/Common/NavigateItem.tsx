import {JSX} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  icon: JSX.Element;
  name: string;
  func: () => void;
}


const NavigationItem = ({icon, name}: Props) => {
  const router = useRouter();
  return (
      <div>
        {icon}
        <p>{name}</p>
      </div>
  )
}

export default NavigationItem
