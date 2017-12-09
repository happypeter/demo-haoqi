import React, { Component } from 'react'
import '../assets/global.css'
import HomeContainer from './HomeContainer'
import { fetchCurrentUser } from '../actions/authActions'
import LayoutContainer from './LayoutContainer'
import { fetchUsers } from '../actions/userActions'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { history } from '../utils/routerUtils'
import {
  Switch,
  Route
} from 'react-router-dom'
import { fetchDishes } from '../actions/dishActions'
import { fetchComments } from '../actions/commentActions'

class App extends Component {
  componentDidMount () {
    this.props.fetchUsers()
    this.props.fetchCurrentUser()
    this.props.fetchDishes()
    this.props.fetchComments()
  }

  render () {
    return (
      <Router history={history} >
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route component={LayoutContainer} />
        </Switch>
      </Router>
    )
  }
}

export default connect(null, {
  fetchUsers,
  fetchCurrentUser,
  fetchDishes,
  fetchComments
})(App)
