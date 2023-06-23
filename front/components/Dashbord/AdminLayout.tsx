import Header from "@/components/Dashbord/Header";
import SideBarDetox from "@/components/Dashbord/SideBarDetox";
import UserProfile from "@/components/Dashbord/SideBar/UserProfile";
import React from "react";

export type LoginUserProfileType = {
    name: string,
    image?: string,
    isAdmin: boolean
}

export default function AdminLayout(props: {children: React.ReactNode}) {
    const user: LoginUserProfileType = { name: "永松光平", image: "/people.jpg", isAdmin: false }
    return (
        <div className={"min-h-screen"}>
            <div className={"flex h-[8vh]"}>
                <Header />
            </div>

            <div className={"flex h-[92vh] w-full bg-[rgb(0,81,203)]"}>
                <div className={"w-1/5 h-full text-white text-center bg-[rgb(0,81,203)]"}>
                    <div className={"h-[85vh] overflow-y-scroll"}>
                        <SideBarDetox />
                    </div>
                    <div className={"h-[7vh] flex items-center justify-center border-t border-white"}>
                        <UserProfile name={user.name} image={typeof user.image === "undefined" ? "" : user.image} />
                    </div>
                </div>
                <div className={"w-4/5 h-full text-center overflow-y-scroll bg-white rounded-tl-2xl"}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

