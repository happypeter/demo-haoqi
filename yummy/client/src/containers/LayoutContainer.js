import React from 'react'
import Layout from '../components/Layout'
import { getTitle, getShowAlert } from '../selectors/commonSelectors'
import { getIsAuthenticated } from '../selectors/authSelectors'
import { connect } from 'react-redux'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  title: getTitle(state),
  showAlert: getShowAlert(state),
  isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(LayoutContainer)
