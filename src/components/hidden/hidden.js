import React, { Component } from 'react';
import './hidden.css'

import Words from './words/words'

class Hidden extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hidden: 'les poules ont des dents '
		}
	}

	dispatchExpression(){
		const { hidden } = this.state
		let expression = hidden.toUpperCase()
		let size = expression.length
		let content = []
		let spaceIndex

		while (spaceIndex !== -1) {
			spaceIndex = expression.indexOf(' ')

			if (spaceIndex !== -1){
				content.push(expression.slice(0, spaceIndex))
			} else {
				content.push(expression.slice(0))
			}
			expression = expression.slice(spaceIndex + 1, size)
		}

		return (
			<Words words= {content}/>
		)
	}

  render() {
		const { expression } = this.state
    return(
			<div className="hidden d-flex justify-content-center">
				{this.dispatchExpression()}
			</div>
		)
	}
}

export default Hidden;
