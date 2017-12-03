import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_USERS:
      return action.users
    default:
      return state
  }
}

export default combineReducers({
  all
})
