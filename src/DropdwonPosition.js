import React, { useState } from 'react'
import './DropdownLocation.css';

const DropdwonPosition = ({setSelected,selected,cardData,setShowCardData}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["location", "Washington", "London", "Amsterdam"];

  const handleOnClick = (option) => {
    setSelected(option);
    setIsActive(false);
    setShowCardData(cardData.filter((data)=>data.location===option));
      if(option==='location'){
        setShowCardData(cardData);
      }
  }
  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e)=>setIsActive(!isActive)}>{selected}</div>
       {
        isActive && (
        <div className='dropdown-content'>
          {
              options.map((option)=>(
                <div
                onClick={() => handleOnClick(option)}
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

export default DropdwonPosition
