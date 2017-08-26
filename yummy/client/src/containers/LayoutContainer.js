import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import {
  Switch,
  Route
} from 'react-router-dom'

class LayoutContainer extends Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default LayoutContainer
