import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { USERS_URL, UPDATE_AVATAR_URL, FOLLOW_URL, UNFOLLOW_URL } from '../constants/ApiConstants'
import { getCurrentUserId } from '../selectors/authSelectors'
import { alert } from './commonActions'

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

const updateUser = (user) => ({
  type: types.UPDATE_USER, user
})

const sendAvatarRequest = (formData, dispatch) => {
  axios.post(UPDATE_AVATAR_URL, formData).then(
    res => {
      dispatch(updateUser(res.data.user))
    }
  )
}

const checkFile = (file, dispatch) => {
  if (!file.type.match('image.*')) {
    dispatch(alert('请上传图片类型的文件'))
    return false
  } else if (parseInt(file.size / 1024, 10) > 1024) {
    // 注意：手机上拍照上传会失败，是因为 niginx 对上传文件的大小是有限制的，
    // 最大就是 1M ，可以通过修改 /etc/nginx/site-enabled/xxx.conf 文件来解决
    const err = `请不要上传大于 1M 的图片，当前图片 ${parseInt(file.size / 1024, 10)}K`
    dispatch(alert(err))
    return false
  } else {
    return true
  }
}

export const updateAvatar = e => (dispatch, getState) => {
  const file = e.target.files[0]
  if (!checkFile(file, dispatch)) return
  const reader = new window.FileReader()
  let formData = new window.FormData()
  const userId = getCurrentUserId(getState())
  reader.onload = e => {
    formData.append('userId', userId)
    formData.append('avatar', file)
    sendAvatarRequest(formData, dispatch)
  }
  reader.readAsDataURL(file)
}

export const unfollow = userId => (dispatch, getState) => {
  const state = getState()
  const currentUserId = getCurrentUserId(state)
  let data = {
    userId,
    currentUserId
  }
  console.log('unfollow', data)
  axios.post(UNFOLLOW_URL, data).then(
    res => {
      dispatch(updateUser(res.data.user))
    }
  )
}

export const follow = userId => (dispatch, getState) => {
  const state = getState()
  const currentUserId = getCurrentUserId(state)
  let data = {
    userId,
    currentUserId
  }
  axios.post(FOLLOW_URL, data).then(
    res => {
      dispatch(updateUser(res.data.user))
    }
  )
}
