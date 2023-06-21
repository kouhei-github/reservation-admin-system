import Link from "next/link";
import { NavigationType } from "@/components/Dashbord/SideBarDetox";
import { CustomOmit, Filter } from "@/utils/customConvinienseType";

type Props = CustomOmit<NavigationType, "pageChildren" | "icon"> & {icon?: Filter<NavigationType, "icon">}

const Navigation = (props: Readonly<Props>) => {

    return(
        <Link className={"text-white flex items-center hover:underline hover:underline-offset-2 hover:decoration-white"} href={props.path}>
            {typeof props.icon === "undefined" ? (
                <></>
            ) : (
                <>{ props.icon }</>
            )}
            <p>{props.pageName}</p>
        </Link>
    )
}

export default Navigation
