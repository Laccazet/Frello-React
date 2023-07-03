import { useContext } from "react"
import dataContext from "../context/dataContext"
import AddTableSection from "./AddTableSection"

export default function AddTableItem() {

    const { handleAddTable } = useContext(dataContext)
    
    return (
      <div className='w-[100px] h-[80px] bg-slate-200 rounded-2xl text-3xl
      flex justify-center items-center cursor-pointer relative' onClick={handleAddTable}>
        +
      </div>
    )
}
