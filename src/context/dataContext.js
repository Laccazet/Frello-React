import { createContext, useState } from "react";
import tableData from "../data/tableData";

import arabesque from "../assets/arabesque.png";

const dataContext = createContext();

export function ContextProvider( {children} ) {

    var [data, setData] = useState(tableData);
    var [selectedTable, setSelectedTable] = useState([{}]);
    var [loading, setLoading] = useState(false);
    var [found, setFound] = useState(true);
    var [addTableMode, setAddTableMode] = useState(false);


    const getTable = (t) => {
        setLoading(true);
        setFound(false);

        data.map(table => {
            if (table.name === t) {
                setFound(true)
                setSelectedTable(table)
            }
        })
        
        setLoading(false);
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
            console.log(item);
            return item.id != id;
        }))
    }


    return (
        <dataContext.Provider value={{
            data,
            selectedTable,
            getTable,
            found,
            loading,
            addTable,
            addTableMode,
            handleAddTable,
            addTable,
            deleteTable,
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;