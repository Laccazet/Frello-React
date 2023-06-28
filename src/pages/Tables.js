import { useContext } from "react"
import dataContext from "../context/dataContext"
import TableItem from "../component/TableItem"

export default function Tables() {

    const {data} = useContext(dataContext);


  return (
    <div className="w-[800px] h-[500px] rounded-2xl bg-slate-500">
        <div className="w-full h-20 flex justify-start items-center pl-10 mb-10">
            <h1 className="text-[50px]">Tables</h1>
        </div>

        <div className="w-full h-[380px] flex justify-evenly flex-wrap">
            {data.map((table) => {
                return <TableItem key={table.id} table={table} />
            })}
        </div>
    </div>
  )
}
