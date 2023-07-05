import { useContext, useState } from "react";
import dataContext from "../context/dataContext";
import { v4 as uuidv4 } from 'uuid';

export default function AddListItem() {

    const {selectedTable,addList} = useContext(dataContext);
    var [addForm, setAddForm] = useState(false);
    var [input, setInput] = useState("");

    const handleCreate = (name) => {
        const newTable = {...selectedTable,
            lists: [...selectedTable.lists, 
                {
                id: uuidv4(),
                name: name,
                cards: [
                    {
                        id: uuidv4(),
                        name: "New Card",
                        content: "Hello."
                    }
                ]
                }
            ]};
        addList(newTable);
        setInput("");
        setAddForm(false);
    }

    const handleInput = (event) => {
        let input = event.target.value;
        setInput(input);
    }


    if (!addForm) {
        return (
            <div className='bg-slate-500 w-[300px] p-5 glassy cursor-pointer ' onClick={() => {setAddForm(true)}}>+ Add another list</div>
        )
    }else {
        return (
            <div className='bg-[#070707] w-[300px] p-3 flex flex-col justify-center gap-3 rounded-xl text-[#ffffffae]'>
                <div>
                    <input placeholder="Enter list title..." className="w-full text-xl bg-[#2b2d2e] " onChange={(e) => {handleInput(e)}} />
                </div>

                <div className="flex justify-start gap-2">
                    <button className="w-20 bg-[#40603A] rounded-md cursor-pointer" disabled={input.length > 0 ? false : true} onClick={() => {handleCreate(input)}} >Add list</button>
                    <button className="w-5 bg-red-500 rounded-md cursor-pointer" onClick={() => {setAddForm(false)}}>X</button>
                </div>
            </div>
        )
    }
}
