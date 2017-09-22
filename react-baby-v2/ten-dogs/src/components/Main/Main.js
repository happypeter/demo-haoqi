import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../Home/Home'
import Dog from '../Dog/Dog'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/dog/:id' component={Dog} />
        </div>
      </Router>
    )
  }
}

export default Main
