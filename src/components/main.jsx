import React, {useState, useEffect} from 'react';
import RickandMortyAPI from '../util/r&mAPI'
import SearchBar from './searchBar'
import CharacterCard from './characterCard';

function Main() {

  const [state, setState] = useState(null)
  const [searchInput, setSearchInput] = useState("")

  useEffect( () => {
    RickandMortyAPI.fetchData().then(res => {
      setState(res)
    })
  }, [])

  function sortBySearch() {
    let name = ""
    let characters = []
    if (searchInput.length > 0) {
      characters = state.filter( character => {
        name = character.name.toLowerCase()
        return name.includes(searchInput)
      })
    }

    return characters
  }

  function renderCards() {
    if (state) {
      let cards = sortBySearch()
      return cards.map( card => {
        return <CharacterCard key={Math.random()} card={card} />
      })
    } else {
      return null
    }
  }

  return(
    <div className="main-container">
      <SearchBar setSearchInput={setSearchInput} />
      <div className="card-list-container">
        {renderCards()}
      </div>
    </div>
  )
}

export default Main