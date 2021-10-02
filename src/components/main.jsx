import React, {useState, useEffect} from 'react';
import RickandMortyAPI from '../util/r&mAPI'
import SearchBar from './searchBar'
import CharacterCard from './characterCard';

function Main() {

  const [state, setState] = useState(null)
  const [searchInput, setSearchInput] = useState("")

  useEffect( () => {
    // RickandMortyAPI.fetchAllCharacters().then(res => {
    //   setState(res)
    // })
    RickandMortyAPI.fetchData().then(res => {
      setState(res)
      // console.log(res)
    })
    // console.log(RickandMortyAPI.fetchData())
  }, [])

  function sortBySearch() {
    let name = ""
    // let characters = [...state.results]
    let characters= []
    console.log(state)
    if (searchInput.length > 0) {
      characters = characters.filter( character => {
        name = character.name.toLowerCase()
        return name.includes(searchInput)
      })
    }

    return characters
  }

  function renderCards() {
    // console.log(state)
    if (state) {
    // if (state && state.results.length) {
      // let cards = state.results
      let cards = sortBySearch()
      return cards.map( card => {
        return <CharacterCard card={card} />
      })
    } else {
      return null
    }
  }

  return(
    <div className="main-container">
      <SearchBar setSearchInput={setSearchInput} />
      {/* <button onClick={ () => {console.log(state.results[1])}} /> */}

      <div className="card-list-container">
        {renderCards()}
      </div>
    </div>
  )
}

export default Main