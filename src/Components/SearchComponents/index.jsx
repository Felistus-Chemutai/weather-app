import React from 'react'
import "./search-components.css";

function SearchComponent({searchText, handleChange, handleKeyDown}) {
  return (
    <div className='search-component'>
        <input type="text" value={searchText} onChange={handleChange}  onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default SearchComponent