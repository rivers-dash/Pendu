import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import expression from './expression'
import score from './score'
import addedExpression from './addedExpression'
import auth from './auth'
import hiscores from './hiscores'


export default combineReducers({
	expression,
	score,
	addedExpression,
	auth,
	hiscores,
	form: formReducer
})
