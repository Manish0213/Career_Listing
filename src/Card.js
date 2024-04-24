import React from 'react'
import './Card.css'
const Card = ({card}) => {
  return (
    <div className='card'>
      <h2 className='card-heading'>{card.role}</h2>
      <p className='card-description'>Lead the initiation and planning of a project and ensure technical feasibility. Ensure resource availability and allocation</p>
      <div className='card-location'>
      <div>{card.location}</div>
      <div>{card.date}</div>
      </div>
      <button>Read More</button>
    </div>
  )
}

export default Card
