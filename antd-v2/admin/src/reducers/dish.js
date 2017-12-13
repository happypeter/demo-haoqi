import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_DISHES:
      return action.dishes
    case types.REMOVE_DISH:
      return state.filter(dish => dish._id !== action.id)
    case types.ADD_DISH:
      return [ ...state, action.dish ]
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_DISHES:
      return true
    case types.RECEIVE_DISHES:
      return false
    default:
      return state
  }
}

const poster = (state = '', action) => {
  switch (action.type) {
    case types.SET_POSTER:
      return action.poster
    case types.ADD_DISH:
      return ''
    default:
      return state
  }
}

export default combineReducers({
  all,
  isFetching,
  poster
})
