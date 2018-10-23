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

  render() {
		const { word} = this.props
    return(
			<div className="word d-flex mx-2 my-1">
				{word.map((letter, index) => (
					<Letter
						key= {index}
						letter= {letter}
					 />
					))}
			</div>
		)
	}
}

Word.propTypes = {
	word: PropTypes.array.isRequired,
}

export default Word;
