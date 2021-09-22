import PropTypes from 'prop-types';

function CharacterCard(props) {

  const {card} = props
  return (
    <div>
      {card}
    </div>
  )
}

CharacterCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default CharacterCard