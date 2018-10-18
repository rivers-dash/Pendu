import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './button.css'

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			class: 'btn btn-light mx-1 my-1'
		}

		this.onButtonClick = this.onButtonClick.bind(this)
	}

	onButtonClick() {
		this.setState({ class: 'btn btn-dark mx-1 my-1' })
	}

  render() {
    return (
			<button className={this.state.class} onClick={this.onButtonClick}>
				{this.props.letter}
			</button>
		)
	}
}

Button.propTypes = {
	letter: PropTypes.string.isRequired,
}

export default Button;
