import axios from 'axios'

export function addExpression(expression) {
	return function action(dispatch) {
    dispatch({ type: 'ADD_EXPRESSION' })

		axios({
			method: 'post',
		  url: 'http://localhost:9001/api/expression',
		  data: expression,
			withCredentials: true,
		})
		.then((response) => {
			dispatch(addExpressionSuccess(response.data))
			setTimeout(() => (dispatch(addExpressionInit())), 3000)
		})
		.catch((error) => {
			dispatch(addExpressionError(error))
			setTimeout(() => (dispatch(addExpressionInit())), 3000)
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

export function addExpressionInit() {
	return {
		type: 'ADD_EXPRESSION_INIT',
	}
}
