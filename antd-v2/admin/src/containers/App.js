import React, { Component } from 'react'
import '../assets/global.css'
import HomeContainer from './HomeContainer'
import { connect } from 'react-redux'
import { history } from '../utils/routerUtils'
import {
  Router,
  Switch,
  Route
} from 'react-router'
import { loadSelectedIndex } from '../actions/navActions'
import { fetchDishes } from '../actions/dishActions'
import DashboardContainer from '../containers/DashboardContainer'

class App extends Component {
  componentDidMount () {
    this.props.fetchDishes()
    this.props.loadSelectedIndex()
  }

  render () {
    const { isAuthenticated } = this.props
    return (
      <Router history={history} >
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/dashboard' component={DashboardContainer} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.common.isAuthenticated
})

export default connect(mapStateToProps, {
  loadSelectedIndex,
  fetchDishes
})(App)
