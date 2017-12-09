import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (isAuthenticated) {
      return <Component />
    } else {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    }
  }} />
)
