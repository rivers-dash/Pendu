import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './expression.css'

import Word from './word/word'

class Expression extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expression: 'Les americains ne sont pas alles dur la lune'
		}
	}

	dispatchExpression(){
		const { expression } = this.state
		let exprsn = expression.toUpperCase()
		let size = exprsn.length
		let content = []
		let spaceIndex

		while (spaceIndex !== -1) {
			spaceIndex = exprsn.indexOf(' ')

			if (spaceIndex !== -1){
				content.push(exprsn.slice(0, spaceIndex))
			} else {
				content.push(exprsn.slice(0))
			}
			exprsn = exprsn.slice(spaceIndex + 1, size)
		}

		return (content)
	}


  render() {
		const { letterClicked } = this.props
    return(
			<div className="expression d-flex flex-wrap justify-content-center">
				{this.dispatchExpression().map((word, index) => (
					<Word key= {index} word= {word} letterClicked= {letterClicked}/>
					))}
			</div>
		)
	}
}

Expression.propTypes = {
	letterClicked: PropTypes.string,
}

export default Expression;
