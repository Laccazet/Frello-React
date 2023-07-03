import { useContext } from "react"
import dataContext from "../context/dataContext"
import TableItem from "../component/TableItem"
import AddTableItem from "../component/AddTableItem";
import AddTableSection from "../component/AddTableSection";

export default function Tables() {

    const {data, addTableMode} = useContext(dataContext);

    return (
        <div className="w-[700px] h-[500px] rounded-2xl bg-slate-500 relative">
            <div className="w-full h-20 flex justify-start items-center pl-10 mb-10">
                <h1 className="text-[50px]">Tables</h1>
            </div>
    
            <div className="w-full h-[380px] flex justify-center flex-wrap gap-3 pr-10 pl-10">
                {data.map((table) => {
                    return <TableItem key={table.id} table={table} />
                })}
                <AddTableItem />
            </div>

            {addTableMode ? <AddTableSection /> : ""}

        </div>
    )
}
