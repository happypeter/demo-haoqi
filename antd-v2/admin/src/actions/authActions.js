import { history } from '../utils/routerUtils'
import * as types from '../constants/ActionTypes'
import { updateSelectedIndex } from './navActions'


export const login = data => dispatch => {
  const { username, password } = data
  if (username === 'happypeter' && password === '111111') {
    const target = '/dashboard/dishes/new'
    history.push(target)
    dispatch(updateSelectedIndex(target))
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
