import React, { Component } from 'react'
import './home.css'
import DogIcon from '../DogIcon/DogIcon'

class Home extends Component {
  state = {
    dogs: []
  }
  render () {
    const dogList = this.state.dogs.map(t => (
      <div key={t.id} className='dog-icon-wrap'>
        <DogIcon  dog={t} />
      </div>
    ))
    return (
      <div className='home'>
        <div className='dog-list'>
          {dogList}
        </div>
      </div>
    )
  }
}

export default Home
