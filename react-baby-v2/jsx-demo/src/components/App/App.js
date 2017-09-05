import React, { Component } from 'react'
import './app.css'

class App extends Component {
  render () {
    let name = 'happypeter'
    return (
      <div className='app'>
        <div className='header'>
          header
        </div>
        <div className='main'>
          {name}
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    )
  }
}

export default App
