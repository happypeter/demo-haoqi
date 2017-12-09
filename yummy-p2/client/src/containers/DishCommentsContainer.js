import React from 'react'
import DishComments from '../components/DishComments'
import { getCommentsByDishId } from '../selectors/commentSelectors'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const DishCommentsContainer = props => <DishComments {...props} />

const mapStateToProps = state => ({
  commentsByDishId: getCommentsByDishId(state)
})

export default connect(mapStateToProps)(withRouter(DishCommentsContainer))
