import axios from 'axios'

export function getHiscores() {
	return function action(dispatch) {
    dispatch({ type: 'FETCH_HISCORES' })
		axios({
			method: 'get',
		  url: 'http://localhost:9001/api/scores',
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
		type: 'FETCH_HISCORES_SUCCESS',
		payload: hiscores,
	}
}

export function getHiscoresError(error) {
	return {
		type: 'FETCH_HISCORES_ERROR',
		payload: error,
	}
}

export function getHiscoresInit() {
	return {
		type: 'FETCH_HISCORES_INIT',
	}
}

// -- AddScore ------------------------------------------------------------
export function addHiscore(score) {
	return function action(dispatch) {
    dispatch({ type: 'ADD_HISCORE' })
		axios({
			method: 'post',
		  url: 'http://localhost:9001/api/scores',
			data: score,
			withCredentials: true,
		})
		.then((response) => {
			dispatch(addHiscoreSuccess(response))
		})
		.catch((error) => {
			dispatch(addHiscoreError(error))
			setTimeout(() => (dispatch(addHiscoreInit())), 3000)
		})
	}
}

export function addHiscoreSuccess(hiscores) {
	return {
		type: 'ADD_HISCORE_SUCCESS',
		payload: hiscores,
	}
}

export function addHiscoreError(error) {
	return {
		type: 'ADD_HISCORE_ERROR',
		payload: error,
	}
}

export function addHiscoreInit() {
	return {
		type: 'ADD_HISCORE_INIT',
	}
}
