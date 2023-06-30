import { JSX } from "react";
import PlusIcon from "@/styles/PlusIcon"
import Button from "./parts/LinkButton";
import { buttonType } from "./parts/LinkButton";

const NewCreateButton = () => {

    const newCreateButton: buttonType = {
        icon: <PlusIcon className={"w-3 h-3"}/>, 
        text: "新規作成", 
        href: "#", 
        className: "bg-blue-600 text-white hover:bg-blue-500 relative z-10"
    }

    return(
        <Button icon={newCreateButton.icon} text={newCreateButton.text} href={newCreateButton.href} className={newCreateButton.className} />
    )   
}

export default NewCreateButton