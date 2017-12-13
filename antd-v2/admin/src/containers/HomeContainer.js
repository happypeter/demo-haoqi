import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({ })

export default connect(mapStateToProps, {
  login
})(HomeContainer)
