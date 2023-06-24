import Navigation from "@/components/Dashbord/SideBar/Navigation";
import Accordion from "@/components/Dashbord/SideBar/Accordion";
import {useState} from "react";
import HomeIcon from "@/styles/HomeIcon";


type NavigationChild = {
    // icon: JSX.Element;
    path: string;
    pageName: string;
}

export type NavigationType = {
    icon: JSX.Element;
    path: string;
    pageName: string;
    pageChildren: Array<NavigationChild>;
}

const navigations: NavigationType[] = [
    {
        icon: <HomeIcon className={"h-4 w-4 fill-white"}/>,
        path: "/",
        pageName: "コース一覧",
        pageChildren: [],
    },
    {
        icon: <HomeIcon className={"h-4 w-4 fill-white"}/>,
        path: "/reservation",
        pageName: "予約管理",
        pageChildren: [
            {path: "/reservation/confirm",pageName: "予約数確認"},
            {path: "/reservation/add",pageName: "予約枠追加"},
            {path: "/reservation/change",pageName: "予約変更"},
        ]
    },
    {
        icon: <HomeIcon className={"h-4 w-4 fill-white"}/>,
        path: "",
        pageName: "ユーザー",
        pageChildren: [
            {path: "/user",pageName: "顧客情報一覧"},
            {path: "/user/chat",pageName: "チャット"},
        ]
    },
    {
        icon: <HomeIcon className={"h-4 w-4 fill-white"}/>,
        path: "/analysis",
        pageName: "分析",
        pageChildren: []
    },
]

const SideBarDetox = () => {
    // アコーディオンを表示させるインデックスを格納
    const [childOpenList, setChildOpenList] = useState<number[]>([])

    /**
     * アコーディオンの開く、閉じるの挙動を管理
     * @param index
     */
    const accordionAction = (index: number) => {
        if(!childOpenList.includes(index)){
            setChildOpenList([ ...childOpenList, index])
        } else {
            setChildOpenList(
                childOpenList.filter((child) => child !== index)
            )
        }
    }

    return(
        <nav className={"my-1"}>
            <div className={"space-y-10"}>
                {navigations.map((navigation, idx) => (
                    <div key={idx} className={`w-full py-2 ${childOpenList.includes(idx) ? "bg-[rgb(5,55,130)]" : ""}`}>
                        <div key={idx} className={`w-2/3 mx-auto flex flex-col items-center justify-center`} >
                        {navigation.pageChildren.length == 0 ?
                            (<Navigation icon={navigation.icon} path={navigation.path} pageName={navigation.pageName} />):
                            (
                                <div className={`flex w-full items-center space-x-2 cursor-pointer`} onClick={() => accordionAction(idx)}>
                                    <Accordion icon={navigation.icon} pageName={navigation.pageName} />
                                    {!childOpenList.includes(idx) ? (
                                        <svg className={"h-4 w-4 fill-white"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                    ) :(
                                        <svg className={"h-4 w-4 fill-white"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    )}
                                </div>
                            )
                        }
                        <div className={"w-full"}>
                            {navigation.pageChildren.map((pageChild, i) => (
                                <div key={i} className={"my-4"}>
                                    {childOpenList.includes(idx) ? (
                                        <div className={"w-full"}>
                                            <Navigation path={pageChild.path} pageName={pageChild.pageName} />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default SideBarDetox
