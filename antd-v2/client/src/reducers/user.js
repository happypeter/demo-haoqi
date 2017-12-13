import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_USERS:
      return action.users
    case types.UPDATE_USER:
      return state.map(user => {
        if (user._id === action.user._id) {
          return action.user
        }
        return user
      })
    default:
      return state
  }
}

export default combineReducers({
  all
})
