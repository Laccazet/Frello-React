export default function DeleteItem( {id, list, func} ) {

  return (
    <div className='w-5 h-5 rounded-full bg-red-500 absolute -top-1 -right-1 text-center' onClick={(e) => {
        e.preventDefault();
        func(id,list)
    }}>X</div>
  )
}
