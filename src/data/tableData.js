import arabesque from "../assets/arabesque.png";
import arches from "../assets/arches.png";
import az_subtle from "../assets/az-subtle.png";
import { v4 as uuidv4 } from 'uuid';

var tableData = [
    {
        id: uuidv4(),
        name: "Table1",
        background: arabesque,
        color: "#1e3a8a",
        lists: [
            {
                id: uuidv4(),
                name: "List1",
                cards: [
                    {
                        id: uuidv4(),
                        name: "Card1",
                        content: "Hello this is card one."
                    },
                    {
                        id: uuidv4(),
                        name: "Card2",
                        content: "Hello this is card two."
                    },
                    {
                        id: uuidv4(),
                        name: "Card1",
                        content: "Hello this is card three."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "List2",
                cards: [
                    {
                        id: uuidv4(),
                        name: "Card1",
                        content: "Hello this is card one from list two."
                    },
                    {
                        id: uuidv4(),
                        name: "Card2",
                        content: "Hello this is card two from list two."
                    }
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Table2",
        background: arches,
        color: "#CBD5E1",
        lists: [
            {
                id: uuidv4(),
                name: "List1",
                cards: [
                    {
                        id: uuidv4(),
                        name: "Card1",
                        content: "Hello this is card one."
                    },
                    {
                        id: uuidv4(),
                        name: "Card2",
                        content: "Hello this is card two."
                    },
                    {
                        id: uuidv4(),
                        name: "Card1",
                        content: "Hello this is card three."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "List2",
                cards: [
                    {
                        id: uuidv4(),
                        name: "Card1",
                        content: "Hello this is card one from list two and table two."
                    }
                ]
            }
        ]
    },
    
]

export default tableData;