import Link from "next/link";

export type buttonType = {
    icon: JSX.Element;
    text: string;
    href: string;
    className: string
}

const Button = (props: buttonType) => {
    return(
        <Link 
            className={props.className + " py-2 px-3 inline-flex items-center gap-2 rounded-md border border-transparent font-semibold transition-all text-sm"} 
            href={props.href}
        >
            {props.icon}
            {props.text}
        </Link>
    )
}

export default Button