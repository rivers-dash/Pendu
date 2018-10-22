import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './word.css'

import Letter from './letter/letter'

class Word extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0,
		}
	}

	componentDidUpdate() {
		const { score } = this.state
		console.log(score)
	}

	componentWillMount() {
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
		this.setState({ letters: letters })
	}

	componentWillReceiveProps(nextProps) {
		const { letters } = this.state
		letters.map((letter, index) => {
			if (nextProps.letterClicked === letter.value){
				let temp = {...letter}
					temp.isHidden = false
					this.setState({ [letter]: temp, })
			}
			return 0
		})
	}

  render() {
		const { letters } = this.state
		const { letterClicked } = this.props
    return(
			<div className="word d-flex mx-2 my-1">
				{letters.map((letter, index) => (
					<Letter
						key= {index}
						letter= {letter}
						letterClicked={letterClicked}
					 />
					))}
			</div>
		)
	}
}

Word.propTypes = {
	word: PropTypes.string.isRequired,
	letterClicked: PropTypes.string
}

export default Word;
