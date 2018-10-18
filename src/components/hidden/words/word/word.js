import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './word.css'

import Letter from './letter/letter'

class Word extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	dispatchWord() {
		const { word } = this.props
		let letters = []
		for (let index=0; index<word.length; index++) {
			let QPass = false
			// Check if special character
			if (word.charCodeAt(index)>64 && word.charCodeAt(index)<91)
				QPass = true

			let letter = {
				value: word.charAt(index),
				isHidden: QPass
			}
			letters.push(letter)
		}
		return letters
	}

  render() {
		const { word } = this.props
    return(
			<div className="word d-flex mx-2 my-1">
				{this.dispatchWord().map((letter, index) => (
					<Letter key= {index} letter= {letter} />
					))}
			</div>
		)
	}
}

Word.propTypes = {
	word: PropTypes.string.isRequired,
}

export default Word;
