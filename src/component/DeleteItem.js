import { TiDelete } from "react-icons/ti";


export default function DeleteItem( {id, list, func} ) {

  return (
    <div className='rounded-full bg-red-500 absolute -top-2 -right-2 text-center
    flex justify-center items-center cursor-pointer' onClick={(e) => {
        e.preventDefault();
        func(id,list)
    }}>
      <TiDelete color="white" size={20}/>
    </div>
  )
}
