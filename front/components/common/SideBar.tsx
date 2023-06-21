import {useState, Dispatch, SetStateAction} from 'react'
import {HomeIcon} from "../../styles/HomeIcon";
import NavigationLinkItem from "./NavigationLinkItem";
import NavigationChildItem from './NavigationChildItem';
import NavigationItem from './NavigationItem';



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
        pageChildren: [],
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
    const [isPageState1, setIsPageState1] = useState(false);
    const [isPageState2, setIsPageState2] = useState(false);
    const [isPageState3, setIsPageState3] = useState(false);
    const [isPageState4, setIsPageState4] = useState(false);
    const pageStates = [
        {state: isPageState1, setState: setIsPageState1},
        {state: isPageState2, setState: setIsPageState2},
        {state: isPageState3, setState: setIsPageState3},
        {state: isPageState4, setState: setIsPageState4},
    ];

    return(
        <nav className={"my-1"}>
            <div className={"border-b border-amber-50 "}>
                {navigations.map((navigation, idx) => (
                    <div key={idx} className={""} >
                        {navigation.pageChildren.length == 0 ?
                            (<NavigationLinkItem icon={navigation.icon} href={navigation.path} name={navigation.pageName} func={() => pageStates[idx].setState(pageStates[idx].state)}/>):
                            (<NavigationItem icon={navigation.icon} name={navigation.pageName} />)
                        }
                        {navigation.pageChildren.map((pageChild, i) => (
                            <div key={i} className={pageStates[idx].state ? "overflow-visible" : "overflow-hidden"}>
                                <NavigationChildItem href={pageChild.path} name={pageChild.pageName} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default sideBar
