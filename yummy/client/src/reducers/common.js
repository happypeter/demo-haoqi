import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const title = (state='', action) => {
  switch (action.type) {
    case types.SET_TITLE:
      return action.title
    default:
      return state
  }
}

const initAlert = {
  show: false,
  msg: ''
}

const alert = (state=initAlert, action) => {
  switch (action.type) {
    case types.ALERT:
      return { show: true, msg: action.msg }
    case types.HIDE_ALERT:
       return { show: false, msg: '' }
    default:
      return state
  }
}

const referrer = (state='', action) => {
  switch (action.type) {
    case types.SET_REFERRER:
      return action.referrer
    case types.CLEAR_REFERRER:
      return ''
    default:
      return state
  }
}

export default combineReducers({
  title,
  alert,
  referrer
})
