import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './win.css'

import { addToRank } from '../../utils/functions/hiScoreFunctions'
import { resetGame, fetchExpression } from '../../actions'


class Win extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}

		this.playAgain = this.playAgain.bind(this)
	}

	playAgain(){
		this.props.resetGame()
		this.props.fetchExpression()
	}

  render() {
		const { score } = this.props
		if (score > 0) {
			return (
	    	<div className="d-flex flex-column align-items-center pt-4">
					<h1>YOU WON</h1>

					<form>
					  <div className="form-group">
					    <label ></label>
							<div className="d-flex flex-row">
						    <input type="name" className="form-control mr-2" id="name" aria-describedby="name" placeholder="Enter your name"/>
								<button type="submit" className="btn btn-outline-success mr-2">
									<span role="img" aria-label="trophy">🏆</span>
								</button>
								<button className="btn btn-outline-danger" onClick={this.playAgain}>
									<span role="img" aria-label="joystick">🕹</span>
								</button>
							</div>
							<small id="nameHelp" className="form-text text-muted">You are on the top 10, Congrats</small>
					  </div>
					</form>
				</div>
			)
		} else {
			return (
				<div className="d-flex flex-column align-items-center pt-4">
					<h1>YOU LOST</h1>
					<p className="text-muted">wanna try again ?</p>
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
		...bindActionCreators({ resetGame, fetchExpression }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Win)
