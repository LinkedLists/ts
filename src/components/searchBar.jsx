import PropTypes from 'prop-types';

function SearchBar(props) {

  const {setSearchInput} = props

  return (
    <input 
      className="search-bar" 
      placeholder="Search by character name" 
      onChange={ e => setSearchInput(e.target.value.toLowerCase().trim()) }/>
  )
}

SearchBar.propTypes = {
  setSearchInput: PropTypes.func.isRequired
}

export default SearchBar