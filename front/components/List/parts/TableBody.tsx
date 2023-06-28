import {JSX} from "react"
import { CustomOmit, Filter } from "@/utils/customConvinienseType";

export type bodyBaseColumn = {
    text: string;
    element: JSX.Element;
}

export type bodyColumn = Array<Array<CustomOmit<bodyBaseColumn, "element">  & {element?: Filter<bodyBaseColumn, "element">}>>;

const TableBody = (props: {bodyRow:bodyColumn}) => {
    const {bodyRow} = props
    return(
        <tbody className={"divide-y divide-slate-200 dark:divide-slate-700 bg-white"}>
            {bodyRow.map((row, r) => (
                <tr key={r} className={"hover:bg-blue-100 dark:hover:bg-slate-200"}>
                    {row.map((column, c) => (
                        <td key={c} className={"px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800 truncate"}>
                            {typeof column.element === "undefined" ?
                                (column.text):
                                (column.element)
                            }
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody
