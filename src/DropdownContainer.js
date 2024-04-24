import React from 'react'
import DropdownLocation from './DropdownLocation'
import DropdwonPosition from './DropdwonPosition'
import Search from './Search'

const DropdownContainer = ({selected,setSelected,selectedLocation,setSelectedLocation,cardData,setCardData,showCardData,setShowCardData}) => {
  return (
    <div
    style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}
    >
      <DropdownLocation selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} cardData={cardData} setCardData={setCardData} showCardData={showCardData} setShowCardData={setShowCardData}/>
      <DropdwonPosition selected={selected} setSelected={setSelected} cardData={cardData} setCardData={setCardData} showCardData={showCardData} setShowCardData={setShowCardData}/>
      <Search cardData={cardData} setCardData={setCardData} showCardData={showCardData} setShowCardData={setShowCardData}/>
    </div>
  )
}

export default DropdownContainer
