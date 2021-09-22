import React, {useState, useEffect} from 'react';


function SearchBar(props) {

  const {setSearchInput} = props

  return (
    <input placeholder="Enter some text" onChange={ e => setSearchInput(e.target.value) }/>
  )
}



export default SearchBar