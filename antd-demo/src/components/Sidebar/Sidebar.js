import React, { Component } from 'react'
import styled from 'styled-components'

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
  background: #ececec;
`

class Sidebar extends Component {
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
          退出
        </LogoutWrap>
      </SidebarWrap>
    )
  }
}

export default Sidebar
