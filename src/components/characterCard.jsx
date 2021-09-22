import PropTypes from 'prop-types';

function CharacterCard(props) {

  const {card} = props
  return (
    <img src={card.image} alt="img" />
  )
}

CharacterCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default CharacterCard