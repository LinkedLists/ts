import React, {useState, useEffect} from 'react';
import RickandMortyAPI from '../util/r&mAPI'

function Main() {
  // function setData(res) {
  //   setState(res)
  // }
  
  // const [state, setState] = useState( () => {
    //   RickandMortyAPI.fetchData().then(res => {
      //     setData(res)
      //   })
  // })
      
  const [state, setState] = useState(null)

  useEffect( () => {
    console.log("fetching")
    RickandMortyAPI.fetchData().then(res => {
      setState(res)
    })
  }, [])

  return(
    <div className="main-container">
      {console.log(state)}
      <button onClick={ () => {console.log(state.results)}} />
    </div>
  )
}

export default Main