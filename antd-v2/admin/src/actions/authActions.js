import { history } from '../utils/routerUtils'
import * as types from '../constants/ActionTypes'

export const login = data => dispatch => {
  const { username, password } = data
  if (username === 'happypeter' && password === '111111') {
    history.push('/dashboard/dishes/new')
    dispatch({ type: types.LOGIN_SUCCESS })
    return Promise.resolve('登录成功！')
  } else {
    return Promise.reject(new Error('用户名密码错误！'))
  }
}

export const logout = () => dispatch => {
  history.push('/')
  return Promise.resolve('您已退出登录！')
}
