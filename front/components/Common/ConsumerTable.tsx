import React from "react";

export type TableBody = {
    text: string,
    icon?: React.JSX.Element
    center: boolean
}

const ConsumerTable = (props: {bodyBaseColumnArray: TableBody[][]}) => {
    return (
        <div className={"mx-auto my-6"}>
            {props.bodyBaseColumnArray.map((bodyBaseColumns, index) => (
                <div className={"flex items-center justify-start border-b border-slate-500"} key={index}>
                    <div className={"w-[120px] py-2"}>
                        <p className={"w-full text-center mx-auto"}>{index+1}</p>
                    </div>
                    {bodyBaseColumns.map((bodyBaseColumn, k) => (
                        <div className={"w-[220px] py-2 mx-auto"} key={k}>
                            {
                                typeof bodyBaseColumn.icon === "undefined"
                                    ?
                                        <p className={bodyBaseColumn.center ? "w-full text-center mx-auto" : "w-full text-left mx-auto"}>{bodyBaseColumn.text}</p>
                                    :
                                        <div className={bodyBaseColumn.center ? "text-center" : "text-left"}>{bodyBaseColumn.icon}</div>
                            }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ConsumerTable
