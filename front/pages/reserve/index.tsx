import AdminLayout from "@/components/Dashbord/AdminLayout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ReserveCalendar from "@/components/Calendar/ReserveCalendar";

export default function Reserve(){
    return (
        <AdminLayout>
            <div className={"bg-white w-[95%] mx-auto my-10"}>
                <ReserveCalendar />
            </div>
        </AdminLayout>
    )
}