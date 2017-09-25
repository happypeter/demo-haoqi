import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'

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

class Dashboard extends Component {
  render () {
    return (
      <DashboardWrap>
        <SideWrap>
          <Sidebar />
        </SideWrap>
        <MainWrap>
          <TopHeader />
          MainWrap
        </MainWrap>
      </DashboardWrap>
    )
  }
}

export default Dashboard
