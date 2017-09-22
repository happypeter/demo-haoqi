import React, { Component } from 'react'
import './home.css'
import DogIcon from '../DogIcon/DogIcon'

class Home extends Component {
  state = {
    dogs: [
      {
        id: 1,
        imgUrl: 'https://github.com/happypeter/demo-haoqi/blob/master/react-baby-v2/ten-dogs/img/dog1.jpg?raw=true'
      },
      {
        id: 2,
        imgUrl: 'https://github.com/happypeter/demo-haoqi/blob/master/react-baby-v2/ten-dogs/img/dog2.jpg?raw=true'
      },
      {
        id: 3,
        imgUrl: 'https://github.com/happypeter/demo-haoqi/blob/master/react-baby-v2/ten-dogs/img/dog3.jpg?raw=true'
      },
      {
        id: 4,
        imgUrl: 'https://github.com/happypeter/demo-haoqi/blob/master/react-baby-v2/ten-dogs/img/dog4.jpg?raw=true'
      },
      {
        id: 5,
        imgUrl: 'https://github.com/happypeter/demo-haoqi/blob/master/react-baby-v2/ten-dogs/img/dog5.jpg?raw=true'
      },
      {
        id: 6,
        imgUrl: 'https://github.com/happypeter/demo-haoqi/blob/master/react-baby-v2/ten-dogs/img/dog6.jpg?raw=true'
      }
    ]
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
