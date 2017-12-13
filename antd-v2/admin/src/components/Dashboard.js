import React, { Component } from 'react'
import LogoutContainer from '../containers/LogoutContainer'
import NavContainer from '../containers/NavContainer'
import styled from 'styled-components'
import Routes from './DashboardRoutes'

class Dashboard extends Component {
  render () {
    return (
      <Wrap>
        <Sider>
          <LogoWrap>吮指店铺</LogoWrap>
          <NavWrap>
            <NavContainer />
          </NavWrap>
          <LogoutWrap>
            <LogoutContainer />
          </LogoutWrap>
        </Sider>
        <Content>
          <Header />
          <Routes {...this.props} />
        </Content>
      </Wrap>
    )
  }
}

export default Dashboard

const Wrap = styled.div`
  height: 100vh;
  display: flex;
`

const Sider = styled.div`
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex-grow: 1;
`

const LogoWrap = styled.div`
  height: 60px;
  background: #ececec;
  text-align: center;
  font-size: 20px;
  line-height: 60px;
`

const NavWrap = styled.div`
  flex-grow: 1;
`

const LogoutWrap = styled.div`
  height: 60px;
  background: #ececec;
`

const Header = styled.div`
  height: 60px;
  background: #212121;
`
