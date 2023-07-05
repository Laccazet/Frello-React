import { useContext, useState } from "react";
import dataContext from "../context/dataContext";
import DeleteItem from "./DeleteItem";

export default function CardItem( {card, list}) {

  const {deleteCard} = useContext(dataContext)
  var [hover, setHover] = useState(false);

  return (
    <div className='w-full flex p-2 bg-[#36383a] relative rounded-2xl'
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

        <h1 className="w-full break-words">{card.content}</h1>

        {hover ? <DeleteItem id={card.id} list={list} func={deleteCard} /> : ""}
    </div>
  )
}
