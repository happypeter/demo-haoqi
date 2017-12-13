import React from 'react'
import Settings from '../components/Settings'
import { getFriends } from '../selectors/authSelectors'
import { connect } from 'react-redux'

const SettingsContainer = props => <Settings {...props} />

const mapStateToProps = (state) => ({
  friends: getFriends(state)
})

export default connect(mapStateToProps)(SettingsContainer)
