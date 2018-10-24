import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './clue.css'

class Clue extends Component {
	constructor(props) {
		super(props)
		this.state = {
			clue: 'Clue',
			transition: 'hidden'
		}
		this.onClick = this.onClick.bind(this)
		this.displayClueButton = this.displayClueButton.bind(this)
		this.onHoverOnInstruction = this.onHoverOnInstruction.bind(this)
		this.onHoverOutOfInstruction = this.onHoverOutOfInstruction.bind(this)
	}

	onHoverOnInstruction() {
		this.setState({ transition: 'card-body visible'})
	}

	onHoverOutOfInstruction() {
		this.setState({ transition: 'hidden'})
	}

	onClick() {
		const { clue, onClueClick } = this.props
		this.setState({ clue: clue})
		onClueClick()
	}

	displayClueButton() {
		const { clue } = this.state
		if (clue === 'Clue') {
			return (
				<button
					type="button"
					className="btn btn-outline-danger"
					onClick={this.onClick}
				>
					<span role="img" aria-label="Question mark">❓</span>
				</button>
			)
		}
	}

  render() {
		const { clue, transition } = this.state
    return (
			<div className="card text-white bg-dark mb-3">
				<div className="card-header card-title" onMouseOver={this.onHoverOnInstruction} onMouseOut={this.onHoverOutOfInstruction}>
					<h1 className="row justify-content-between">
						<div className="ml-3"> {clue} </div>
						{this.displayClueButton()}
					</h1>
			</div>
				<div className={transition}>
					<div className="card-text">
						The Clue lowers your hit values and increases your strikes value.
					</div>
				</div>
			</div>
		)
	}
}

Clue.propTypes = {
	clue: PropTypes.string.isRequired,
	onClueClick: PropTypes.func.isRequired,
}

export default Clue;
