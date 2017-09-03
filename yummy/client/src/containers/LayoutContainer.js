import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer'
import DishContainer from './DishContainer'
import DishesContainer from './DishesContainer'
import DashboardContainer from './DashboardContainer'
import ProfileContainer from './ProfileContainer'
import Layout from '../components/Layout/Layout'
import NotFound from '../components/NotFound'
import CartButtonContainer from './CartButtonContainer'
import CartContainer from './CartContainer'
import {
  Switch,
  Route
} from 'react-router-dom'

class LayoutContainer extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/login' component={LoginContainer} />
            <Route path='/signup' component={SignupContainer} />
            <Route path='/dish' component={DishContainer} />
            <Route path='/dishes' component={DishesContainer} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/dashboard' component={DashboardContainer} />
            <Route path='/cart' component={CartContainer} />
            <Route component={NotFound} />
          </Switch>
          <CartButtonContainer />
        </Layout>
      </div>
    )
  }
}

export default LayoutContainer
