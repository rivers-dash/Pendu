import Expressions from '../utils/expressions/expressions'
import { dispatchExpressionToLetters } from '../utils/functions/dispatchExpression'

let Expression = Expressions[Math.floor(Math.random() * Math.floor(Expressions.length))]

let initialState = {
	value: Expression.value.toUpperCase(),
	clue: Expression.clue,
	letters: dispatchExpressionToLetters(Expression.value.toUpperCase()),
	isWin: false,
}

export const expression = (state = {
	...initialState
}, action) => {
	switch (action.type) {
		case 'FETCH_EXPRESSION':
			let Expression = Expressions[Math.floor(Math.random() * Math.floor(Expressions.length))]
			state = {
				...state,
				value: Expression.value.toUpperCase(),
				clue: Expression.clue,
			}
			break;

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
		Expression = Expressions[Math.floor(Math.random() * Math.floor(Expressions.length))]
		initialState = {
			value: Expression.value.toUpperCase(),
			clue: Expression.clue,
			letters: dispatchExpressionToLetters(Expression.value.toUpperCase()),
			isWin: false,
		}
			state = {
				...initialState
			}
			break;

		default:
	}
	return state
}
