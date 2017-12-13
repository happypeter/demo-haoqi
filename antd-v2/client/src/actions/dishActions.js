import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { DISHES_URL } from '../constants/ApiConstants'

const receiveDishes = dishes => ({
  type: types.RECEIVE_DISHES,
  dishes
})

export const fetchDishes = () => dispatch => {
  axios.get(DISHES_URL).then(res => {
    dispatch(receiveDishes(res.data.dishes))
  })
}
