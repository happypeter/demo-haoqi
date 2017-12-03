import React from 'react'
import Signup from '../components/Signup'
import { setTitle } from '../actions/commonActions'
import { connect } from 'react-redux'
import { signup } from '../actions/authActions'

const SignupContainer = props => <Signup {...props} />

export default connect(null, {
  setTitle,
  signup
})(SignupContainer)
