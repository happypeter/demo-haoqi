import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import Orders from '../Orders/Orders'
import Dishes from '../Dishes/Dishes'
import CompletedOrders from '../CompletedOrders/CompletedOrders'
import NewDish from '../NewDish/NewDish'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

const DashboardWrap = styled.div`
  height: 100vh;
  display: flex;
`

const SideWrap = styled.div`
  flex-basis: 200px;
`

const MainWrap = styled.div`
  flex-grow: 1;
`

const TopHeader = styled.div`
  height: 60px;
  background: #404040;
`

const ContentWrap = styled.div`
 padding: 10px;
`

class Dashboard extends Component {
  state = {
    selectedKeys: [
      this.props.history.location.pathname
    ]
  }

  updateSelectedKeys = (selectedKeys) => {
    this.setState({
      selectedKeys
    })
  }
  render () {
    return (
      <DashboardWrap>
        <SideWrap>
          <Sidebar updateSelectedKeys={this.updateSelectedKeys}
            selectedKeys={this.state.selectedKeys}/>
        </SideWrap>
        <MainWrap>
          <TopHeader />
          <ContentWrap>
            <Switch>
              <Route path='/dashboard/orders/completed' component={CompletedOrders} />
              <Route path='/dashboard/orders' component={Orders} />
              <Route path='/dashboard/dishes/new' render={
                () => <NewDish updateSelectedKeys={this.updateSelectedKeys} />
              } />
              <Route path='/dashboard/dishes' component={Dishes} />
            </Switch>
          </ContentWrap>
        </MainWrap>
      </DashboardWrap>
    )
  }
}

export default withRouter(Dashboard)
