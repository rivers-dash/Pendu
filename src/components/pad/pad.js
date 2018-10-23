import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Letters from './letters.js'
import Button from '../button/button'
import './pad.css'

class Pad extends Component {
	constructor(props) {
		super(props)
		this.state = {
			onBClick: this.props.onBClick
		}
	}

	handleButtonClick(letter) {
		this.props.onButtonClick(letter)
	}

  render() {
    return(
			<div id="container">
				<div className="a">
				{Letters.map((letter, index) => (
					<Button
						key= {index}
						letter= {letter}
						onButtonClick={this.handleButtonClick.bind(this)}
					 />
					))}
			</div>
			</div>
		)
	}
}

Pad.propTypes = {
	onButtonClick: PropTypes.func.isRequired
}

export default Pad;
