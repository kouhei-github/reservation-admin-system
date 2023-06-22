import { CustomOmit, Filter } from "@/utils/customConvinienseType";

export type headerColumnBase = {
    width: string;
    text: string;
    icon: JSX.Element
}
export type headerColumn = Array<CustomOmit<headerColumnBase, "icon">  & {icon?: Filter<headerColumnBase, "icon">}>;

const TableHeader = (props: {headerColumn:headerColumn}) => {
    const {headerColumn} = props
    return(
        <thead className={"bg-blue-50 dark:bg-neutral-600"}>
            <tr>
                {headerColumn.map((column, idx) => (
                    <th key={idx} scope="col" className= {column.width + " px-6 py-3 text-center text-xs font-medium text-white uppercase truncate"}>
                        <div className={"flex mx-auto justify-center items-center"}>
                            <p className={"pr-2"}>{column.text}</p>
                            {typeof column.icon !== "undefined" && 
                                (column.icon)
                            }
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )


}

export default TableHeader