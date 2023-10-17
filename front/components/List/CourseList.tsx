import TableHeader, { headerColumn } from "./parts/TableHeader";
import TableBody, { bodyColumn } from "./parts/TableBody";
import SortIcon from "@/styles/SortIcon";
import StatusActiveIcon from "@/styles/StatusActiveIcon";
import StatusStopIcon from "@/styles/StatusStopIcon";
import Link from "next/link";

const CourseList = () => {


    const query = {
        id: 999999,
        setName: "test",
    };
    
    const header: headerColumn= [
        {width: "w-[10%]", text: "媒体", icon: <SortIcon />},
        {width: "w-[13%]", text: "コース名", icon: <SortIcon />},
        {width: "w-[13%]", text: "ステータス", icon: <SortIcon />},
        {width: "w-[10%]", text: "ネット予約"},
        {width: "w-[10%]", text: "金額"},
        {width: "w-[10%]", text: "人数"},
        {width: "w-[10%]", text: "滞在時間"},
        {width: "w-[10%]", text: "作成日"},
        {width: "w-[8%]", text: "" },
    ]

    const body: bodyColumn=[
        [
            {text: "食べログ"},
            {text: "ランチコース"},
            {text: "Active", element: <StatusActiveIcon />},
            {text: "対応"},
            {text: "10000"},
            {text: "1～8名"},
            {text: "2時間"},
            {text: "02/01"},
            {text: "編集", element: <Link className={"text-blue-600 hover:text-blue-800"} href={{ pathname: "course/form", query: query }}>編集</Link>},
        ],
        [
            {text: "食べログ"},
            {text: "ランチコース"},
            {text: "Active", element: <StatusStopIcon />},
            {text: "対応"},
            {text: "10000"},
            {text: "1～8名"},
            {text: "2時間"},
            {text: "02/01"},
            {text: "編集", element: <Link className={"text-blue-600 hover:text-blue-800"} href="#">編集</Link>},
        ],
        [
            {text: "食べログ"},
            {text: "席のみ"},
            {text: "Active", element: <StatusActiveIcon />},
            {text: "対応"},
            {text: ""},
            {text: "1～8名"},
            {text: "2時間"},
            {text: "02/01"},
            {text: "編集", element: <Link className={"text-blue-600 hover:text-blue-800"} href="#">編集</Link>},
        ]
    ]



    return (
        <table className={"border border-slate-500 text-2xl text-center table-fixed w-full"}>
            <TableHeader headerColumn={header} />
            <TableBody bodyRow={body} />
        </table>
    )
}

export default CourseList
