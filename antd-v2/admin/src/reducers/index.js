import { combineReducers } from 'redux'
import common from './common'
import dish from './dish'

const rootReducer = combineReducers({
  common,
  dish
})

export default rootReducer
