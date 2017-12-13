import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const isAuthenticated = (state = true, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true
    default:
      return state
  }
}

const selectedIndex = (state = '/dashboard/dishes', action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_INDEX:
      return action.index
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
  selectedIndex
})
