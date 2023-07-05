import { useContext, useEffect } from "react"
import dataContext from "../context/dataContext"
import TableItem from "../component/TableItem"
import AddTableItem from "../component/AddTableItem";
import AddTableSection from "../component/AddTableSection";
import { motion, AnimatePresence } from "framer-motion"

export default function Tables() {

    const {data, setTheme, addTableMode} = useContext(dataContext);

    useEffect(() => {
        setTheme("#25292e", "");
    })

    return (
        <div className="w-[700px] rounded-2xl bg-[#070707] relative transition-all">
            <div className="w-full h-20 flex justify-start items-center pl-10">
                <h1 className="text-[50px] text-[#ffffffae]">Tables</h1>
            </div>
    
            <div className="w-full flex justify-center flex-wrap gap-3 p-10 pr-10 pl-10">
                <AnimatePresence>
                    {data.map((table) => {
                        return (
                            <motion.div
                                key={table.id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                <TableItem key={table.id} table={table} />
                            </motion.div>
                        )
                    })}
                </AnimatePresence>

                <AddTableItem />
            </div>

            {addTableMode ? <AddTableSection /> : ""}

        </div>
    )
}
