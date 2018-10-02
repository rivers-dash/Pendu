import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

const LINE = 14
const WORD = 'permutation THE WORLD SHOULD BE A BETTER PLACE'
const LETTERS = (['A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N'])


class App extends Component {
	state = {
		word: WORD.toUpperCase(),
		size: WORD.length,
		hiddenWord: '',
	}

	generateWord() {
		let { word, size } = this.state
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

  render() {
    return (
			<div className="pendu">

				<div className="hiddenWord">

					{
						this.generateWord().map((line) => (
							<div className="hiddenWord">
								{
									line.map((letter, index) => (
										<Button
											key={index}
											letter={letter.value}
											feedback={letter.feedback}
											index={letter.index}
										/>

									))
								}
							</div>
						))
					}

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
