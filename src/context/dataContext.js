import { createContext, useState } from "react";
import tableData from "../data/tableData";

const dataContext = createContext();

export function ContextProvider( {children} ) {

    var [data, setData] = useState(tableData);
    var [selectedTable, setSelectedTable] = useState([{}]);
    var [loading, setLoading] = useState(false);
    var [found, setFound] = useState(true);


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



    return (
        <dataContext.Provider value={{
            data,
            selectedTable,
            getTable,
            found,
            loading,
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;