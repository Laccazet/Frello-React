import { Link } from "react-router-dom"
import { useContext } from "react"
import dataContext from "../context/dataContext"

export default function TableItem( {table} ) {

  return (
    <Link to={`/table/${table.name}`}>

      <div className='w-[180px] h-[80px] rounded-xl flex justify-center items-center'
      style={{backgroundImage: `url(${table.background})`, backgroundColor: `${table.color}`}}>
        <h1>{table.name}</h1>
      </div>

    </Link>
  )
}


