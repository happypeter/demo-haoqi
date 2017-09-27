import React, { Component } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' render={() => {
            return window.localStorage.getItem('secret')
              ? <Dashboard /> : <Redirect to='/' />
          }
        } />
      </div>
    )
  }
}

export default Main
