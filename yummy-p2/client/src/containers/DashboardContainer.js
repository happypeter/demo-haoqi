import React from 'react'
import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'
import { getFriendComments } from '../selectors/commentSelectors'

const DashboardContainer = props => <Dashboard {...props} />

const mapStateToProps = state => ({
  friendComments: getFriendComments(state)
})

export default connect(mapStateToProps)(DashboardContainer)
