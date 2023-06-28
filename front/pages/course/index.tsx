import Header from "@/components/Dashbord/Header";
import ApplicationForm from '@/components/Form/ApplicationForm'
import {myFormContext, useMyFormContext} from '@/utils/formContext'
import SideBarDetox from "@/components/Dashbord/SideBarDetox";
import UserProfile from "@/components/Dashbord/SideBar/UserProfile";
import CourseList from "@/components/List/CourseList";
import NewCreateButton from "@/components/Button/NewCreateButton";
import AdminLayout from "@/components/Dashbord/AdminLayout";

export type LoginUserProfileType = {
    name: string,
    image?: string,
    isAdmin: boolean
}



export default function Course() {
    return (
        <AdminLayout>
            <div className={"w-[95%] mx-auto"}>
                <div className={"text-end mt-10"}>
                    <NewCreateButton />
                </div>
                <div className={"mt-3"}>
                    <CourseList />
                </div>
            </div>
        </AdminLayout>

    )
}

