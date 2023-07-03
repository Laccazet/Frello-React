import arabesque from "../assets/arabesque.png";
import arches from "../assets/arches.png";
import az_subtle from "../assets/az-subtle.png";
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext } from "react"
import dataContext from "../context/dataContext"



export default function AddTableSection() {

    const {handleAddTable, addTable} = useContext(dataContext);

    const backgrounds = [arabesque, arches, az_subtle];
    const colors = ["#CBD5E1", "#EF7070", "#4F46E5", "#4ABDF8", "#F49E3F"];


    var [color, setColor] = useState("#CBD5E1");
    var [newTable, setNewTable] = useState(
        {
            id: uuidv4(),
            name: "New Table",
            background: arches,
            color: "#CBD5E1",
            lists: [
                {
                    id: uuidv4(),
                    name: "New List",
                    cards: [
                        {
                            id: uuidv4(),
                            name: "New Card",
                            content: "Hello."
                        }
                    ]
                }]}
    )

    const handleBg = (bg) => {
        setNewTable((prev) => {
            return {...prev, background: bg}
        })
    }

    const handleColor = (event) => {
        let clr = event.target.style.backgroundColor;
        setColor(clr)
        setNewTable((prev) => {
            return {...prev, color: clr}
        })
    }

    const handleInput = (event) => {
        let inpt = event.target.value;
        setNewTable((prev) => {
            return {...prev, name: inpt}
        })
    }

    const handleCreate = () => {
        addTable(newTable);
        handleAddTable(false);
    }

    const handleSelected = (event) => {
        let selected = document.querySelector(".selectedTable");
        selected.classList.remove("selectedTable");
        event.target.classList.add('selectedTable');
    }

    return (
        <div className="w-[300px] h-[300px] bg-slate-700 rounded-2xl absolute top-[100px] left-[200px]">

            <div className="w-full h-[10%] relative flex justify-end items-center">
                <button className="w-10" onClick={handleAddTable}>X</button>
            </div>

            <div className="w-full h-2/6 flex justify-evenly items-center">

                {backgrounds.map((item, index) => {
                    return (
                        <div className={`w-[90px] h-[50px] bg-center cursor-pointer ${item === arches ? "selectedTable" : ""}`} key={index}
                        style={{backgroundImage: `url(${item})`, backgroundColor: `${color}`}} onClick={(e) => {
                            handleBg(item);
                            handleSelected(e);
                            }} />
                    )
                })}

            </div>

            <div className="w-full h-1/6 flex justify-evenly items-center">

                {colors.map((item, index) => {
                    return (
                        <div className="w-[50px] h-[50px] cursor-pointer" style={{backgroundColor: `${item}` }} key={index}
                        onClick={(e) => {handleColor(e)}} />
                    )
                })}

            </div>

            <div className="w-full h-1/6 flex justify-center items-center">
                <input placeholder="Table Name" className="w-3/4 rounded-md" onChange={(e) => {handleInput(e)}} />
            </div>

            <div className="w-full h-1/6 flex justify-center items-center">
                <button className="w-2/4 bg-sky-700" onClick={handleCreate}>Create</button>
            </div>

        </div>
    )
}
