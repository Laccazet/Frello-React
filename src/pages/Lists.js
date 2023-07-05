import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import dataContext from "../context/dataContext"
import ListItem from "../component/ListItem";
import AddListItem from "../component/AddListItem";


export default function Lists() {

    const {data, setTheme, selectedTable, getTable, found, loading} = useContext(dataContext);
    const params = useParams();

    useEffect(() => {
        getTable(params.lists);
        setTheme(selectedTable.color, selectedTable.background);
    }, [selectedTable])
    

    if (!loading) {
        if (found) {
            return (
                <div className="w-full h-full flex flex-wrap justify-start items-start gap-20 p-5">
                    {selectedTable?.lists?.map(list => {
                        return <ListItem key={list.id} list={list} id={list.id} name={list.name} cards={list.cards} />
                    })}

                    <AddListItem />
                </div>
            )
        }else {
            return (
                <NotFound />
            )
        }

    }else {
        console.log("loading");
    }
  
}