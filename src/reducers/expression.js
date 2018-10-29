import Expressions from '../utils/expressions/expressions'
import { dispatchExpressionToLetters } from '../utils/functions/dispatchExpression'
import thunk from 'redux-thunk'
import axios from 'axios'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'

let initialState = {
	fetching: false,
	fetched: false,
	isWin: false,
}

const expression = (state = { ...initialState }, action) => {
	switch (action.type) {

		case 'FETCH_EXPRESSION': {
			state = {
				...state,
				fetching: true,
			}
			break;
		}

		case 'FETCH_EXPRESSION_SUCCESS': {
			state = {
				...state,
				fetching: false,
				fetched: true,
				value: action.payload.expression.toUpperCase(),
				clue: action.payload.clue,
				letters: dispatchExpressionToLetters(action.payload.expression.toUpperCase()),
			}
			break;
		}

		case 'FETCH_EXPRESSION_ERROR': {
			state = {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			}
			break;
		}

		case 'LETTER_CLICK':
		let temp = state.letters
		temp.forEach(function(word, index) {
			word.forEach(function(letter, i) {
				if (letter.value === action.payload) {
					letter.isHidden = false
				}
			})
		})

		state = {
			...state,
			letters: [
				...temp,
			]
		}

		let count = 0
		state.letters.forEach(function(word, index) {
			word.forEach(function(letter, i) {
				if (letter.isHidden) {
					count++
				}
			})
		})
		if (count === 0) {
			state = {
				...state,
				isWin: true
			}
		}
		break;

		case 'RESET_GAME':
		state = {
			initialState
		}
			break;

		default:
	}
	return state
}

export default expression
