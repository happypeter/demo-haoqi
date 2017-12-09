import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const initAuthState = !!window.localStorage.getItem('userId')

const isAuthenticated = (state = initAuthState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
    case types.RECEIVE_CURRENT_USER:
      return true
    case types.LOGOUT:
      return false
    default:
      return state
  }
}

const currentUserId = (state = '', action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
    case types.RECEIVE_CURRENT_USER:
      return action.user._id
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.SIGNUP_REQUEST:
      return true
    case types.LOGIN_SUCCESS:
    case types.RECEIVE_CURRENT_USER:
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_FAILURE:
    case types.SIGNUP_FAILURE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
  currentUserId,
  isFetching
})
