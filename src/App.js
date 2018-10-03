import React, { Component } from 'react';
import Button from './Button.js';
import words from './words.js'
import letters from './letters.js'
import './App.css';


const LINE = 14
const WORD = words[Math.floor(Math.random() * Math.floor(words.length))]
const LETTERS = (['A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N'])


class App extends Component {
	state = {
		hiddenWord: this.generateWord(),
		strikes: 0,
		life: 7,
	}

	constructor(props){
		super(props)
		this.generateWord = this.generateWord.bind(this)
		this.handleLetterClick = this.handleLetterClick.bind(this)
		this.showLetter = this.showLetter.bind(this)
	}

	generateWord() {
		let word = WORD.toUpperCase()
		let size = WORD.length
		let v1 = []
		let spaceIndex
		let hiddenWord = []
		let lines = []

		// Séparation des mots
		while (spaceIndex !== -1) {
			spaceIndex = word.indexOf(' ')

			if (spaceIndex !== -1){
				v1.push(word.slice(0, spaceIndex))
			}
			else {
				v1.push(word.slice(0))
			}

			word = word.slice(spaceIndex + 1, size)

		}

		for (var i=0; i<v1.length - 1; i++) {
			if (v1[i].length + v1[i+1].length < LINE) {
				v1[i] = v1[i].concat(' ', v1[i+1])
				v1.splice(i+1, 1)
				i--
			}
		}

		v1.forEach(function(line) {
			hiddenWord = []
			for (var i=0; i<line.length; i++) {
				if (line[i] !== ' ') {
					hiddenWord.push({
						index: i+1,
						value: line[i],
						feedback: 'hidden'
					})
				}

				else {
					hiddenWord.push({
						index: i+1,
						value: line[i],
						feedback: 'visible'
					})
				}
			}
			lines.push(hiddenWord)
		})

		return lines
	}

	handleLetterClick(letter, index) {
		const { strikes } = this.state
		letters[index].feedback = 'used'
		this.setState({ strikes: strikes + 1})
		this.showLetter(letter)
	}

	showLetter(letter) {
		const { hiddenWord } = this.state
		let hit = false

		for (var i=0; i<hiddenWord.length; i++){
			for (var j=0; j<hiddenWord[i].length; j++){
				if (hiddenWord[i][j].value === letter) {
					let temp = [...hiddenWord]
					temp[i][j].feedback = 'visible'
					this.setState({ hiddenWord: temp, })
					hit = true
				}
			}
		}
		this.lifeProcess(hit)
	}

	lifeProcess(hit) {
		const { life } = this.state
		if (!hit)
			this.setState({ life: life-1})
	}

	heartCanvas() {
		const { life } = this.state
		let lifescore = ''

		for (var i=0; i<life; i++) {
			lifescore = lifescore.concat('❤️ ')
		}
		while (lifescore.length<21){
			lifescore = lifescore.concat('💔 ')
		}

		return lifescore
	}

	score() {
		const { hiddenWord, strikes, life} = this.state

		let win = true
		hiddenWord.forEach(function(line) {
			line.forEach(function(letter) {
				if (letter.feedback === 'hidden')
					win = false
			})
		})

		if (win) {
			return (
				<div className="subtitle">
					YOU WON
					<br></br>
					Vous deviez deviner
					<br></br>
					{WORD.toUpperCase()}
					<br></br>
					🏆
				</div>
			)
		}

		while (life>0) {
			return (
				<div>
					<div className="subtitle">
						Nombre d'essais : {strikes}
						<br></br>
						Vies restantes : {life}
						<br></br>
						{this.heartCanvas()}
					</div>

					<div className="pendu">
						{letters.map((letter, index) => (
							<Button
								key={index}
								letter={letter.value}
								feedback={letter.feedback}
								index={index}
								clicable={'clicable'}
								onClick={this.handleLetterClick}
							/>
						))}
					</div>

				</div>
			)
		}

		return (
			<div className="subtitle">
				Nombre d'essais : {strikes}
				<br></br>
				Vous avez perdu
				<br></br>
				🐸
			</div>
		)
	}



  render() {
		const { hiddenWord } = this.state
    return (
			<div className="pendu">
				<div className="title">
					Jouer au Pendu avec ReactJs
				</div>

				<div className="hiddenWord">
					{hiddenWord.map((line, index) => (
						<div className="hiddenWord" key={index}>
							{line.map((letter, index) => (
								<Button
									key={index}
									letter={letter.value}
									feedback={letter.feedback}
									index={letter.index}
									clicable={'unclicable'}
								/>
								))}
						</div>
						))}
				</div>

				{this.score()}


      </div>
  	)
	}
}

export default App;
