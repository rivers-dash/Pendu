import { hiScores } from '../hiScores/hiScores'

export function isTopRank(score) {
	hiScores.forEach(function(winner) {
		if (score > winner.score)
			return true
		else {
			return false
		}
	})
}

export function addToRank(player) {
	if (isTopRank(player.score)) {
		hiScores.forEach(function(winner, index){
			if (player.score > winner.score) {
				hiScores.splice(index, 0, player)
			}
		})

		if (hiScores.length > 10) {
			hiScores.splice(10)
		}
	}
	console.log(hiScores)
}
