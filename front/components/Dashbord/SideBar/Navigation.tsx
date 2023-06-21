import Link from "next/link";
import { NavigationType } from "@/components/Dashbord/SideBarDetox";
import { CustomOmit, Filter } from "@/utils/customConvinienseType";

type Props = CustomOmit<NavigationType, "pageChildren" | "icon"> & {icon?: Filter<NavigationType, "icon">}

const Navigation = (props: Readonly<Props>) => {

    return(
        <Link className={"text-white w-full flex items-center hover:underline hover:underline-offset-2 hover:decoration-white"} href={props.path}>
            {typeof props.icon === "undefined" ? (
                <div className={"w-1/3"} />
            ) : (
                <div className={"w-1/3"}>{ props.icon }</div>
            )}
            <p className={"w-2/3  text-left"}>{props.pageName}</p>
        </Link>
    )
}

export default Navigation
