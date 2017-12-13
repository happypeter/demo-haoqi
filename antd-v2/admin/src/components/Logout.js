import React, { Component } from 'react'
import styled from 'styled-components'
import { message } from 'antd'

class Logout extends Component {
  handleClick = () => {
    this.props.logout().then(
      data => message.success(data)
    )
  }

  render () {
    return (
      <Wrap>
        <LogoutText onClick={this.handleClick}>
          退出
        </LogoutText>
        <UserName>
          admin
        </UserName>
      </Wrap>
    )
  }
}

export default Logout

const Wrap = styled.div`
  height: 60px;
  line-height: 60px;
  background: #ececec;
  display: flex;
`

const LogoutText = styled.div`
  text-align: center;
  flex-basis: 50px;
  background: #ff8a00;
  color: white;
  cursor: pointer;
`

const UserName = styled.div`
  padding-left: 10px;
`
