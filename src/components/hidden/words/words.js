import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './words.css'

import Word from './word/word'

class Words extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

  render() {
		const { words } = this.props
    return(
			<div className="d-flex flex-wrap justify-content-center">
				{words.map((word, index) => (
					<Word key= {index} word= {word} />
					))}
			</div>
		)
	}
}

Words.propTypes = {
	words: PropTypes.array.isRequired,
}

export default Words;
