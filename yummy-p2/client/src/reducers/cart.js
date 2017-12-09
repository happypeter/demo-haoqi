import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const addedIds = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return state.indexOf(action.dishId) === -1
        ? [...state, action.dishId]
        : state
    case types.CHECKOUT:
      return []
    default:
      return state
  }
}

const quantityById = (state = {}, action) => {
  const { dishId } = action
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [dishId]: 1
      }
    case types.INCR_CART_ITEM:
      return {
        ...state,
        [dishId]: state[dishId] + 1
      }
    case types.DECR_CART_ITEM:
      if (state[dishId] === 0) return state
      return {
        ...state,
        [dishId]: state[dishId] - 1
      }
    case types.CHECKOUT:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  addedIds,
  quantityById
})
