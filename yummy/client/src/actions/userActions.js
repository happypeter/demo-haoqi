import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { USERS_URL } from '../constants/ApiConstants'

export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
})

export const fetchUsers = () => dispatch => {
  axios.get(USERS_URL).then(
    res => {
      dispatch(receiveUsers(res.data.users))
    }
  )
}
