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

  render() {
		console.log(this.props)
		const { letters } = this.state
		const { letterClicked } = this.props
    return(
			<div className="word d-flex mx-2 my-1">
				{this.props.word.map((letter, index) => (
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
}

export default Word;
