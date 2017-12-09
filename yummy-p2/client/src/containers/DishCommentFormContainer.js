import React from 'react'
import DishCommentForm from '../components/DishCommentForm'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIsAuthenticated, getCurrentUserId } from '../selectors/authSelectors'
import { addComment } from '../actions/commentActions'

const DishCommentFormContainer = props => <DishCommentForm {...props} />

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  currentUserId: getCurrentUserId(state)
})

export default connect(mapStateToProps, {
  addComment
})(withRouter(DishCommentFormContainer))
