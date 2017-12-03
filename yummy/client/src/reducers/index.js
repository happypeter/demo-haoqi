import { combineReducers } from 'redux'
import common from './common'
import auth from './auth'
import user from './user'

const rootReducer = combineReducers({
  common,
  auth,
  user
})


export default rootReducer
