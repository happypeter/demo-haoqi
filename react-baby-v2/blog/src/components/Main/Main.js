import React, { Component } from 'react'
import Post from '../Post/Post'
import Home from '../Home/Home'
import {
  Route
} from 'react-router-dom'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={Post} />
      </div>
    )
  }
}

export default Main
