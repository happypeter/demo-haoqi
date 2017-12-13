import * as types from '../constants/ActionTypes'
import { COMMENTS_URL, NEW_COMMENT_URL } from '../constants/ApiConstants'
import { alert } from './commonActions'
import axios from 'axios'

const receiveComments = comments => ({
  type: types.RECEIVE_COMMENTS,
  comments
})

export const fetchComments = () => dispatch => {
  axios.get(COMMENTS_URL).then(
    res => {
      dispatch(receiveComments(res.data.comments))
    }
  )
}

export const submitCommentSuccess = comment => ({
  type: types.SUBMIT_COMMENT_SUCCESS,
  comment
})

export const addComment = ({ text, user, dish }) => {
  return dispatch => {
    if (!text.trim()) {
      dispatch(alert('您尚未填写内容'))
      return
    }
    axios.post(NEW_COMMENT_URL, { content: text, user, dish }).then(res => {
      dispatch(submitCommentSuccess(res.data.comment))
    }).catch(err => {
      console.log('err', err)
      if (err.response) { console.log('err.response', err.response.data.err) }
    })
  }
}
