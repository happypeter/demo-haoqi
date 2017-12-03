import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import SignupContainer from '../containers/SignupContainer'
import AlertBoxContainer from '../containers/AlertBoxContainer'
import SidebarContainer from '../containers/SidebarContainer'
import SettingsContainer from '../containers/SettingsContainer'
import { PrivateRoute } from '../utils/routerUtils'
import {
  Switch,
  Route
} from 'react-router-dom'
import styled from 'styled-components'

const Layout = ({ title, showAlert, isAuthenticated }) => (
  <Wrap>
   { showAlert &&  <AlertBoxContainer /> }
   <SidebarContainer />
    <Header>
      {title}
    </Header>
    <Main>
      <MainInner>
        <Switch>
          <Route path='/signup' component={SignupContainer} />
          <Route path='/login' component={LoginContainer} />
          <PrivateRoute isAuthenticated={isAuthenticated} path='/settings' component={SettingsContainer} />
        </Switch>
      </MainInner>
    </Main>
  </Wrap>
)

export default Layout

const Wrap = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  height: 80px;
  padding-top: 45px;
  line-height: 14px;
  padding-bottom: 21px;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
`

const Main = styled.div`
  flex-grow: 1;
  position: relative;
`

const MainInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
