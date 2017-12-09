import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <Wrap>
        <Hero>
          <Logo src={logo} />
          <Text>
            <Title>
              吮指
            </Title>
            <Slogan>
              享受舌尖艳遇
            </Slogan>
          </Text>
        </Hero>
        <Action>
          <Link to='/signup'>
            注册
          </Link>
          <Link to='/login'>
            登录
          </Link>
        </Action>
      </Wrap>
    )
  }
}

export default Home

const Wrap = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hero = styled.div``

const Logo = styled.img`
  display: block;
  width: 120px;
  margin: 72px auto;
}
`

const Text = styled.div`
  height: 100px;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.8;
`

const Title = styled.div`
  font-size: 40px;
`

const Slogan = styled.div`
  opacity: 0.8;
  font-size: 20px;
`

const Action = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 80px 0;
  a {
    display: block;
    font-size: 14px;
    color: #F77062;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);
    border-radius: 2px;
    text-align: center;
    width: 150px;
    line-height: 56px;
    min-height: 56px;
  }
`
