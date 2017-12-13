import React from 'react'
import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'

const DashboardContainer = props => <Dashboard {...props} />

const mapStateToProps = state => ({ })

export default connect(mapStateToProps)(DashboardContainer)
