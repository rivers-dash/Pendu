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
		const { clue } = this.props
		this.setState({ clue: clue})
	}

	displayClueButton() {
		const { clue } = this.state
		if (clue === 'Clue') {
			return (
				<button
					type="button"
					class="btn btn-outline-danger"
					onClick={this.onClick}
				>❓</button>
			)
		}
	}

  render() {
		const { clue } = this.state
    return (
			<div class="card text-white bg-dark mb-3">
				<div class="card-header card-title">
					<h1 className="row justify-content-between">
						<div className="ml-3"> {clue} </div>
						{this.displayClueButton()}
					</h1>
				<h5 class="card-subtitle text-muted"></h5>
			</div>
				<div class="card-body">
					<p class="card-text">
					The Clue costs half of your final score.
					</p>
				</div>
			</div>
		)
	}
}

Clue.propTypes = {
	clue: PropTypes.string.isRequired,
}

export default Clue;
