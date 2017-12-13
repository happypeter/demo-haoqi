import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_COMMENTS:
      return action.comments
    case types.SUBMIT_COMMENT_SUCCESS:
      return [
        ...state,
        action.comment
      ]
    default:
      return state
  }
}

export default combineReducers({
  all
})
