import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './expression.css'

import Word from './word/word'

class Expression extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

  render() {
		const { expression } = this.props
    return(
			<div className=" d-flex flex-wrap justify-content-center mb-4">
				{expression.map((word, index) => (
					<Word key= {index} word= {word} />
					))}
			</div>
		)
	}
}

Expression.propTypes = {
	expression: PropTypes.array.isRequired,
}

export default Expression;
