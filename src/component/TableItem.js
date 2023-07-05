import { Link } from "react-router-dom"
import { useContext } from "react"
import dataContext from "../context/dataContext"
import DeleteItem from "./DeleteItem"

export default function TableItem( {table} ) {

  const {deleteTable} = useContext(dataContext);

  return (
    <Link to={`/table/${table.name}`} className="h-[80px] relative">

      <div className='w-[180px] h-[80px] rounded-xl flex justify-center items-center'
      style={{backgroundImage: `url(${table.background})`, backgroundColor: `${table.color}`}}>
        <h1 className="w-full break-words text-center">{table.name}</h1>
      </div>

      <DeleteItem id={table.id} func={deleteTable} />

    </Link>
  )
}


