import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './win.css'


import { resetGame } from '../../actions/hangmanActions'

class Win extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}

		this.playAgain = this.playAgain.bind(this)
	}

	playAgain(){
		this.props.resetGame()
	}

  render() {
		const { score } = this.props
		if (score > 0) {
			return (
	    	<div className="d-flex flex-column align-items-center pt-4">
					<h1>YOU WON</h1>
					<button className="btn btn-outline-danger" onClick={this.playAgain}>🕹</button>
				</div>
			)
		} else {
			return (
				<div className="d-flex justify-content-center">
					<h1>YOU LOST</h1>
					<button className="btn btn-outline-danger" onClick={this.playAgain}>🕹</button>
				</div>
			)
		}

	}
}

Win.propTypes = {
	score: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({ resetGame }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Win)
