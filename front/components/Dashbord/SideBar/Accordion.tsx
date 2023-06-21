import {PickItUp} from "@/utils/customConvinienseType";
import {NavigationType} from "@/components/Dashbord/SideBarDetox";

const Accordion = (props: Readonly<PickItUp<NavigationType, "icon" | "pageName">>) => {
    return(
        <div className={"text-white flex items-center"}>
            { props.icon }
            <p>{props.pageName}</p>
        </div>
    )
}

export default Accordion
