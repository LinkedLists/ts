import React from 'react';
import RickandMortyAPI from '../util/r&mAPI'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    RickandMortyAPI.fetchData().then(res => {
      console.log(res)
    })
  }

  render() {
    return(
      <div className="main-container">
      </div>
    )
  }
}

export default Main