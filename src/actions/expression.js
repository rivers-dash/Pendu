import axios from 'axios'

export function letterClick(letter) {
	return {
		type: 'LETTER_CLICK',
		payload: letter,
	}
}

export function fetchExpression() {
	return function action(dispatch) {
    dispatch({ type: 'FETCH_EXPRESSION' })

		axios.get('http://localhost:9001/expression')
		.then((response) => {
			dispatch(fetchExpressionSuccess(response.data))
		})
		.catch((error) => {
			dispatch(fetchExpressionError(error))
		})
	}
}

export function fetchExpressionSuccess(expression) {
	return {
		type: 'FETCH_EXPRESSION_SUCCESS',
		payload: expression,
	}
}

export function fetchExpressionError(error) {
	return {
		type: 'FETCH_EXPRESSION_ERROR',
		payload: error,
	}
}

export function addExpression(expression) {
	return function action(dispatch) {
    dispatch({ type: 'ADD_EXPRESSION' })

		axios.post('http://localhost:9001/expression', expression)
		.then((response) => {
			dispatch(addExpressionSuccess(response.data))
		})
		.catch((error) => {
			dispatch(addExpressionError(error))
		})
	}
}

export function addExpressionSuccess(expression) {
	return {
		type: 'ADD_EXPRESSION_SUCCESS',
		payload: expression,
	}
}

export function addExpressionError(error) {
	return {
		type: 'ADD_EXPRESSION_ERROR',
		payload: error,
	}
}
