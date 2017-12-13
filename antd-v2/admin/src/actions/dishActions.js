import * as types from '../constants/ActionTypes'
import { DISHES_URL, DELETE_DISH_URL, NEW_DISH_URL } from '../constants/ApiConstants'
import axios from 'axios'
import { history } from '../utils/routerUtils'
import { updateSelectedIndex } from './navActions'

export const fetchDishes = () => dispatch => {
  dispatch({ type: types.REQUEST_DISHES })
  axios.get(DISHES_URL).then(res => {
    const { dishes } = res.data
    dispatch({ type: types.RECEIVE_DISHES, dishes })
  })
}

export const deleteDish = id => dispatch => {
  return axios.delete(DELETE_DISH_URL.replace(':id', id))
    .then(
      res => {
        dispatch({ type: types.REMOVE_DISH, id })
        return { msg: '删除甜点成功' }
      }
    ).catch(
      err => {
        const serverErr = err && err.response
        console.log('服务器报错：', serverErr)
        throw new Error('服务器出错啦')
      }
    )
}

export const submitDish = data => dispatch => {
  return axios.post(NEW_DISH_URL, data)
    .then(
      res => {
        dispatch({ type: types.ADD_DISH, dish: res.data.dish })
        const target = '/dashboard/dishes'
        history.push(target)
        dispatch(updateSelectedIndex(target))
        return { message: '添加甜点成功' }
      }
    ).catch(
      err => {
        const serverErr = err && err.response
        console.log('服务器报错：', serverErr)
        throw new Error('服务器出错啦')
      }
    )
}

export const setPoster = poster => dispatch => {
  dispatch({ type: types.SET_POSTER, poster })
}
