import * as types from '../constants/ActionTypes'
import { alert } from './commonActions'
import { history } from '../utils/routerUtils'

export const addToCart = dishId => dispatch => {
  dispatch({ type: types.ADD_TO_CART, dishId })
}

export const decrCartItem = (dishId) => dispatch => {
  dispatch({ type: types.DECR_CART_ITEM, dishId })
}

export const incrCartItem = (dishId) => dispatch => {
  dispatch({ type: types.INCR_CART_ITEM, dishId })
}

export const checkout = () => dispatch => {
  dispatch(alert('欢迎继续购物'))
  history.push('/dashboard')
  dispatch({ type: types.CHECKOUT })
}
