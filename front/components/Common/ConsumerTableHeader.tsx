import {TableBody} from "@/components/Common/ConsumerTable";


const ConsumerTableHeader = (props: {columns: Pick<TableBody, "text">[]}) => {
    return (
        <div className={"w-full flex items-center justify-start"}>
            {props.columns.map((column, index) => (
                <div className={index === 0 ? "w-[120px] py-2 border-b-2 border-slate-500" : "w-[220px] py-2 border-b-2 border-slate-500"} key={index}>
                    <p className={ index === 0 ? "w-[120px] text-center mx-auto" : "w-[220px] text-left mx-auto"}>{column.text}</p>
                </div>
            ))}
        </div>
    )
}

export default ConsumerTableHeader
