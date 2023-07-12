import { useRouter } from "next/router";
import {SendServerData} from "@/utils/formCourseEdit";
import CourseEditForm from "@/components/CourseForm/CourseEditForm";
import {myFormContext, useMyFormContext} from '@/utils/formCourseEdit'
import AdminLayout from "@/components/Dashbord/AdminLayout";
import {id} from "postcss-selector-parser";



const edit = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const customCtx = useMyFormContext();
    return(
        // <div>{router.query.id}</div>
        <AdminLayout>
            <myFormContext.Provider value={customCtx}>
                {typeof router.query.id !== "undefined" &&
                    <CourseEditForm id={router.query.id} />
                }
            </myFormContext.Provider>
        </AdminLayout>
    )
}

export default edit