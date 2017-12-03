import React from 'react'
import Login from '../components/Login'
import { setTitle, setReferrerIfNeeded } from '../actions/commonActions'
import { getIsAuthFetching } from '../selectors/authSelectors'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'

const LoginContainer = props => <Login {...props} />

const mapStateToProps = state => ({
  isFetching: getIsAuthFetching(state)
})

export default connect(mapStateToProps, {
  setTitle,
  login,
  setReferrerIfNeeded
})(LoginContainer)
