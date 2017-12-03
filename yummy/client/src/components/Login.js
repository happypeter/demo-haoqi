import React, { Component } from 'react'
import { loginConfig } from '../constants/FormConfig'
import Form from './Form'
import Spinner from 'react-spinner'
import styled from 'styled-components'

class Login extends Component {
  componentDidMount () {
    this.props.setTitle('登录')
    this.props.setReferrerIfNeeded(this.props.location)
  }

  render () {
    const { isFetching } = this.props
    return (
      <Wrap>
        {
          isFetching ? <Spinner /> :
          <Form
            config={loginConfig}
            onFormSubmit={this.props.login}
          />
        }
      </Wrap>
    )
  }
}

export default Login

const Wrap = styled.div`
  height: 100%;
`
