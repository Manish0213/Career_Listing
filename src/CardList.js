import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({showCardData}) => {
  return (
    <div className='grid-container'>
        {
            showCardData.map((card)=>(            
                <Card card={card}/>
            ))
        }   
    </div>
  )
}

export default CardList
