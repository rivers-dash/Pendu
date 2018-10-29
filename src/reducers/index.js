import { combineReducers } from 'redux'

import expression from './expression'
import score from './score'


export default combineReducers({
	expression,
	score
})
