import { createSelector } from 'reselect'
import { getCurrentUser } from './authSelectors'

export const getComments = state => state.comment.all

export const getCommentsByDishId = createSelector(
  getComments,
  comments => comments.reduce((obj, comment) => {
    if (obj[comment.dish._id]) {
      obj[comment.dish._id].push(comment)
    } else {
      obj[comment.dish._id] = [comment]
    }
    return obj
  }, {})
)

export const getFriendComments = createSelector(
  getComments,
  getCurrentUser,
  (comments, currentUser) => comments.filter(comment => {
    return currentUser.followings && currentUser.followings.includes(comment.user._id)
  })
)
