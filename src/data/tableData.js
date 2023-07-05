import arabesque from "../assets/arabesque.png";
import arches from "../assets/arches.png";
import { v4 as uuidv4 } from 'uuid';

var tableData = [
    {
        id: uuidv4(),
        name: "Things to do in tree house.",
        background: arches,
        color: "#4ABDF8",
        lists: [
            {
                id: uuidv4(),
                name: "BMO",
                cards: [
                    {
                        id: uuidv4(),
                        content: "BMO wants a magnifying glass."
                    },
                    {
                        id: uuidv4(),
                        content: "Dancing bug asked about BMO."
                    },
                    {
                        id: uuidv4(),
                        content: "BMO needs a new pair of batteries."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Jack",
                cards: [
                    {
                        id: uuidv4(),
                        content: "Jack asked me for lobster spirit."
                    },
                    {
                        id: uuidv4(),
                        content: "Jack is worried about his children, I need to comfort him."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Finn (Myself)",
                cards: [
                    {
                        id: uuidv4(),
                        content: "I need a new sword."
                    },
                    {
                        id: uuidv4(),
                        content: "I want to learn to play the guitar like Marceline."
                    },
                    {
                        id: uuidv4(),
                        content: "I have to find a new adventure for each day of the next month."
                    },
                    {
                        id: uuidv4(),
                        content: "In order not to forget my mother's face, I must paint a painting of her."
                    },
                    {
                        id: uuidv4(),
                        content: "I have to find true love."
                    }
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Candy Kingdom quests",
        background: arabesque,
        color: "#EBA0A0",
        lists: [
            {
                id: uuidv4(),
                name: "Princess Bubblegum",
                cards: [
                    {
                        id: uuidv4(),
                        content: "She always needs my help."
                    },
                    {
                        id: uuidv4(),
                        content: "She asked me for some ingredients for the new potions she will going to make."
                    },
                    {
                        id: uuidv4(),
                        content: "She invited me for her birthday party."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Starchy",
                cards: [
                    {
                        id: uuidv4(),
                        content: "He asked me for medicine so he could fart comfortably."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Gunter",
                cards: [
                    {
                        id: uuidv4(),
                        content: "She just say 'Wak'"
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Peppermint Butler",
                cards: [
                    {
                        id: uuidv4(),
                        content: "He asked me for the devil's blood."
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Cinnamon Bun",
                cards: [
                    {
                        id: uuidv4(),
                        content: "He asked me to teach him how to dance."
                    }
                ]
            }
        ]
    },
    
]

export default tableData;