import PropTypes from 'prop-types';

function SearchBar(props) {

  const {setSearchInput} = props

  return (
    <input className="search-bar" placeholder="Enter some text" onChange={ e => setSearchInput(e.target.value) }/>
  )
}

SearchBar.propTypes = {
  setSearchInput: PropTypes.func.isRequired
}

export default SearchBar