import React from 'react'
import './main.css'
import FileTableContainer from '../containers/FileTableContainer'
import DirMenuContainer from '../containers/DirMenuContainer'
import UploaderContainer from '../containers/UploaderContainer'
import DirCreatorContainer from '../containers/DirCreatorContainer'
import styled from 'styled-components'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout

const headerHeight = 70
const Wrap = styled.div`
  background-color: #fff;
  width: 95%;
  margin: 20px auto;
  padding: 20px;
`

const LogoWrap = styled.div`
  height: ${headerHeight}px;
  background-color: #ececec;
`

export default () => (
  <Layout
    style={{ height: '100vh' }}
  >
    <Sider
      style={{
        background: '#fff'
      }}
    >
      <LogoWrap />
      <DirMenuContainer />
      <DirCreatorContainer />
    </Sider>
    <Layout>
      <Header style={{ height: `${headerHeight}px` }}>
      </Header>
      <Content>
        <Wrap>
          <UploaderContainer />
        </Wrap>
        <Wrap>
          <FileTableContainer />
        </Wrap>
      </Content>
    </Layout>
  </Layout>
)
