import React, {useState, useEffect} from 'react';
import RickandMortyAPI from '../util/r&mAPI'
import SearchBar from './searchBar'
import CharacterCard from './characterCard';

function Main() {

  const [state, setState] = useState(null)
  const [searchInput, setSearchInput] = useState(null)

  useEffect( () => {
    RickandMortyAPI.fetchData().then(res => {
      setState(res)
    })
  }, [])

  function renderCards() {
    if (state && state.results.length) {
      let cards = state.results
      return cards.map( card => {
        <CharacterCard card={card} />
      })
    } else {
      return null
    }
  }

  return(
    <div className="main-container">
      <SearchBar setSearchInput={setSearchInput} />
      <button onClick={ () => {console.log(state.results[1])}} />
      {renderCards()}
    </div>
  )
}

export default Main