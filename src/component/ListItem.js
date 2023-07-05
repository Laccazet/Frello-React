import { useContext, useState } from "react"
import dataContext from "../context/dataContext"
import CardItem from "./CardItem"
import DeleteItem from "./DeleteItem";
import AddCardItem from "./AddCardItem";
import { motion, AnimatePresence } from "framer-motion"

export default function ListItem( {list, id, name, cards} ) {

  const {deleteList} = useContext(dataContext);
  var [hover, setHover] = useState(false);

  return (
    <div className='bg-[#070707] list p-5 relative text-[#ffffffae] rounded-3xl whitespace-normal'
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        
        {hover ? <DeleteItem id={id} func={deleteList} /> : ""}

        <div className='w-full h-[10%] mb-10'>
            <h1 className='text-[35px] w-full break-words'>{name}</h1>
        </div>

        <div className='w-full h-[90%] flex flex-col gap-5'>
            
            <AnimatePresence>
              {cards.map(card => {
                  return (
                    <motion.div
                    key={card.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}  
                    >
                      <CardItem key={card.id} list={list} card={card} />
                    </motion.div>
                  )
              })}
            </AnimatePresence>

            <AddCardItem list={list} />
        </div>

    </div>
  )
}
