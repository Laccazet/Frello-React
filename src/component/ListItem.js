import { useContext } from "react"
import dataContext from "../context/dataContext"
import CardItem from "./CardItem"
import DeleteItem from "./DeleteItem";
import AddCardItem from "./AddCardItem";

export default function ListItem( {list, id, name, cards} ) {

  const {deleteList} = useContext(dataContext);

  return (
    <div className='bg-slate-700 w-[300px] p-5 relative'>
        
        <DeleteItem id={id} func={deleteList} />

        <div className='w-full h-[10%] mb-10'>
            <h1 className='text-[35px] w-full break-words'>{name}</h1>
        </div>

        <div className='w-full h-[90%] flex flex-col gap-5'>
            {cards.map(card => {
                return <CardItem key={card.id} list={list} card={card} />
            })}

            <AddCardItem list={list} />
        </div>

    </div>
  )
}
