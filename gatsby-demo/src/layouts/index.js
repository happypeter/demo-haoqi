import React from 'react'
import Link from 'gatsby-link'
import '../assets/global.css'
import styled from 'styled-components'

export default ({ children }) => {
  return (
    <Wrap>
      <Header>
        <Link to='/'>首页</Link>
      </Header>
      <MainWrap>
        <Inner>
          {children()}
        </Inner>
      </MainWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainWrap = styled.div`
  flex-grow: 1;
  position: relative;
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Header = styled.div`
  line-height: 40px;
  padding: 10px;
  background: #00bcd4;
  a {
    color: white;
  }
`
