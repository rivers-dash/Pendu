import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './button.css'

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			class: 'btn btn-light mx-1 my-1',
			isDisabled: false,
			letter: this.props.letter
		}

		this.onButtonClick = this.onButtonClick.bind(this)
	}

	onButtonClick() {
		console.log('button', this.state.letter)
		this.setState({
			class: 'btn btn-dark mx-1 my-1',
			isDisabled: true,
		 })
		this.props.onButtonClick(this.state.letter)
	}

	sendBack(letter) {
		console.log('hey')
		//this.props.onBClick(letter)
	}

  render() {
		const { isDisabled } = this.state
    return (
			<button className={this.state.class} onClick={this.onButtonClick} disabled={isDisabled}>
				{this.state.letter}
			</button>
		)
	}
}

Button.propTypes = {
	letter: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func.isRequired
}

export default Button;
