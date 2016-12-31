import { combineReducers } from 'redux'
import text from './text'
import status from './status'

const allReducers = combineReducers({
  text,
  status
})

export default allReducers
