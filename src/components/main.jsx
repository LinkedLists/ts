import React, {useState, useEffect} from 'react';
import RickandMortyAPI from '../util/r&mAPI'
import SearchBar from './searchBar'

function Main() {

  const [state, setState] = useState(null)
  const [searchInput, setSearchInput] = useState(null)

  useEffect( () => {
    console.log("fetching")
    RickandMortyAPI.fetchData().then(res => {
      setState(res)
    })
  }, [])

  return(
    <div className="main-container">
      {console.log(searchInput)}
      <SearchBar setSearchInput={setSearchInput} />
      <button onClick={ () => {console.log(searchInput)}} />
    </div>
  )
}

export default Main