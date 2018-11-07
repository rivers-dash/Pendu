import axios from 'axios'

export function getHiscores() {
	return function action(dispatch) {
    dispatch({ type: 'GET_HISCORES' })
		axios({
			method: 'get',
		  url: 'http://localhost:9001/api/hiscores',
			withCredentials: true,
		})
		.then((response) => {
			dispatch(getHiscoresSuccess(response))
		})
		.catch((error) => {
			dispatch(getHiscoresError(error))
			setTimeout(() => (dispatch(getHiscoresInit())), 3000)
		})
	}
}

export function getHiscoresSuccess(hiscores) {
	return {
		type: 'GET_HISCORES_SUCCESS',
		payload: hiscores,
	}
}

export function getHiscoresError(error) {
	return {
		type: 'GET_HISCORES_ERROR',
		payload: error,
	}
}

export function getHiscoresInit() {
	return {
		type: 'GET_HISCORES_INIT',
	}
}
