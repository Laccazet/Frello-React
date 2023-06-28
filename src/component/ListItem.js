import CardItem from "./CardItem"

export default function ListItem( {name, cards} ) {
  return (
    <div className='bg-slate-700 w-[400px] h-[600px]'>
        
        <div className='w-full h-[10%] mb-10'>
            <h1 className='text-[35px]'>{name}</h1>
        </div>

        <div className='w-full h-[90%] flex flex-col gap-20'>
            {cards.map(card => {
                return <CardItem key={card.id} card={card} />
            })}
        </div>

    </div>
  )
}
