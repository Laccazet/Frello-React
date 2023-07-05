import { useContext, useState } from "react";
import dataContext from "../context/dataContext";
import { v4 as uuidv4 } from 'uuid';

export default function AddCardItem( {list} ) {

    const {selectedTable, addCard} = useContext(dataContext);
    var [addForm, setAddForm] = useState(false);
    var [input, setInput] = useState("");

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
            <div className='w-full h-10 bg-lime-200 p-2' onClick={() => {setAddForm(true)}}>+ Add new card</div>
        )
    }else {
        return (
            <div className='w-full bg-lime-200 p-2 flex flex-col gap-5' >
                <div>
                    <textarea placeholder="Enter content for this card..." className="w-full text-l" onChange={(e) => {handleInput(e)}} />
                </div>

                <div className="flex justify-start gap-2">
                    <button className="w-20 bg-sky-700" disabled={input.length > 0 ? false : true} onClick={() => {handleCreate(input)}} >Add list</button>
                    <button className="w-5 bg-red-900" onClick={() => {setAddForm(false)}}>X</button>
                </div>
            </div>
        )
    }
}
