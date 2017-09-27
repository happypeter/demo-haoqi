import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import styled from 'styled-components'
import Settings from '../../settings'

const FormWrap = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  width: 350px;
  margin: 100px auto;
`

class Home extends Component {

  login = () => {
    const { secret } = Settings.user
    window.localStorage.setItem('secret', secret)
    this.props.history.push('/dashboard/dishes')
  }

  render () {
    return (
      <div className='home'>
        <FormWrap>
          <LoginForm onLogin={this.login}/>
        </FormWrap>
      </div>
    )
  }
}

export default Home
