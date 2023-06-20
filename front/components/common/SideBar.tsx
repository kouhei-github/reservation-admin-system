// import {HomeIcon} from "@/styles/HomeIcon";
import {NavigationItem} from "./NavigationItem";


type Navigation = {
    pageName: string;
    path: string;
    // icon: HomeIcon;
}

const navigations: Navigation[] = [
    {
        pageName: "トップ",
        path: "/",
        // icon: <HomeIcon className={styles.icon}/>
    },
    {
        pageName: "ページ2",
        path: "/page2",
        // icon: <HomeIcon className={styles.icon}/>
    },
    {
        pageName: "ページ3",
        path: "/page3",
        // icon: <HomeIcon className={styles.icon}/>
    },
    {
        pageName: "ページ4",
        path: "/page4",
        // icon: <HomeIcon className={styles.icon}/>
    },

]

const sideBar = () => {
    return(
        <nav className={"bg-[#0051CB"}>

        </nav>
    )
}

export default sideBar
