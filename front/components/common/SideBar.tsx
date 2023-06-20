import {JSX, useState,MouseEvent, } from 'react'
import {HomeIcon} from "@/styles/HomeIcon";
import NavigationItem from "./NavigationItem";
import NavigationChildItem from '@/components/common/NavigationChildItem'


type NavigationChild = {
    // icon: JSX.Element;
    path: string;
    pageName: string;
}

type Navigation = {
    icon: JSX.Element;
    path: string;
    pageName: string;
    pageChildren: Array<NavigationChild>;
}


const navigations: Navigation[] = [
    {
        icon: <HomeIcon className={""}/>,
        path: "/",
        pageName: "トップ",
        pageChildren:[]
    },
    {
        icon: <HomeIcon className={""}/>,
        path: "/page2",
        pageName: "ページ2",
        pageChildren: [
            {path: "/page2/1",pageName: "page2-1"},
            {path: "/page2/2",pageName: "page2-2"},
            {path: "/page2/3",pageName: "page2-1"}
        ]
    },
    {
        icon: <HomeIcon className={""}/>,
        path: "/page3",
        pageName: "ページ3",
        pageChildren: [
            {path: "/page3/1",pageName: "page3-1"}
        ]
    },
    {
        icon: <HomeIcon className={""}/>,
        path: "/page4",
        pageName: "ページ4",
        pageChildren: []
    }
]

const sideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = (event: MouseEvent) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    }

    const hideDropdown = () => {
        setIsOpen(false)
    }


    return(
        <nav className={"my-1"}>
            <div className={"border-b border-amber-50 "}>
                {navigations.map((navigation, idx) => (
                    <div key={idx} className={""}>
                        <NavigationItem Icon={navigation.icon} href={navigation.path} name={navigation.pageName} />
                        {navigation.pageChildren.map((pageChild, i) => (
                            <div key={i} className={""}>
                                <ul
                                    className={"dropdown-item"}
                                    onClick={hideDropdown}
                                >
                                    <NavigationChildItem href={pageChild.path} name={pageChild.pageName} />
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default sideBar
