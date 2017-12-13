import {
  LOGIN_URL,
  SIGNUP_URL,
  USER_BY_ID_URL
} from '../constants/ApiConstants'
import axios from 'axios'
import { getReferrer } from '../selectors/commonSelectors'
import { alert } from './commonActions'
import * as types from '../constants/ActionTypes'
import { history } from '../utils/routerUtils'

export const signup = data => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  axios.post(SIGNUP_URL, data).then(res => {
    dispatch({ type: types.SIGNUP_SUCCESS, user: res.data.user })
    window.localStorage.setItem('userId', res.data.user._id)
    history.push('/dashboard')
  }).catch(err => {
    if (err.response) {
      dispatch({ type: types.SIGNUP_FAILURE })
      const { msg } = err.response.data
      console.log(msg)
      dispatch(alert(msg))
    }
  })
}

const clearReferrer = () => ({
  type: 'CLEAR_REFERRER'
})

export const login = data => {
  return (dispatch, getState) => {
    dispatch({ type: types.LOGIN_REQUEST })
    axios.post(LOGIN_URL, data).then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, user: res.data.user })
      window.localStorage.setItem('userId', res.data.user._id)
      const referrer = getReferrer(getState())
      referrer && dispatch(clearReferrer())
      const redirectTo = referrer || '/dashboard'
      history.push(redirectTo)
    }).catch(
      err => {
        if (err.response) {
          dispatch({ type: types.LOGIN_FAILURE })
          const { msg } = err.response.data
          console.log(msg)
          dispatch(alert(msg))
        }
      }
    )
  }
}

export const logout = () => {
  history.push('/')
  window.localStorage.removeItem('userId')
  return dispatch => dispatch({ type: types.LOGOUT })
}

const receiveCurrentUser = user => ({
  type: types.RECEIVE_CURRENT_USER,
  user
})

export const fetchCurrentUser = () => dispatch => {
  const id = window.localStorage.getItem('userId')
  if (id) {
    axios.get(USER_BY_ID_URL.replace(':id', id)).then(
      res => {
        dispatch(receiveCurrentUser(res.data.user))
      }
    )
  }
}
