import React, {useState, useEffect} from 'react';
import RickandMortyAPI from '../util/r&mAPI'

function Main() {

  const [state, setState] = useState( 
    RickandMortyAPI.fetchData().then(res => {return res})
  )

  useEffect( () => {
    // setState(RickandMortyAPI.fetchData())
  })

  

  return(
    <div className="main-container">
      {console.log(state)}
      <button onClick={ () => {console.log(state)}} />
    </div>
  )
}

export default Main