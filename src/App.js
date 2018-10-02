import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

const LINE = 14
const WORD = 'HIDDEN WORD forever and ever together'
const HIDDEN_SYMBOL = '_'
const LETTERS = (['A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N'])


class App extends Component {
	state = {
		word: WORD.toUpperCase(),
		size: WORD.length,
		hiddenWord: '',
	}

	generateWord() {
		const { word, size } = this.state
		const hiddenWord = []
		let temp = []
		let lines = word
		let a = 0
		let b = LINE
		let parcourir = 0
		let lastSpace
		let line
		console.log('size : ', size)

		while (parcourir < size) {
			lines = word.slice(a, b)
			lastSpace = lines.lastIndexOf(' ')
			console.log('lines : ', lines)
			console.log('last space : ', lastSpace)

			console.log('ANSWER : ', word.slice(a, a+lastSpace))
			line = word.slice(a, a+lastSpace)

			for (var i=0; i<lastSpace; i++) {
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


			a = a + lastSpace
			b = a + LINE
			parcourir = parcourir + LINE

			console.log('a : ',a)
			console.log('b : ',b)
			console.log('parcourir : ', parcourir)
			console.log('________________________')
		}

		for (var i=0; i<size; i++) {
			if (word[i] !== ' ') {
				hiddenWord.push({
					index: i+1,
					value: word[i],
					feedback: 'hidden'
				})
			}

			else {
				hiddenWord.push({
					index: i+1,
					value: word[i],
					feedback: 'visible'
				})
			}
		}

		console.log(hiddenWord)

		return hiddenWord
	}

  render() {
    return (
			<div className="pendu">

				<div className="hiddenWord">
					{this.generateWord().map((letter, index) => (
						<Button
							key={index}
							letter={letter.value}
							feedback={letter.feedback}
							index={letter.index}
						/>
					))}
				</div>

				<div className="pendu">
					{LETTERS.map((letter, index) => (
						<Button
							key={index}
							letter={letter}
							feedback='visible'
							index={index}
						/>
					))}
				</div>

      </div>
  	)
	}
}

export default App;
