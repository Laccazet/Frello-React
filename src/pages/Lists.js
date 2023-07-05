import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import dataContext from "../context/dataContext"
import ListItem from "../component/ListItem";
import AddListItem from "../component/AddListItem";
import { motion, AnimatePresence } from "framer-motion"


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
                <div className="min-w-full h-full flex justify-start items-start listScreen gap-10 p-5">
                    <AnimatePresence>
                        {selectedTable?.lists?.map(list => {
                            return (
                                <motion.div 
                                    key={list.id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                <ListItem key={list.id} list={list} id={list.id} name={list.name} cards={list.cards} />
                            </motion.div>
                            )
                        })}
                    </AnimatePresence>

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