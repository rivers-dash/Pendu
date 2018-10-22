export function strike(points) {
	return {
		type: 'STRIKE',
		payload: points
	}
}

export function miss(points) {
	return {
		type: 'MISS',
		payload: points
	}
}
