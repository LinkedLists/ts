import PropTypes from 'prop-types';

function CharacterCard(props) {

  const {card} = props

  function setStatusColor() {
    if (card.status === 'Alive') {
      return {
        background: 'green',
        color: 'white'
      }
    }
    else if (card.status === 'Dead') {
      return {
        background: 'red'
      }
    } else {
      return {
        background: 'grey',
        color: 'white'
      }
    }
  }

  return (
    <div className="card-container">
      <img className="card-avatar"src={card.image} alt="img" />
      <h3 className="character-name">{card.name}</h3>

      <div className="character-info">
        <div className="left-info">
          <div className="origin">Origin - {card.origin.name}</div>
          <div className="species">{card.species}</div>
          <div className="loca">Location - {card.location.name}</div>
        </div>
        <div className="right">
          <div className="status" style={setStatusColor()}>{card.status}</div>
        </div>
      </div>
    </div>
  )
}

// *********************************
// CARD FORMAT
// created: "2017-11-04T20:06:54.976Z"
// episode: ['https://rickandmortyapi.com/api/episode/24']
// gender: "Male"
// id: 9
// image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
// location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
// name: "Agency Director"
// origin: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
// species: "Human"
// status: "Dead"
// type: ""
// url: "https://rickandmortyapi.com/api/character/9"
// *********************************


CharacterCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default CharacterCard