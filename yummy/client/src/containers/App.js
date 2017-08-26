import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomeContainer from './HomeContainer'
import LayoutContainer from './LayoutContainer'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route component={LayoutContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
