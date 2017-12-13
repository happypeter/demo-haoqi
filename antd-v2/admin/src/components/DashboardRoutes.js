import React, { Component } from 'react'
import styled from 'styled-components'
import DishesContainer from '../containers/DishesContainer'
import NewDishContainer from '../containers/NewDishContainer'
import OrdersContainer from '../containers/OrdersContainer'
import {
  Switch,
  Route
} from 'react-router'

class DashboardRoutes extends Component {
  render () {
    const { match } = this.props
    return (
      <Wrap>
        <Switch>
          <Route exact path={`${match.url}/dishes`} component={DishesContainer} />
          <Route path={`${match.url}/dishes/new`} component={NewDishContainer} />
          <Route path={`${match.url}/orders`} component={OrdersContainer} />
          <Route render={() => <div>对不起，404 了</div>} />
        </Switch>
      </Wrap>
    )
  }
}

export default DashboardRoutes

const Wrap = styled.div``
