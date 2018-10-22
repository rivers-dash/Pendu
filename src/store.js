import{ createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { createLogger } from 'redux-logger'

import { score } from './reducers/scoreReducers'
import { expression } from './reducers/expressionReducers'

// Creating Store and giving it the reducer
export default createStore(
	combineReducers({
		expression,
		score
	}),
	{},
	applyMiddleware(createLogger())
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
