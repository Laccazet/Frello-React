import { useContext } from "react";
import dataContext from "../context/dataContext";

export default function DeleteItem( {id} ) {

    const {deleteTable} = useContext(dataContext);

  return (
    <div className='w-5 h-5 rounded-full bg-red-500 absolute -top-1 -right-1 text-center' onClick={(e) => {
        e.preventDefault();
        deleteTable(id)
    }}>X</div>
  )
}
