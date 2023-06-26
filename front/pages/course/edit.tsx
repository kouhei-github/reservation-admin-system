import { useRouter } from "next/router";
import {SendServerData} from "@/utils/formCourseEdit";
import CourseEditForm from "@/components/CourseForm/CourseEditForm";
import {myFormContext, useMyFormContext} from '@/utils/formCourseEdit'
import AdminLayout from "@/components/Dashbord/AdminLayout";



const edit = () => {
    const router = useRouter();
    const customCtx = useMyFormContext();
    return(
        // <div>{router.query.id}</div>
        <AdminLayout>
            <myFormContext.Provider value={customCtx}>
                <CourseEditForm></CourseEditForm>
            </myFormContext.Provider>
        </AdminLayout>
    )
}

export default edit