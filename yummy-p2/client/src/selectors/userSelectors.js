import { createSelector } from 'reselect'

export const getUsers = state => state.user.all

export const getUsersById = createSelector(
  getUsers,
  users => users.reduce((obj, user) => {
    obj[user._id] = user
    return obj
  }, {})
)
