import{ createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import logger from 'redux-logger'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

// Creating Store and giving it the reducer
export default createStore(
	reducers,
	{},
	compose(
		applyMiddleware(createLogger(), thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
