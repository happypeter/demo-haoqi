import React from 'react'
import Sidebar from '../components/Sidebar'
import { getIsAuthenticated, getCurrentUser } from '../selectors/authSelectors'
import { logout } from '../actions/authActions'
import { connect } from 'react-redux'

const SidebarContainer = props => <Sidebar {...props} />

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, {
  logout
})(SidebarContainer)
