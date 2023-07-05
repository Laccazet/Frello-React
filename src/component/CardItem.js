import { useContext } from "react";
import dataContext from "../context/dataContext";
import DeleteItem from "./DeleteItem";

export default function CardItem( {card, list}) {

  const {deleteCard} = useContext(dataContext)

  return (
    <div className='w-full flex p-2 bg-sky-800 relative'>
        <h1 className="w-full break-words">{card.content}</h1>

        <DeleteItem id={card.id} list={list} func={deleteCard} />
    </div>
  )
}
