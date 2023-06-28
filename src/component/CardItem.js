import React from 'react'

export default function CardItem( {card} ) {
  return (
    <div>
        <h1>Name: {card.name} <br/> Content: {card.content} </h1>
    </div>
  )
}
