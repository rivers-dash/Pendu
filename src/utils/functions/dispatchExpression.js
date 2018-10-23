export function	dispatchExpressionToWords(exprsn){
	let size = exprsn.length
	let content = []
	let spaceIndex

	while (spaceIndex !== -1) {
		spaceIndex = exprsn.indexOf(' ')

		if (spaceIndex !== -1){
			content.push(exprsn.slice(0, spaceIndex))
		} else {
			content.push(exprsn.slice(0))
		}
		exprsn = exprsn.slice(spaceIndex + 1, size)
	}
	return content
}

export function dispatchExpressionToLetters(exprsn) {
	let words = dispatchExpressionToWords(exprsn)

	words.forEach(function(word, index){
		let letters = []
		for (let i=0; i<word.length; i++) {
			let QPass = false

			// Check if special character
			if (word.charCodeAt(i)>64 && word.charCodeAt(i)<91)
				QPass = true

			let letter = {
				value: word.charAt(i),
				isHidden: QPass
			}
			letters.push(letter)
		}
		words[index] = letters
	})
	return words
}
