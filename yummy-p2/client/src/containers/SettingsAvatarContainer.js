import React from 'react'
import SettingsAvatar from '../components/SettingsAvatar'
import { getCurrentUser } from '../selectors/authSelectors'
import { connect } from 'react-redux'
import { updateAvatar } from '../actions/userActions'

const SettingsAvatarContainer = props => <SettingsAvatar {...props} />

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, {
  updateAvatar
})(SettingsAvatarContainer)
