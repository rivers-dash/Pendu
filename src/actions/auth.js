import axios from 'axios'

export function login(credentials) {
	return function action(dispatch) {
    dispatch({ type: 'LOGIN' })
		axios({
			method: 'post',
		  url: 'http://localhost:9001/api/login',
		  data: credentials,
			withCredentials: true,
		})
		.then((response) => {
			dispatch(loginSuccess(response))
		})
		.catch((error) => {
			dispatch(loginError(error))
		})
	}
}

export function loginSuccess(token) {
	return {
		type: 'LOGIN_SUCCESS',
		payload: token,
	}
}

export function loginError(error) {
	return {
		type: 'LOGIN_ERROR',
		payload: error,
	}
}

// -- Logout ------------------------------------------------------------------

export function logout(credentials) {
	return function action(dispatch) {
    dispatch({ type: 'LOGOUT' })
		axios({
			method: 'get',
		  url: 'http://localhost:9001/api/logout',
			withCredentials: true,
		})
		.then((response) => {
			dispatch(logoutSuccess(response))
		})
		.catch((error) => {
			dispatch(logoutError(error))
		})
	}
}

export function logoutSuccess(token) {
	return {
		type: 'LOGOUT_SUCCESS',
		payload: token,
	}
}

export function logoutError(error) {
	return {
		type: 'LOGOUT_ERROR',
		payload: error,
	}
}
