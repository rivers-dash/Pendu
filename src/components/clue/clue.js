import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './clue.css'

class Clue extends Component {
	constructor(props) {
		super(props)
		this.state = {
			clue: 'Clue'
		}
		this.onClick = this.onClick.bind(this)
		this.displayClueButton = this.displayClueButton.bind(this)
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
		const { clue } = this.state
    return (
			<div className="card text-white bg-dark mb-3">
				<div className="card-header card-title">
					<h1 className="row justify-content-between">
						<div className="ml-3"> {clue} </div>
						{this.displayClueButton()}
					</h1>
			</div>
				<div className="card-body">
					<p className="card-text">
					The Clue lowers your hit values and increases your strikes value.
					</p>
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
