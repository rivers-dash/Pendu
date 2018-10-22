import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './play.css'

import { strike, miss } from '../../actions/scoreActions'

import Clue from '../../components/clue/clue'
import Pad from '../../components/pad/pad'
import Expression from '../../components/expression/expression'

class Play extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	handleButtonClick(letter) {
		console.log('play', letter)
		this.setState({ letterClicked: letter})
		this.updateScore(letter)
	}

	updateScore(letter) {
		const { value } = this.props.expression
		let points = (value.split(letter)).length - 1
		if (points === 0) {
			this.props.miss(1)
		} else {
			this.props.strike({ strikePoints: points, hitPoints: 1 })
		}
	}

  render() {
    return(
			<div className="container">
			<div id="cell1" className="d-flex row justify-content-between">

				<div id="card1" className="justify-content-center">
					<div class="card text-white bg-dark mb-3">
					  <div class="card-header card-title">
							<h1>Score : {this.props.score.strikes}</h1>
						<h5 class="card-subtitle text-muted">Strikes : {this.props.score.hits}</h5>
					</div>
						<div class="card-body">
					    <p class="card-text">
							Every strike is	deducted from your score at the end of the game,
							the less worng guesses the more the score is high.
							</p>
					  </div>
					</div>
				</div>

				<div id="card2" className="justify-content-center">
					<Clue clue="Expression" />
				</div>

			</div>

			<div id="cell2" className='justify-content-center'>
				<Expression letterClicked={this.state.letterClicked} expression={this.props.expression}/>
				<Pad onButtonClick={this.handleButtonClick.bind(this)}/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		score: state.score,
		expression: state.expression
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({ strike, miss }, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Play)
