import * as types from '../constants/ActionTypes'

export const setTitle = title => dispatch => {
  dispatch({ type: types.SET_TITLE, title })
}

export const alert = msg => ({
   type: types.ALERT,
   msg
})

export const hideAlert = () => dispatch => {
  dispatch({ type: types.HIDE_ALERT })
}

export const setReferrerIfNeeded = location => dispatch => {
  const referrer =  location.state && location.state.from.pathname
  referrer && dispatch({ type: types.SET_REFERRER, referrer })
  && dispatch(alert('请先登录'))
}
