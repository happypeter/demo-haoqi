import React, { Component } from 'react'
import styled from 'styled-components'
import {
  withRouter
} from 'react-router-dom'

const SidebarWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LogoWrap = styled.div`
  height: 60px;
  padding-left: 24px;
  line-height: 60px;
  font-size: 16px;
  font-weight: 700;
  background: #ececec;
`

const NavWrap = styled.div`
  flex-grow: 1;
`

const LogoutWrap = styled.div`
  height: 60px;
  line-height: 60px;
  display: flex;
`

const LogoutText = styled.div`
  flex-basis: 60px;
  text-align: center;
  background: #ff8a00;
  color: white;
  cursor: pointer;
`

const Username = styled.div`
  padding-left: 10px;
  background: #ececec;
  flex-grow: 1;
  color: #212121;
`


class Sidebar extends Component {
  logout = () => {
    window.localStorage.removeItem('secret')
    this.props.history.push('/')
  }

  render () {
    return (
      <SidebarWrap>
        <LogoWrap>
          好奇后台
        </LogoWrap>
        <NavWrap>
          导航栏
        </NavWrap>
        <LogoutWrap>
          <LogoutText
            onClick={this.logout}
            >
            退出
          </LogoutText>
          <Username>
            Admin
          </Username>
        </LogoutWrap>
      </SidebarWrap>
    )
  }
}

export default withRouter(Sidebar)
