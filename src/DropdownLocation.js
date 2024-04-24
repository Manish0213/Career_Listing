import React, { useState } from 'react'
import './DropdownLocation.css';

const DropdownLocation = ({setSelectedLocation,selectedLocation,cardData,setShowCardData}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["position", "Hubspot Developer", "Manager", "Wordpress Developer"];

  const handleOnClick = (option) => {
      setSelectedLocation(option);
      setIsActive(false);
      setShowCardData(cardData.filter((data)=>data.role===option));
      if(option==='position'){
        setShowCardData(cardData);
      }
  }

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e)=>setIsActive(!isActive)}>{selectedLocation}</div>
       {
        isActive && (
        <div className='dropdown-content'>
          {
              options.map((option)=>(
                <div
                onClick={()=>handleOnClick(option)}
                className='dropdown-item'
                >
                  {option}
              </div>
              ))
          }
        </div>
          )
        
        }
    </div>
  )
}

export default DropdownLocation
