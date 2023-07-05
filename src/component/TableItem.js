import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import dataContext from "../context/dataContext"
import DeleteItem from "./DeleteItem"

export default function TableItem( {table} ) {

  const {deleteTable} = useContext(dataContext);
  var [hover, setHover] = useState(false);

  return (
    <Link to={`/table/${table.name}`} className="h-[80px] relative"
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

      <div className='w-[180px] h-[80px] rounded-xl flex justify-center items-center'
      style={{backgroundImage: `url(${table.background})`, backgroundColor: `${table.color}`}}>
        <h1 className="w-full break-words text-center">{table.name}</h1>
      </div>

      {hover ? <DeleteItem id={table.id} func={deleteTable} /> : ""};

    </Link>
  )
}


