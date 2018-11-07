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
			setTimeout(() => (dispatch(loginInit())), 3000)
		})
		.catch((error) => {
			dispatch(loginError(error))
			setTimeout(() => (dispatch(loginInit())), 3000)
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

export function loginInit(error) {
	return {
		type: 'LOGIN_INIT',
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

// -- Logout ------------------------------------------------------------------

export function signin(user) {
	return function action(dispatch) {
    dispatch({ type: 'SIGNIN' })
		axios({
			method: 'post',
		  url: 'http://localhost:9001/api/signin',
		  data: user,
			withCredentials: true,
		})
		.then((response) => {
			dispatch(signinSuccess(response))
			setTimeout(() => (dispatch(signinInit())), 3000)
		})
		.catch((error) => {
			dispatch(signinError(error))
			setTimeout(() => (dispatch(signinInit())), 3000)
		})
	}
}

export function signinSuccess(user) {
	return {
		type: 'SIGNIN_SUCCESS',
		payload: user,
	}
}

export function signinError(error) {
	return {
		type: 'SIGNIN_ERROR',
		payload: error,
	}
}

export function signinInit(error) {
	return {
		type: 'SIGNIN_INIT',
	}
}

// -- Edit Profile ------------------------------------------------------------------

export function editProfile(user) {
	return function action(dispatch) {
    dispatch({ type: 'EDIT_PROFILE' })
		axios({
			method: 'post',
		  url: 'http://localhost:9001/api/editOne',
		  data: user,
			withCredentials: true,
		})
		.then((response) => {
			dispatch(editProfileSuccess(response))
			setTimeout(() => (dispatch(editProfileInit())), 3000)
		})
		.catch((error) => {
			dispatch(editProfileError(error))
			setTimeout(() => (dispatch(editProfileInit())), 3000)
		})
	}
}

export function editProfileSuccess(user) {
	return {
		type: 'EDIT_PROFILE_SUCCESS',
		payload: user,
	}
}

export function editProfileError(error) {
	return {
		type: 'EDIT_PROFILE_ERROR',
		payload: error,
	}
}

export function editProfileInit(error) {
	return {
		type: 'EDIT_PROFILE_INIT',
	}
}
