import React, { Component } from 'react'
import './home.css'
import DogIcon from '../DogIcon/DogIcon'
import axios from 'axios'

class Home extends Component {
  state = {
    dogs: []
  }

  componentDidMount () {
    axios.get('http://localhost:3008/dogs').then( res => {
      this.setState({
        dogs: res.data
      })
    })
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
