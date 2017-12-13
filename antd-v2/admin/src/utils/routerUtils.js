import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import DashboardContainer from '../containers/DashboardContainer'

export const history = createBrowserHistory()

export const PrivateRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Route path='/dashboard' component={DashboardContainer} />
  } else {
    return <Redirect to='/' />
  }
}
