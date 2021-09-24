import PropTypes from 'prop-types';

function CharacterCard(props) {

  const {card} = props
  return (
    <div className="card-container">
      {console.log(card)}
      <img className="card-avatar"src={card.image} alt="img" />
      <h4 className="character-name">{card.name}</h4>
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