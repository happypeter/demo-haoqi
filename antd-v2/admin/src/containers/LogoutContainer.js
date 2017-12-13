import React from 'react'
import Logout from '../components/Logout'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

const LogoutContainer = props => <Logout {...props} />

const mapStateToProps = state => ({ })

export default connect(mapStateToProps, {
  logout
})(LogoutContainer)
