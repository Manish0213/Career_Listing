import React, { useState } from 'react'
import './Search.css'
const Search = ({cardData, setCardData, showCardData, setShowCardData}) => {
    const [value,setValue] = useState();

    const handleOnChange = (e) => {
        const searchTerm = e.target.value;
        setValue(searchTerm);
        setShowCardData(cardData.filter(data =>
            data.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.role.toLowerCase().includes(searchTerm.toLowerCase())
          ));
    }
  return (
        <input type="text" className='search' placeholder='Insert Keyword' onChange={handleOnChange} value={value}/>
  )
}

export default Search
