import { EventInput } from "@fullcalendar/core";
import CalendarBase from "@/components/Calendar/parts/CalendarBase";
import CourseEditForm from "@/components/CourseForm/CourseEditForm";

const ReserveCalendar = () => {
    const data: EventInput[] = [
        { title: "小栗", start: "2023-06-25T12:00:00", end: "2023-06-25T13:00", description: "ランチコース"},
        { title: "菅田", start: "2023-06-26T12:00:00", end: "2023-06-26T13:00", description: "ランチコース" },
        { title: "watoson", start: "2023-06-27T12:00:00", end: "2023-06-27T13:00", description: "ランチコース" },
        { title: "KandyTown", start: "2023-06-28T12:00:00", end: "2023-06-28T13:00", description: "ランチコース" },
        { title: "WAVY", start: "2023-06-28T12:00:00", end: "2023-06-28T13:00", description: "ランチコース" },
        { title: "LEX", start: "2023-06-28T12:00:00", end: "2023-06-28T13:00", description: "ランチコース" },
        { title: "LANA", start: "2023-06-29T12:00:00", end: "2023-06-29T13:00", description: "ランチコース" },
    ];

    return(
        <CalendarBase dataList={data}></CalendarBase>
    )
}

export default ReserveCalendar;
