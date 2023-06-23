import {PickItUp} from "@/utils/customConvinienseType";
import {NavigationType} from "@/components/Dashbord/SideBarDetox";

const Accordion = (props: Readonly<PickItUp<NavigationType, "icon" | "pageName">>) => {
    return(
        <div className={"text-white w-full flex items-center"}>
            <div className={"w-1/3"}>{ props.icon }</div>
            <p className={"w-2/3 text-left"}>{props.pageName}</p>
        </div>
    )
}

export default Accordion
