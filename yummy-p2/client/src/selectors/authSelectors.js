import { createSelector } from 'reselect'
import { getUsersById, getUsers } from './userSelectors'

export const getCurrentUserId = state => state.auth.currentUserId

export const getCurrentUser = createSelector(
  getUsersById,
  getCurrentUserId,
  (users, currentUserId) => users[currentUserId] || {}
)

export const getFriends = createSelector(
  getCurrentUser,
  getUsers,
  (currentUser, users) =>
    users.filter(
      user => {
        return currentUser.followings
        ? currentUser.followings.includes(user._id)
        : []
      }
    )
)

export const getIsAuthenticated = state => state.auth.isAuthenticated
export const getIsAuthFetching = state => state.auth.isFetching
