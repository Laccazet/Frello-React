import { useContext, useState } from "react";
import dataContext from "../context/dataContext";
import { v4 as uuidv4 } from 'uuid';

export default function AddCardItem( {list} ) {

    const {selectedTable, addCard} = useContext(dataContext);
    var [addForm, setAddForm] = useState(false);
    var [input, setInput] = useState("");
    var [hover, setHover] = useState(false);

    const handleCreate = (content) => {
        const newList = {...list, cards: [...list.cards, {
            id: uuidv4(),
            content: content
        }]}
        
        var deleteList = selectedTable.lists.map(li => {
            if (li.id === list.id) {
                return newList;
            } else return li;
        })

        const newTable = {...selectedTable, lists: deleteList};
        
        addCard(newTable);
        setAddForm(false);
    }


    const handleInput = (event) => {
        let inpt = event.target.value;
        setInput(inpt);
    }


    if (!addForm) {
        return (
            <div className='w-full h-10 p-2 rounded-2xl cursor-pointer' style={{backgroundColor: `${hover ? "#40603A" : ""}`}}
            onClick={() => {setAddForm(true)}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>+ Add new card</div>
        )
    }else {
        return (
            <div className='w-full bg-[#36383a] p-2 flex flex-col gap-2 rounded-xl' >
                <div>
                    <textarea placeholder="Enter content for this card..." className="w-full text-l rounded-md bg-[#2b2d2e]" onChange={(e) => {handleInput(e)}} />
                </div>

                <div className="flex justify-start gap-2">
                    <button className="w-20 bg-[#40603A] rounded-md cursor-pointer" disabled={input.length > 0 ? false : true} onClick={() => {handleCreate(input)}} >Add list</button>
                    <button className="w-5 bg-red-500 rounded-md" onClick={() => {setAddForm(false)}}>X</button>
                </div>
            </div>
        )
    }
}
