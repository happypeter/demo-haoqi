import { createSelector } from 'reselect'
import { getUsersById } from './userSelectors'

export const getCurrentUserId = state => state.auth.currentUserId

export const getCurrentUser = createSelector(
  getUsersById,
  getCurrentUserId,
  (users, currentUserId) => users[currentUserId] || {}
)

export const getIsAuthenticated = state => state.auth.isAuthenticated
export const getIsAuthFetching = state => state.auth.isFetching
