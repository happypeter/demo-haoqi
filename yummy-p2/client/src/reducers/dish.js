import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_DISHES:
      return action.dishes
    default:
      return state
  }
}

export default combineReducers({
  all
})
