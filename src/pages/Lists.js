import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import dataContext from "../context/dataContext"
import ListItem from "../component/ListItem";


export default function Lists() {

    const {selectedTable, getTable, found, loading} = useContext(dataContext);
    const params = useParams();

    useEffect(() => {
        getTable(params.lists);
    }, [])


    if (!loading) {
        if (found) {
            return (
                <div className="w-full h-full flex justify-center items-center gap-20">
                    {selectedTable?.lists?.map(list => {
                        return <ListItem key={list.id} name={list.name} cards={list.cards} />
                    })}
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