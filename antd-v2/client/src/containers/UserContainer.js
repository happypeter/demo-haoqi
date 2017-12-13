import React from 'react'
import User from '../components/User'
import { connect } from 'react-redux'
import { getUsersById } from '../selectors/userSelectors'
import { getCurrentUser } from '../selectors/authSelectors'
import { follow, unfollow } from '../actions/userActions'

const UserContainer = props => <User {...props} />

const mapStateToProps = (state) => ({
  usersById: getUsersById(state),
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, {
  follow,
  unfollow
})(UserContainer)
