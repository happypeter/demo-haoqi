import { history } from '../utils/routerUtils'
import * as types from '../constants/ActionTypes'

export const updateSelectedIndex = index => ({
  type: types.UPDATE_SELECTED_INDEX,
  index
})

export const selectItem = link => dispatch => {
  dispatch(updateSelectedIndex(link))
  history.push(link)
}

export const loadSelectedIndex = () => dispatch => {
  dispatch(updateSelectedIndex(history.location.pathname))
}
