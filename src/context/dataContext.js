import { createContext, useState } from "react";
import tableData from "../data/tableData";

const dataContext = createContext();

export function ContextProvider( {children} ) {

    var [data, setData] = useState(tableData);
    var [selectedTable, setSelectedTable] = useState([{}]);
    var [color, setColor] = useState("gray");
    var [bg, setBg] = useState()
    var [loading, setLoading] = useState(false);
    var [found, setFound] = useState(true);
    var [addTableMode, setAddTableMode] = useState(false);


    const getTable = (t) => {
        setLoading(true);
        setFound(false);

        data.map((table) => {
            if (table.name === t) {
                setFound(true)
                setSelectedTable(table)
            }
            return table
        })
        
        setLoading(false);
    }

    const setTheme = (color, bg) => {
        setColor(color);
        setBg(bg);
    }

    const handleAddTable = () => {
        addTableMode ? setAddTableMode(false) : setAddTableMode(true);
    }


    const addTable = (newTable) => {
        setData(prev => {
            return [...prev, newTable];
        })
    }

    const deleteTable = (id) => {
        setData(data.filter(item => {
            return item.id !== id;
        }))
    }

    const addList = (newTable) => {
        setData(data.map(table => {
            if (table.id === newTable.id) {
                setSelectedTable(newTable);
                return {...table, ...newTable};
            }else return table;
        }))

    }

    const deleteList = (id) => {
        var x = [];
        data.map(table => {
            if (selectedTable.id === table.id) {
                let newList = table.lists.filter(list => list.id !== id);
                let newTable = {...table, lists: [...newList]};
                setSelectedTable(newTable);
                x.push(newTable);
            }else {
                x.push(table);
            }
        })

        setData(x);
    }

    const addCard = (newTable) => {
        setData(data.map(table => {
            if (table.id === newTable.id) {
                setSelectedTable(newTable);
                return {...table, ...newTable}
            }else return table
        }))
    }

    const deleteCard = (id, list) => {
        var lists = [];
        var x = [];

        data.map(table => {

            if (table.id === selectedTable.id) {

                table.lists.map(li => {
                    if (li.id === list.id) {
                        let newCards = li.cards.filter(card => card.id !== id);
                        let newList = {...li, cards: [...newCards]};
                        lists.push(newList);
                    }else lists.push(li);
                })

                let newTable = {...table, lists: lists};
                setSelectedTable(newTable);
                x.push(newTable);
            }else {
                x.push(table);
            }
        })

        setData(x);

    }

    return (
        <dataContext.Provider value={{
            data,
            selectedTable,
            setSelectedTable,
            color,
            bg,
            setTheme,
            getTable,
            found,
            loading,
            addTable,
            addTableMode,
            handleAddTable,
            deleteTable,
            addList,
            deleteList,
            addCard,
            deleteCard,
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;